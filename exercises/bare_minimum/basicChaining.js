/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var getGitHubProfileAsync = require('./promisification.js');
// var pluckFirstLineFromFileAsync = require('./promiseConstructor.js');
var promiseConstructor = require('./promiseConstructor.js');


var fetchProfileAndWriteToFile = function (readFilePath, writeFilePath) {
  // TODO
  // /Users/student/Desktop/hrsf124-promises/test/bare_minimum/../files/github_handle.txt
  // fetch api with user's profile

  return promiseConstructor.pluckFirstLineFromFileAsync(readFilePath)
    .then((username) => {
      getGitHubProfileAsync.getGitHubProfileAsync(username)
        .then((profile) => {
          fs.writeFile(writeFilePath, JSON.stringify(profile), (err) => {
            if (err) {
              throw err;
            }
          });
        });
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
