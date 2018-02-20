'use strict';

const yelp = require('yelp-fusion');

require('dotenv').config()
const apiKey = process.env.API_KEY;
// const searchRequest = {
//   term:'',
//   location: ''
// };

const client = yelp.client(apiKey);

var restCall = (searchRequest,callback) =>{
    console.log(searchRequest)
    client.search(searchRequest).then(response => {
      const businessInfo = response.jsonBody.businesses;
      var result = formatOutput(searchRequest, businessInfo);
      callback(null,result)
    }).catch(e => {
      // console.log(e);
      console.log(e)
      callback(e,null);
    });
}
var formatOutput = (searchRequest, businessInfo) => {
    var restuarants = []
    var output = {
      data: restuarants,
      result: result
    }
    var result = 'Here are your ' + searchRequest.term + ' restuarant recommendations: <break time="1s"/>'
    var i = 0
    businessInfo.forEach(element =>{
        if ( i < 4 ) {
            restuarants.push(element.id)
            result = result + ' You have ' + element.name + ' <break time="1s"/> ' + 'It has a rating of ' + element.rating + ' <break time="1s"/> ' + 'It is located at ' + element.location.address1 + ',' + element.location.city + ' <break time="1s"/> '
            i = i + 1 ;
        }
    })
    var output = {
      data: restuarants,
      result: result
    }
    return output
}
module.exports.restCall = restCall;
