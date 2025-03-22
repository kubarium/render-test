import express from "express"
import path from "path"
import { fileURLToPath } from 'url';

const port = process.env.PORT || 8000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.resolve(__dirname, "../dist"), { maxAge: "1y", etag: false }))

app.get("*", (req, res) => {
    // res.send("Kubar World!");
    // res.sendFile(path.join(__dirname, "../dist/index.html"))
})


app.listen(port, () => {
    console.log('listening at ' + port);
})