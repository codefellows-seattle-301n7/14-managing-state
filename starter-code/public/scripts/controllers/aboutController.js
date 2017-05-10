'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (put your response in a comment here)
  // This function shows elements with the 'about' id, and hides their siblings.
  // It is called from the /about route in routes.js.
  // It calls $.show(), .siblings(), and .hide(), which are part of jquery.
  // It also calls app.repos.requestRepos(), which is in repo.js.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
