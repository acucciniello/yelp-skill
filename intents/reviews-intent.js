module.exports = ReviewsIntent

var reviews = require('../yelp-fusion/rest-call.js').restCallForReview

function ReviewsIntent () {
  var me = this
  var ids = this.attributes['restuarantIds']
  var numberOfId = this.event.request.intent.slots.idNumber.value
  var id = ids[numberOfId]
  reviews(id, function(err, res) {
    if (err) {
      console.log(err)
      var noReviews = 'I was unable to get reviews at this moment! Try again later'
    } else {
      me.response.speak(res).listen(res)
      me.emit(':responseReady')
    }
  })
}
