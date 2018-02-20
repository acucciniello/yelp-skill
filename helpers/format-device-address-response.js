// format-device-address-response.js
// Purpose: To create a response from the format device address request
module.exports = formatDeviceAddressResponse

var restcall = require('../yelp-fusion/rest-call.js').restCall

// Purpose: To create a response from the format device address request
// param(in): parsedResponse: the parsed response from the Device Address API
// param(out): callback: returns the formatted response or error to the previous function
// calledBy: getCourseSummaries()
function formatDeviceAddressResponse (parsedResponse, term, callback) {
  var stateOrRegion = parsedResponse.stateOrRegion
  var addressLine = parsedResponse.addressLine1
  var postalCode = parsedResponse.postalCode
  var codeForCountry = parsedResponse.countryCode
  console.log(parsedResponse)
  // if (stateOrRegion === '') {
  //   var addressNotInUS = 'Your address is not in the United States we cannot' +
  //     'give tee times for places outside of the US.  Please try searching for' +
  //     'a tee time by saying Alexa, ask Golf Now to book a tee time in Orlando.'
  //   callback(addressNotInUS)
  // } else
   if ( postalCode === null ) {
    var nullResponses = 'We seem to be missing your address information in your Alexa' +
    'app.  You could go to your settings, and edit the device location with your current location.' +
    callback(nullResponses)
  } else {
    const searchRequest = {
       term: term,
       location: postalCode
    }
    restcall(searchRequest, function (err, res) {
      if (err) {
        console.log(err)
        callback(err)
      }
      console.log(res)
      callback(null, res)
    })
  }
}
