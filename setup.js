#! /usr/bin/env node
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

console.log(process.argv)

setUp((err, result) => {
  console.log("Project Created!")
});

function setUp(callBack) {
  const path = "./" + process.argv[2];
  exec("git init", (err, stdout, stderr) => {
    if (err) {
      callBack(err)
    }
    fs.mkdir(path, { recursive: true }, (err) => {
      if (err) {
        callBack(err)
      }
      fs.writeFile(path + "/index.js", "", (err) => {
        if (err) {
          callBack(err)
        }
        fs.mkdir(path + "/spec", { recursive: true }, (err) => {
          if (err) {
            callBack(err)
          }
          fs.writeFile(path + "/spec/index.spec.js", "", (err) => {
            if (err) {
              callBack(err)
            }
            fs.writeFile(path + "/package.json", JSON.stringify(package, null, 2), (err) => {
              if (err) {
                callBack(err)
              }
              fs.writeFile(path + "/readme.md", "", (err) => {
                if (err) {
                  callBack(err)
                }
                fs.writeFile(path + "/eslintrc.json", "", (err) => {
                  if (err) {
                    callBack(err)
                  }
                  fs.writeFile(path + "/.gitignore", "node_modules", "utf-8", (err) => {
                    if (err) {
                      callBack(err)
                    }
                    if (process.argv[2] !== "test") {
                      exec(`npm --prefix ${path} install`, (err, stdout, stderr) => {
                        if (err) {
                          callBack(err)
                        }
                        callBack(null, path)
                      })
                    } else {
                      callBack(null, path)
                    }
                  })
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