# Introduction
99% of the codes and tutorials are created by Maximilian Schwarzmüller.
This repo is for the personal use only or you can simply clone repo and pracitice JEST!
 
# Reference
resource: https://academind.com/learn/javascript/javascript-testing-introduction

Part 1. JavaScript testing (unit tests, integration tests, e2e tests) 

# Description
to be customized and updated later T.T



# Git Clone and Installation


```bash
$ git clone git@github.com:DeepLearnerSC/JEST.git
```

```bash
$ npm install
```

for testing e2e
puppeteer is headless version of chrome browser which interects the dom.
```bash
$ npm install --save-dev puppeteer
```


Keynote:

in the util.test.js file, you need to configure your path for index.html

What you will need to do is the following steps.
1. create 'path.js' file.
2. and add the path codes.  (use 'pwd' command)
example) 
```bash
exports.path = 'file:///Users/USERNAME/development/JEST/index.html';
```
```bash
$ npm start
```

part 2. Mocking Async Code

This tutorial is based on academind.com: 
https://www.youtube.com/watch?v=4Fl5GH4eYZ8