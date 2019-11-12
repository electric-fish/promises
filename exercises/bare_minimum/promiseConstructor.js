/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

var nodeStyle = require('./callbackReview.js');

// This function should retrieve the first line of the file at `filePath`
// var pluckFirstLineFromFileAsync = function(filePath) {
//   // TODO
// };

var pluckFirstLineFromFileAsync = Promise.promisify(nodeStyle.pluckFirstLineFromFile);

// This function should retrieve the status code of a GET request to `url`
// var getStatusCodeAsync = function(url) {
//   // TODO
// };

var getStatusCodeAsync = Promise.promisify(nodeStyle.getStatusCode);

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
