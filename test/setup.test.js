const { expect } = require("chai");
const { setUp } = require("../setup");
const fs = require("fs");

describe('setUp()', () => {
  process.argv[2] = "testcase"
  process.argv[100] = "testcase"
  it('git init', (done) => {
    const cbFunc = (err, stdout, stderr) => {
      expect(stdout).not.to.be.null;
      done()
    }
    setUp(cbFunc);
  });
  it('creates index file', (done) => {
    const cbFunc = (err, path) => {
      fs.readFile(path + "/index.js", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
  it('creates spec folder', (done) => {
    const cbFunc = (err, path) => {
      fs.readdir(path + "/spec", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
  it('creates spec file', (done) => {
    const cbFunc = (err, path) => {
      fs.readFile(path + "/spec/index.spec.js", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
  it('creates package.json file', (done) => {
    const cbFunc = (err, path) => {
      fs.readFile(path + "/package.json", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
  it('creates readme file', (done) => {
    const cbFunc = (err, path) => {
      fs.readFile(path + "/readme.md", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
  it('creates eslint file', (done) => {
    const cbFunc = (err, path) => {
      fs.readFile(path + "/eslintrc.json", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
  it('creates gitignore file', (done) => {
    const cbFunc = (err, path) => {
      fs.readFile(path + "/.gitignore", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
});