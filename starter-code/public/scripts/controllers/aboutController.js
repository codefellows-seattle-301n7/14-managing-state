'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  //RESPONSE: We are assigning an anonymous function to aboutController.index which is being call in routes.js. this function is showing the element with an ID of about and hiding any siblings. Next it's calling the app.repos.requestRepos function.)
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
