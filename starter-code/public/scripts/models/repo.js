'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  repos.all = [];

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // it is doing a jQuery ajax request to the the /github proxy route defined on lne 36 of server.js then it is assigning the returned data to the repos.all array. This function is called in aboutController.index on line 14 og aboutController.js where app.repoView.index is passed in as the callback. 
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
    .then(callback);
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
