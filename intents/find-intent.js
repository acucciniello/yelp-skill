module.exports = FindIntent

var getDeviceAddress = require('../helpers/get-device-address.js')
var formatDeviceAddressRequest = require('../helpers/format-device-address-request.js')

function FindIntent () {
  const ALL_ADDRESS_PERMISSION = 'read::alexa:device:all:address'
  const PERMISSIONS = [ALL_ADDRESS_PERMISSION]
  var me = this
  console.log(JSON.stringify(this))
  var deviceId = this.event.context.System.device.deviceId
  console.log(deviceId)
  var consentToken = this.event.context.System.apiAccessToken
  console.log(consentToken)
  var term = this.event.request.intent.slots.typeOfRestuarant.value
  console.log(term)
  if (deviceId === undefined || consentToken === undefined) {
    var askForPermissions = 'Please enable Location permissions in the Amazon Alexa app'
    me.emit(':tellWithPermissionCard', askForPermissions, PERMISSIONS)
  } else {
    var url = formatDeviceAddressRequest(deviceId)
    getDeviceAddress(url, consentToken, term, function (err, res) {
      if (err) {
        me.emit(':tell', err)
      }
      console.log(res)
      me.attributes['restuarantIds'] = res.data
      me.emit(':ask', res.result, res.result)
    })
  }
}
