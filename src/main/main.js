const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const config = require('./config');

let mainWindow;
let whatsappClient;

function createWindow() {
  mainWindow = new BrowserWindow(config.window);

  mainWindow.loadFile('index.html');
  
  // Mostrar la ventana cuando esté lista
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
  
  // Abrir DevTools en modo desarrollo
  if (config.development.devTools) {
    mainWindow.webContents.openDevTools();
  }
}

function initializeWhatsApp() {
  whatsappClient = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: config.whatsapp.puppeteer
  });

  whatsappClient.on('qr', async (qr) => {
    try {
      const qrDataURL = await qrcode.toDataURL(qr);
      mainWindow.webContents.send('qr-code', qrDataURL);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  });

  whatsappClient.on('ready', () => {
    console.log('WhatsApp client is ready!');
    mainWindow.webContents.send('whatsapp-ready');
  });

  whatsappClient.on('authenticated', () => {
    console.log('WhatsApp client is authenticated!');
  });

  whatsappClient.on('auth_failure', (msg) => {
    console.error('WhatsApp authentication failed:', msg);
    mainWindow.webContents.send('auth-failure', msg);
  });

  whatsappClient.on('disconnected', (reason) => {
    console.log('WhatsApp client was disconnected:', reason);
    mainWindow.webContents.send('disconnected', reason);
  });

  whatsappClient.initialize();
}

app.whenReady().then(() => {
  createWindow();
  initializeWhatsApp();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// IPC handlers
ipcMain.handle('get-client-info', () => {
  if (whatsappClient) {
    return {
      isReady: whatsappClient.isReady,
      isAuthenticated: whatsappClient.isAuthenticated
    };
  }
  return { isReady: false, isAuthenticated: false };
});

ipcMain.handle('send-message', async (event, number, message) => {
  if (whatsappClient && whatsappClient.isReady) {
    try {
      const chatId = number.includes('@c.us') ? number : `${number}@c.us`;
      const result = await whatsappClient.sendMessage(chatId, message);
      return { success: true, result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  return { success: false, error: 'WhatsApp client not ready' };
});

ipcMain.handle('disconnect-whatsapp', async () => {
  if (whatsappClient) {
    try {
      await whatsappClient.destroy();
      whatsappClient = null;
      // Reinicializar el cliente
      initializeWhatsApp();
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  return { success: false, error: 'No client to disconnect' };
}); 