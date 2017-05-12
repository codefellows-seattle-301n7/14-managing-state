'use strict';
var app = app || {};

(function(module) {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
        // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
        // This is calling the function app.Article.numWordsByAuthor() which is first instantiated on line 67 of article.js which returns an array which contain objects of authors and the number of words each has written. We are iterating over each object and appending it to the elements that has the class of author-stats. Line 11 is replacing the text of elements with the class of .articles within the element with the id of #blog-stats with the integer of the total number of articles. line 12 is replacing the text of elements with the class of .word within the element with the id of #blog-stats with the integer of the total number of word by all authors.
      app.Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(app.Article.all.length);
      $('#blog-stats .words').text(app.Article.numWordsAll());
    }
  };

  app.Article.fetchAll(adminView.initAdminPage);
  module.adminView = adminView;
})(app);
