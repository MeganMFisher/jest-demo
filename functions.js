const axios = require('axios');

module.exports = {
    returnString(name) {
        return name;
    }, 

    returnNumber(num) {
        return num;
    },
    multiply(num1, num2) {
        return num1 * num2;
    },
    concatStrings(str1, str2) {
        return "Hello, " + str1 + ' ' + str2
    },
    checkLength(arr) {
        return arr.length;
    },
    getLuke(cb) {
        axios.get('https://swapi.co/api/people/1')
        .then(cb)
    }

}

// function callBackForCode(res) {
//     return res.data.name
// }
// getLuke(callBackForCode)