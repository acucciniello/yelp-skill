module.exports = StopIntent

function StopIntent () {
  var response = 'Stopping your request and exiting your skill'
  this.response.speak(response)
  this.emit(':responseReady')
}
