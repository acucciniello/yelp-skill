module.exports = HelpIntent

function HelpIntent () {
  var response = 'Welcome to your Yelp Skill! You can search for restaurants near you by saying Alexa ask yelp to find a restaurant near me. You can also ask for reviews about a specific business by saying Alexa, ask Yelp for reviews about Lil Frankies'
  this.response.speak(response).listen(response)
  this.emit(':responseReady')
}
