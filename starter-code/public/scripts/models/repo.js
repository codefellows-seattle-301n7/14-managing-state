'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //RESPONSE: Anonymous function repos.requestRepos.  Then .get request for user repos on github.  Then a .then so data is sent to repos.all and if error occurs message is sent.  Then .then to callback when data is ready since it is asychronous. repos.requestRepos is called in the aboutController.js.
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
