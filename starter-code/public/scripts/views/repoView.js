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
//This file is being called from the requestRepos function in repo.js. It is the callback. It calls the ui function above to clear all content from the #about section before appending the user's github repos to the dom. It also calls the with function that is defined in repo.js. With is filtering thorugh the repos object by the name param and appending to the about ui element.
  repoView.index = function() {
    ui();

    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
