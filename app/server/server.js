import fs from 'fs'
import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import HelloWorld from '../client/components/helloWorld'

const server = express()

server.get('/', (req, res) => {
  const pathToHtml = path.join(__dirname, './views/index.html')
  const template = fs.readFileSync(pathToHtml, 'utf8')

  const renderedHelloWorld = renderToString(<HelloWorld />)
  const page = template.replace('<!-- CONTENT -->', renderedHelloWorld)

  res.status(200).send(page)
})

if (!module.parent) {
  server.listen(8080, () => {
    console.log('Server started on port 8080...')
  })
}

export default server
