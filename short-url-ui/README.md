# 🔗 URL Shortener Frontend

User interface built with React and Vite.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

## 📱 How `App.jsx` works

### State
- `url` - Original URL entered by the user
- `shortUrl` - Shortened URL returned by the API

### Main function
`getShortUrl()` sends a POST request to `http://localhost:3001/api/shorten` with the original URL and updates state with the shortened URL.

### UI
1. **Input** - Field to enter the original URL
2. **"Shorten" button** - Triggers the URL shortening function
3. **Result** - Displays the shortened URL with a copy-to-clipboard button

## ⚙️ Technologies
- React + Vite
- Fetch API
- Clipboard API

