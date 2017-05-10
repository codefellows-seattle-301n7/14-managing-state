'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This one is called by app.repos.requestRepos from aboutController. It sends a request for users repos to the github and then assigns that data to the repos.all
  // When all the data is loaded app.repoView.index is called in callback().
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
