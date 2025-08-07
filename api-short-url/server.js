const express = require("express");
const { nanoid } = require("nanoid");

const app = express();
const port = 3001;
const store = {};

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.use(express.json());

app.post('/api/shorten', (req, res) => {
    const { url } = req.body;
    
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    const slug = nanoid(6); 
    store[slug] = url;
    const shortUrl = `http://localhost:${port}/${slug}`;
    
    console.log(store);
    return res.json({ shortUrl });
});

app.get('/:slug', (req, res) => {
    const { slug } = req.params;
    const url = store[slug];
    if (!url) {
        return res.status(404).json({ error: 'URL not found' });
    }
    return res.redirect(url);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

