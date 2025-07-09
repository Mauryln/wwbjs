# Estructura del Proyecto

## 📁 Organización de Carpetas

```
B/
├── src/                    # Código fuente principal
│   ├── main/              # Proceso principal de Electron
│   │   ├── main.js        # Archivo principal de Electron
│   │   └── start.js       # Script de inicio mejorado
│   ├── renderer/           # Interfaz de usuario
│   │   └── index.html     # Página principal de la aplicación
│   ├── config/            # Configuración centralizada
│   │   └── config.js      # Configuración de la aplicación
│   └── assets/            # Recursos estáticos
│       └── (íconos, imágenes, etc.)
├── package.json           # Configuración del proyecto
├── README.md              # Documentación principal
├── .gitignore            # Archivos a ignorar
└── STRUCTURE.md          # Este archivo
```

## 🔧 Rutas Actualizadas

### Archivos Principales
- **main.js**: `src/main/main.js`
- **index.html**: `src/renderer/index.html`
- **config.js**: `src/config/config.js`
- **start.js**: `src/main/start.js`

### Referencias en el Código
- **main.js** carga config desde: `../config/config`
- **main.js** carga HTML desde: `../renderer/index.html`
- **start.js** ejecuta desde: directorio raíz del proyecto

## 🚀 Scripts Disponibles

```bash
# Ejecutar en modo producción
npm start

# Ejecutar en modo desarrollo (con DevTools)
npm run dev

# Ejecutar con script de inicio mejorado
npm run launch

# Ejecutar en modo desarrollo con script de inicio
npm run launch:dev
```

## 📝 Notas de Desarrollo

- Todos los archivos de código fuente están en `src/`
- La configuración está centralizada en `src/config/`
- Los assets (íconos, imágenes) van en `src/assets/`
- El proceso principal de Electron está en `src/main/`
- La interfaz de usuario está en `src/renderer/`

## 🔄 Migración Completada

✅ **Archivos movidos correctamente**
✅ **Rutas actualizadas en package.json**
✅ **Referencias corregidas en main.js**
✅ **Script de inicio actualizado**
✅ **Estructura organizada y mantenible** 