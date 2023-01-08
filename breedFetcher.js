const { doesNotMatch } = require('assert');
const request = require('request');
const {get} = require('request');
//check body type
let data;

const fetchBreedDescription =  function (breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, function (error, response, body) {
    //console.log(typeof body);
    data = JSON.parse(body);
    if (breedName.toLowerCase() !== data[0].name.toLowerCase()) {
       return error;
    }
    if (response === 403 || response === 404) {
      return error;
    }
    return data[0];
    done();
  })
};

module.exports = {fetchBreedDescription};