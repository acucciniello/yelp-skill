module.exports = SessionEndedRequest

function SessionEndedRequest () {
  var response = 'Stopping your request and exiting your skill'
  this.response.speak(response)
  this.emit(':responseReady')
}
