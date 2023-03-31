const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');


app.use(express.json());

app.use(cors())



app.get('/wordcount', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

console.log("Setting up '/selected-text' route...")
app.post('/selected-text', (req, res) => {
  const selectedText = req.body.text;
  const wordCount = selectedText.trim().split(/\s+/).length;   // Number of words in the selected text
    console.log(`Selected text: ${selectedText}`);
    console.log(`Word count: ${wordCount}`);
 res.status(200).json({ count: wordCount }); // Send a response back to the client with the word count
});



app.use(express.static(__dirname + '/wordcount'))
app.post('/', function(req, res){

  var code = req.body.code;
  console.log(code);

  res.sendFile( __dirname + "/public/index.html");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});