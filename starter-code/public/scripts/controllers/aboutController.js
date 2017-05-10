'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // (This is getting called from routes.js when user clicks on the about page. It will find the elements from the index page with the id of #about and show all the content. It will also hide the content of the sibling tabs. Then it will call the request repo function on the repos.js page)
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
