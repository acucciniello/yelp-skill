module.exports = FindIntent

var getDeviceAddress = require('../helpers/get-device-address.js')
var formatDeviceAddressRequest = require('../helpers/format-device-address-request.js')

function FindIntent () {
  var me = this
  var deviceId = this.event.context.System.device.deviceId
    var consentToken = this.event.context.System.user.permissions.consentToken
    if (deviceId === undefined || consentToken === undefined) {
      var askForPermissions = 'Please enable Location permissions in the Amazon Alexa app'
      me.emit(':tellWithPermissionCard', askForPermissions, PERMISSIONS)
    } else {
      var url = formatDeviceAddressRequest(deviceId)
      getDeviceAddress(url, consentToken, function (err, res) {
        if (err) {
          me.emit(':tell', err)
        }
        handler.state = res.state
        console.log(res.state)
        emit(':ask', res.latLongOutput, res.latLongReprompt)
      })
    }
}
