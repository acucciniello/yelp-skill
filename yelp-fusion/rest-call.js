'use strict';

const yelp = require('yelp-fusion');

require('dotenv').config()
const apiKey = process.env.APIKEY;
// const searchRequest = {
//   term:'',
//   location: ''
// };

const client = yelp.client(apiKey);

var restCall =(data,callback) =>{
    client.search(data).then(response => {
      const data = response.jsonBody.businesses;
      var result = formatOutput(data);
      callback(null,result)
    }).catch(e => {
      // console.log(e);
      callback(e,null);
    });
}
var formatOutput = (data) => {
    var result = ''
    var i = 0
    data.forEach(element =>{
        if ( i < 4 ) {
            result = result + 'You have ' + element.name + '<break time="1s"/>' + 'It has a rating of ' + element.rating + '<break time="1s"/>' + 'It is located ' + element.location.address1 + ',' + element.location.city
            i = i + 1 ;
        }
    })
    return data
}
module.exports.restCall = restCall;
