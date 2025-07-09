# WhatsApp Electron App

Una aplicación de escritorio construida con Electron que permite conectarse a WhatsApp Web usando la API de whatsapp-web.js.

## 🚀 Características

- **Código QR**: Genera automáticamente un código QR para conectar tu WhatsApp
- **Pantalla de Bienvenida**: Interfaz elegante que se muestra cuando la conexión es exitosa
- **Reconexión Automática**: Maneja desconexiones y reconexiones automáticamente
- **Interfaz Moderna**: Diseño responsive y moderno con animaciones suaves

## 📋 Requisitos

- Node.js (versión 14 o superior)
- npm o yarn
- WhatsApp instalado en tu teléfono

## 🛠️ Instalación

1. **Clona o descarga el proyecto**
2. **Instala las dependencias:**
   ```bash
   npm install
   ```

## 🚀 Cómo usar

1. **Inicia la aplicación:**
   ```bash
   npm start
   ```

2. **Para desarrollo (con DevTools):**
   ```bash
   npm run dev
   ```

3. **Escanea el código QR:**
   - Abre WhatsApp en tu teléfono
   - Ve a Configuración > Dispositivos Vinculados
   - Escanea el código QR que aparece en la aplicación

4. **¡Listo!** Una vez escaneado, verás la pantalla de bienvenida

## 📱 Funcionalidades

### Pantalla de Código QR
- Muestra un código QR generado dinámicamente
- Indicador de estado de conexión
- Animación de carga mientras se genera el QR

### Pantalla de Bienvenida
- Confirmación de conexión exitosa
- Información sobre las funcionalidades disponibles
- Botón para desconectar y volver a conectar

## 🔧 Estructura del Proyecto

```
B/
├── main.js          # Proceso principal de Electron
├── index.html       # Interfaz de usuario
├── package.json     # Configuración del proyecto
└── README.md        # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **Electron**: Framework para aplicaciones de escritorio
- **whatsapp-web.js**: API para conectar con WhatsApp Web
- **qrcode**: Generación de códigos QR
- **HTML/CSS/JavaScript**: Interfaz de usuario

## 🔍 Solución de Problemas

### El código QR no aparece
- Verifica que tienes una conexión a internet estable
- Reinicia la aplicación
- Asegúrate de que WhatsApp Web no esté abierto en otro lugar

### Error de autenticación
- Cierra sesión de WhatsApp Web en tu navegador
- Desvincula todos los dispositivos en WhatsApp
- Intenta conectar nuevamente

### La aplicación no inicia
- Verifica que Node.js esté instalado correctamente
- Ejecuta `npm install` para asegurar que todas las dependencias estén instaladas

## 📝 Notas Importantes

- Esta aplicación usa la API no oficial de WhatsApp Web
- Solo un dispositivo puede estar conectado a la vez
- La sesión se mantiene entre reinicios de la aplicación
- Los datos de autenticación se almacenan localmente

## 🤝 Contribuir

Si encuentras algún problema o quieres agregar nuevas funcionalidades, no dudes en crear un issue o pull request.

## 📄 Licencia

MIT License - Ver el archivo LICENSE para más detalles. 