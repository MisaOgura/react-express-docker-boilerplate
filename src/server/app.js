import fs from 'fs'
import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import HelloWorld from '../client/containers/helloWorld'

const app = express()

app.get('/', (req, res) => {
  const pathToHtml = path.join(__dirname, './views/index.html')
  const template = fs.readFileSync(pathToHtml, 'utf8')

  const renderedHelloWorld = renderToString(<HelloWorld />)
  const page = template.replace('<!-- CONTENT -->', renderedHelloWorld)

  res.status(200).send(page)
})

if (!module.parent) {
  app.listen(8080, () => {
    console.log('Server started on port 8080...')
  })
}

export default app
