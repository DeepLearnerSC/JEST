const { generateText } = require('./util');

// import is not a syntax natively supported by jest
// import {generateText} from  './util';

//globally available function provided by jest
test('should output name and age', ()=>{
    const text = generateText('Song', 88);
    expect (text).toBe('Song (88 years old)');
});