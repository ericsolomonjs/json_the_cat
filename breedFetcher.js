const { get } = require('request');
const request = require('request');
//check body type
let data ;
const arg = process.argv[2];

request("https://api.thecatapi.com/v1/breeds/search?q="+arg, function (error, response, body) {
  //console.log(typeof body);
  console.log(body);
  
  data = JSON.parse(body);

  if (arg.toLowerCase() !== data[0].name.toLowerCase()) {
    console.error("breed not found");
    return;
  }  
  if (response === 403 || respone === 404) {
    console.error("request failed");
  }


  
  console.log(data[0].description);

})







