const core = require('@actions/core')
const FormData = require('form-data')
const fs = require('fs')
const github = require('@actions/github')
const cheerio = require('cheerio')
const custom_fetch = async (...args) => {
  const { default: fetch } = await import('node-fetch')
  return fetch(...args)
}

async function makeFiles() {
  try {
    let input = core.getInput('path')
    if (input === undefined || input === '') {
      core.setFailed('Input path is not defined!')
      input = 'resources/backpack12.zip'
    }
    const formData = new FormData()
    formData.append('file', fs.createReadStream(input))

    const response = await custom_fetch('https://mc-packs.net/', {
      method: 'POST',
      body: formData
    })
    const content = await response.text()

    const $ = cheerio.load(content)
    const textArea = $('textarea')[0]
    const textAreaContent = $(textArea).text()

    const values = extractValues(textAreaContent)
    const url = values.resourcePack
    const hashCode = values.resourcePackSha1

    core.setOutput('url', url)
    core.setOutput('hash', hashCode)
    console.log('result', values)
  } catch (error) {
    console.log(error)
    core.setFailed(error.message)
  }
}

function extractValues(inputString) {
  const resourcePackRegex = /resource-pack=(.+)\s/
  const resourcePackSha1Regex = /resource-pack-sha1=(\w+)/

  const resourcePackMatch = inputString.match(resourcePackRegex)
  const resourcePackSha1Match = inputString.match(resourcePackSha1Regex)

  const resourcePack = resourcePackMatch ? resourcePackMatch[1] : null
  const resourcePackSha1 = resourcePackSha1Match
    ? resourcePackSha1Match[1]
    : null

  return { resourcePack, resourcePackSha1 }
}

makeFiles()
