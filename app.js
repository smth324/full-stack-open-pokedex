const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (_req, res) => {
  res.send('ok')
})
//sasdmassive changes even more changes
app.get('/version', (_req, res) => {
  res.send('7') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log('server started on port 5000')// eslint-disable-line no-console
})
