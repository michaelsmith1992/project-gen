const { expect } = require("chai");
const { setUp } = require("../setup");
const fs = require("fs");

describe('setUp()', () => {
  it('git init', (done) => {
    const cbFunc = (err, stdout, stderr) => {
      expect(stdout).not.to.be.null;
      done()
    }
    setUp(cbFunc);
  });
  it('creates index file', (done) => {
    const cbFunc = () => {
      fs.readFile("./index.js", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
  it('creates spec folder', (done) => {
    const cbFunc = () => {
      fs.readdir("./spec", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
  it('creates spec file', (done) => {
    const cbFunc = () => {
      fs.readFile("./spec/index.spec.js", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
  it('creates package.json file', (done) => {
    const cbFunc = () => {
      fs.readFile("./package.json", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
  it('creates readme file', (done) => {
    const cbFunc = () => {
      fs.readFile("./readme.md", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
  it('creates eslint file', (done) => {
    const cbFunc = () => {
      fs.readFile("./eslintrc.json", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
  it('creates gitignore file', (done) => {
    const cbFunc = () => {
      fs.readFile("./.gitignore", (err, file) => {
        expect(err).to.be.null;
        done();
      })
    }
    setUp(cbFunc);
  });
});