'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function gets called on line 16 of aboutController.js where it is passed into repos.requestRepos as a callback.
  // This function calls the ui function where everything in the 'ul' element within the about ID is emptied and where the element with ID about is hidden and only #about is shown.  We're also calling repos.with and taking anything from the result of this function (line 16 of repo.js) with a 'name' value and then mapping to get a series of LIs.
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
