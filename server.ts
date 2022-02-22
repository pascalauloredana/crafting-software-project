const fs = require("fs")
import { reconstruct } from './reconstruct';

(function() {
    let rawdata = fs.readFileSync('input.json');
    let inputData = JSON.parse(rawdata);
    console.log(reconstruct(inputData.words, inputData.inputString));
})();