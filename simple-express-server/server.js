const twilio = require('twilio');
const express = require('express')
var cors = require('cors');

const app = express()

app.use("/cssFiles", express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));


const HOST = "localhost";
const PORT = 4000;

var accountSid = 'AC86b684bd8db08dc35420a3929050f157';
var authToken = '15477961c97a56c73563a6bcf962cd86';
var client = new twilio(accountSid, authToken);
var phone_no = "+17708241090"

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.post('/sendSMS', function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log("number: ", req.body.number)
  console.log("message: ", req.body.message)
  client.messages.create({
      body: req.body.message,
      to: req.body.number,  // Text this number
      from: phone_no // From a valid Twilio number
  })
  .then((message) =>
  {
    console.log("MSG ID: ", message.sid);
    res.send({
      status: "SUCCESS"
    });
  });
});

app.listen(PORT, HOST);
console.log(`Simple Server running on http://${HOST}:${PORT}`);
