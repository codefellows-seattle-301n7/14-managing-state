'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)

  //This function is hiding the element with the ID 'about', but then hides all its siblings.
  //It is called in routes.js on line 5.
  //It calls repos.requestRepos, which is instantiated in repo.js on line 9.  It passses in a callback 'repoview.index', which is instantiated in repoView.js on line 17.

  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
