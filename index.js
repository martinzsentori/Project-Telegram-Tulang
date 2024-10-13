const express = require("express");
const app = express();
const port = 3250;

app.get("/", async (req, res) => {
  res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>Index Page</h1>
            </body>
            </html>`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
