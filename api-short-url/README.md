# 🔗 URL Shortener API

Backend API for the URL shortener application built with Express.js and Node.js.

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Running the server
```bash
node server.js
```

The API server will be running on `http://localhost:3001`

## 📋 API Endpoints

### POST `/api/shorten`
Shorten a long URL and generate a unique short URL.

**Request Body:**
```json
{
  "url": "https://example.com/very/long/url"
}
```

**Response (Success - 200):**
```json
{
  "shortUrl": "http://localhost:3001/abc123"
}
```

**Response (Error - 400):**
```json
{
  "error": "URL is required"
}
```

**Example:**
```bash
curl -X POST http://localhost:3001/api/shorten \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.google.com"}'
```

### GET `/:slug`
Redirect to the original URL using the short URL slug.

**Parameters:**
- `slug` (string): The unique identifier for the shortened URL

**Response (Success - 302):**
Redirects to the original URL

**Response (Error - 404):**
```json
{
  "error": "URL not found"
}
```

**Example:**
```bash
curl http://localhost:3001/abc123
# Redirects to the original URL
```

## ⚙️ Technologies
- **Express.js** - Web framework for Node.js
- **nanoid** - URL-friendly unique ID generator
- **CORS** - Cross-Origin Resource Sharing enabled for frontend integration

## 🔧 Configuration
- **Port:** 3001
- **CORS Origin:** `http://localhost:5173` (Frontend URL)
- **Storage:** In-memory storage (data is lost when server restarts)

## 📝 Notes
- URLs are stored in memory and will be lost when the server restarts
- Short URLs use a 6-character nanoid for the slug
- CORS is configured to allow requests from the React frontend