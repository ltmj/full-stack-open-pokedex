const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/periodic', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('23')
})

app.use(express.static('dist'))

//start server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
