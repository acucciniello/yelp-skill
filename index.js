require('dotenv').config()
const APP_ID = process.env.APP_ID

var Alexa = require('alexa-sdk')
const LaunchRequest = require('./intents/launch-request.js')
const HelpIntent = require('./intents/help-intent.js')
const StopIntent = require('./intents/stop-intent.js')
const CancelIntent = require('./intents/cancel-intent.js')
const SessionEndedRequest = require('./intents/session-ended-request.js')
const ReviewsIntent = require('./intents/reviews-intent.js')
const FindIntent = require('./intents/find-intent.js')

//const UnhandledIntent = require('./intents/unhandled-intent.js')

// Purpose: The Entry Point of the skill and the function that is called by lambda
exports.handler = function (event, context, callback) {
  // handle intents for our skill
  var alexa = Alexa.handler(event, context)
  alexa.appId = APP_ID
  // register our event handlers
  alexa.registerHandlers(handlers)
    alexa.execute()
}

var handlers = {
  'LaunchRequest': LaunchRequest,
  'AMAZON.HelpIntent': HelpIntent,
  'AMAZON.StopIntent': StopIntent,
  'AMAZON.CancelIntent': CancelIntent,
  'SessionEndedRequest': SessionEndedRequest,
  'FindIntent': FindIntent,
  'ReviewsIntent': ReviewsIntent
  // 'Unhandled': UnhandledIntent
}
