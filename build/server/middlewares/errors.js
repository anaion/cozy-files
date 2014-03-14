// Generated by CoffeeScript 1.7.1
var logger, util;

util = require('util');

logger = require('printit')({
  date: true
});

module.exports = function(err, req, res, next) {
  var message, statusCode;
  statusCode = err.status || 500;
  message = err instanceof Error ? err.message : err.error;
  logger.error("An error occured: " + message);
  console.log(err.stack);
  return res.send(statusCode, {
    error: message
  });
};
