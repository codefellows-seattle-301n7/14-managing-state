'use strict';
var app = app || {};

(function(module) {
  const newArticle = {};

  // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live? This function creates new page from form which shows tab-content class, hides export-field id and on focus selects article-json id. Also on change for new-form id when run the newArticle.create function. When on submit for new-form id it runs the newArticle.submit function. It is being called at the end of this page.
  newArticle.initNewArticlePage = function() {
    $('.tab-content').show();
    $('#export-field').hide();
    $('#article-json').on('focus', function() {
      $(this).select();
    });
    $('#new-form').on('change', newArticle.create);
    $('#new-form').on('submit', newArticle.submit);
  };

  newArticle.create = function() {
    $('#articles').empty();
    let formArticle = new app.Article({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      authorUrl: $('#article-author-url').val(),
      category: $('#article-category').val(),
      body: $('#article-body').val(),
      publishedOn: new Date().toISOString()
    });

    formArticle.render = function() {
      let template = Handlebars.compile($('#article-template').text());

      this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
      this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
      this.body = marked(this.body);

      return template(this);
    };

    $('#articles').append(formArticle.render('#article-template'));
    $('pre code').each((i, block) => hljs.highlightBlock(block));
  };

  newArticle.submit = function(event) {
    event.preventDefault();
    let article = new app.Article({
      title: $('#article-title').val(),
      author: $('#article-author').val(),
      authorUrl: $('#article-author-url').val(),
      category: $('#article-category').val(),
      body: $('#article-body').val(),
      publishedOn: new Date().toISOString()
    });

    article.insertRecord();
    window.location = '../';
  };

  newArticle.initNewArticlePage();
  module.newArticle = newArticle;
})(app);
