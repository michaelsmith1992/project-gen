const fs = require("fs");
const { exec } = require('child_process');

const package = {
  "name": "project-gen-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "mocha test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/michaelsmith1992/project-gen.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/michaelsmith1992/project-gen/issues"
  },
  "homepage": "https://github.com/michaelsmith1992/project-gen#readme",
  "dependencies": {
    "chai": "^4.2.0",
    "mocha": "^7.0.1"
  }
}

function setUp(callBack) {
  exec("git init", (err, stdout, stderr) => {
    if (err) {
      callBack(err)
    }
    fs.writeFile("./index.js", "", (err) => {
      if (err) {
        callBack(err)
      }
      fs.mkdir("./spec", { recursive: true }, (err) => {
        if (err) {
          callBack(err)
        }
        fs.writeFile("./spec/index.spec.js", "", (err) => {
          if (err) {
            callBack(err)
          }
          fs.writeFile("./package.json", JSON.stringify(package, null, 2), (err) => {
            if (err) {
              callBack(err)
            }
            fs.writeFile("./readme.md", "", (err) => {
              if (err) {
                callBack(err)
              }
              fs.writeFile("./eslintrc.json", "", (err) => {
                if (err) {
                  callBack(err)
                }
                fs.writeFile("./.gitignore", "node_modules", "utf-8", (err) => {
                  if (err) {
                    callBack(err)
                  }
                  callBack(null, true)
                })
              })
            })
          })
        })
      })
    })
  })
}

module.exports = {
  setUp
}