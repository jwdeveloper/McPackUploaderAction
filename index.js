const core = require('@actions/core');
const FormData = require('form-data');
const fs = require('fs');
const github = require('@actions/github');
const cheerio = require('cheerio');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function makeFiles() {
    try {


        let input = core.getInput('my-input');
        if (input === undefined || input === '') {
            input = "resources/backpack9.zip"
        }
        const stats = fs.statSync(input);
        const fileSizeInBytes = stats.size;
        console.log(input)

        const formData = new FormData();
        formData.append('file', fs.createReadStream(input));

        let headers = {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "cache-control": "max-age=0",
        }

        let response = await fetch("https://mc-packs.net/", {method: 'POST', body: formData, headers: headers});

        let content = await response.text();

        const $ = cheerio.load(content);
        const textArea = $("textarea")[0];
        const textAreaContent =  $(textArea).text()

        let values= extractValues(textAreaContent);

        let url = values.resourcePack;
        let hashCode = values.resourcePackSha1;

        core.setOutput("url", url);
        core.setOutput("hash", hashCode);
        console.log("result",values);

    } catch (error) {
        console.log(error)
        core.setFailed(error.message);
    }
}

function extractValues(inputString) {
    const resourcePackRegex = /resource-pack=(.+)\s/;
    const resourcePackSha1Regex = /resource-pack-sha1=(\w+)/;

    const resourcePackMatch = inputString.match(resourcePackRegex);
    const resourcePackSha1Match = inputString.match(resourcePackSha1Regex);

    const resourcePack = resourcePackMatch ? resourcePackMatch[1] : null;
    const resourcePackSha1 = resourcePackSha1Match ? resourcePackSha1Match[1] : null;

    return { resourcePack, resourcePackSha1 };
}



makeFiles();