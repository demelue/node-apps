const twilio = require('twilio');
const express = require('express')
var cors = require('cors');

const app = express()

app.use("/cssFiles", express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));


const HOST = "localhost";
const PORT = 4000;

app.use(express.json());

app.use(cors());

app.get('/images/:id', (req, res) => {
  res.sendFile(
    `<!doctype html>
    <html>
      <head>
        <title>${id}</title>
      </head>
      <body>
        <div >
            <img src="/${id}" height="200" width="200" alt="{Image Not Found}" >
        </div>
      </body>
    </html>`
  )
});

app.listen(PORT, HOST);
console.log(`Simple Server running on http://${HOST}:${PORT}`);
