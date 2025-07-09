module.exports = {
  // Configuración de la ventana principal
  window: {
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight: 400,
    resizable: true,
    maximizable: true,
    title: 'WhatsApp Electron App',
    icon: null, // Puedes agregar un ícono personalizado aquí
    show: false, // No mostrar hasta que esté listo
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    }
  },

  // Configuración de WhatsApp Web.js
  whatsapp: {
    authStrategy: 'LocalAuth',
    puppeteer: {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor'
      ]
    }
  },

  // Configuración de la aplicación
  app: {
    name: 'WhatsApp Electron App',
    version: '1.0.0',
    description: 'Aplicación de escritorio para WhatsApp Web'
  },

  // Configuración de desarrollo
  development: {
    devTools: process.argv.includes('--dev'),
    hotReload: false
  }
}; 