'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function shows an element with the id "about" and hides its siblins. It's called from repoView.  Then it calls
  //requestRepos() function from repo.js with the callback function app. repoView.index.(put your response in a comment here)
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
