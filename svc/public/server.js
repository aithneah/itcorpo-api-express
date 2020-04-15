const express = require('express');
const app = express();
const path = require('path')

import { getProjectWithEmployees } from './api'
import { getBenefitsFromLocalhost } from './api/benefitsLocalhost';
import { jsonReader } from './file/JSONReader';
import { fileReader } from './file/FileReader'
// const { getProjectWithEmployees } = require('./api')

// CHAIN OF RESPONSIBILITY // pierwszy który obsłuży - zamyka temat
// middleware // każdy może coś dodać, ale tylko jeden może wysłać odpowiedź

// TODO: npmjs:yargs
const PORT = 3010

app.get('/', (req, res, next) => {
  res.send("facade")
  next() // podaj dalej
})

app.get('/projects/:id', async (req, res, next) => {
  const projectId = req.params.id
  console.log(`received request with projectId:${projectId}`)
  const project = await getProjectWithEmployees(projectId)
  res.status(200).send(project)

  next()
})

const exampleJSON = path.join(__dirname, '../../data/benefits-DE.json')

app.get('/benefits', async (req, res, next) => {
  const benefitsFromLocalhost = await getBenefitsFromLocalhost()
  const result = jsonReader.getContent(exampleJSON)
  res.status(200).send(result)

  next()
})

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`)
  console.log("test")
})
