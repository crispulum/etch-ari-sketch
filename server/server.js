const express = require('express');
const app = express();
const path = require('path')
app.use(express.json())
const PORT = 3000;


app.get('/', (req, res) => {
    return res.sendFile(path.join((__dirname), '../client/index.html'))
})

app.listen(PORT, () => {
    console.log(`...Listening on port ${PORT}`)
  })