# 🔗 Acortador de URLs Frontend

Interfaz de usuario construida con React y Vite.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📱 Funcionamiento de App.jsx

### Estados
- `url` - URL original ingresada por el usuario
- `shortUrl` - URL acortada devuelta por la API

### Función principal
`getShortUrl()` envía una petición POST a `http://localhost:3001/api/shorten` con la URL original y actualiza el estado con la URL acortada.

### Interfaz
1. **Input** - Campo para ingresar la URL original
2. **Botón "Shorten"** - Ejecuta la función para acortar la URL
3. **Resultado** - Muestra la URL acortada con botón para copiar al portapapeles

## ⚙️ Tecnologías
- React + Vite
- Fetch API
- Clipboard API

