const { generateText, checkAndGenerate } = require('./util');

// import is not a syntax natively supported by jest
// import {generateText} from  './util';

//globally available function provided by jest
//Unit test
test('should output name and age', ()=>{
    const text = generateText('Song', 88);
    expect (text).toBe('Song (88 years old)');
});

//Integration test
test('should generate a valid text output', () => {
    const text = checkAndGenerate('Yoda',1004);
    expect(text).toBe('Yoda (1004 years old)')
  });