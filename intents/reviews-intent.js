module.exports = ReviewsIntent

function ReviewsIntent () {
  var me = this
  var ids = this.attributes['restuarantIds']
  reviews(ids, function(err, res) {
    if (err) {
      console.log(err)
      var noReviews = 'I was unable to get reviews at this moment! Try again later'
    } else {
      me.response.speak(res).listen(res)
      me.emit(':responseReady')
    }
  })
}
