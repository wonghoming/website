const express = require('express')

const port = process.env.PORT || 3000

const server = handle => {
  const server = express()

  // custom routes should go above *

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log('> Ready on port %d', port)
  })
}

module.exports = server
