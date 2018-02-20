module.exports = CancelIntent

function CancelIntent () {
  var response = 'Canceling your request and exiting your skill'
  this.response.speak(response)
  this.emit(':responseReady')
}
