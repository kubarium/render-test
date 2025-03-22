import express from "express"
import path from "path"
import { fileURLToPath } from 'url';

const port = process.env.PORT || 8000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../dist"), { maxAge: "1y", etag: false }))


app.get('/api/products', async (req, res) => {
    const response = await fetch("https://dummyjson.com/products")
    const products = await response.json();

    console.log("how many products?", products.length)
    res.send(products);
});
app.get('/api/posts', async (req, res) => {
    const response = await fetch("https://dummyjson.com/posts")
    const posts = await response.json();

    console.log("how many posts?", posts.length)
    res.send(posts);
});
app.listen(port, () => {
    console.log('listening at ' + port);
})