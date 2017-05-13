const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  // your code goes here
  switch (typeof obj) {
    case ('null'): return null;
    case ('number'): return obj.toString();
    case ('string'): return '\"' + obj + '\"';
    case ('object'): 
      if (Array.isArray(obj)) {
        let result = '[';
        for (let i = 0; i < obj.length; i++) {
          if (i > 0) {
            result += ',';
          }
          result += stringify(obj[i]);
        }
        return result + ']';
      }
      else {
        let result = '{';
        for (let key in obj) {
          result += stringify(key) + ':' + stringify(obj[key]);
        }
        return result + '}';
      }
    default: return String(obj);  
  }
};

module.exports = {
  stringify: stringify
};