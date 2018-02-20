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
      const result = response.jsonBody.businesses[0];
      const data = JSON.stringify(result, null, 4);
      // console.log(prettyJson);
      callback(data,null)
    }).catch(e => {
      // console.log(e);
      callback(null,e);
    });
}

module.exports.restCall = restCall;
