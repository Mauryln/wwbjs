#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Iniciando WhatsApp Electron App...\n');

// Verificar si estamos en modo desarrollo
const isDev = process.argv.includes('--dev');
const command = isDev ? 'npm run dev' : 'npm start';

console.log(`📱 Modo: ${isDev ? 'Desarrollo' : 'Producción'}`);
console.log('⏳ Iniciando aplicación...\n');

// Ejecutar la aplicación
const child = spawn(command, [], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname
});

// Manejar eventos del proceso hijo
child.on('error', (error) => {
  console.error('❌ Error al iniciar la aplicación:', error.message);
  process.exit(1);
});

child.on('exit', (code) => {
  if (code === 0) {
    console.log('\n✅ Aplicación cerrada correctamente');
  } else {
    console.log(`\n❌ Aplicación cerrada con código de salida: ${code}`);
  }
  process.exit(code);
});

// Manejar señales de terminación
process.on('SIGINT', () => {
  console.log('\n🛑 Cerrando aplicación...');
  child.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Cerrando aplicación...');
  child.kill('SIGTERM');
}); 