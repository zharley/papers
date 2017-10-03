var keystone = require('keystone');
var md = require('markdown-it')();
var mk = require('markdown-it-katex');
var Paper = keystone.list('Paper');

md.use(mk);

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Init locals
  locals.section = 'papers';
  locals.filters = {
    id: req.params.id,
  };

  // Load the current paper
  view.on('init', function (next) {
    var q = Paper.model.findOne({
      _id: locals.filters.id,
    }).populate('authors  uploads');

    q.exec(function (err, result) {
      var paper = result.toObject();
      Object.keys(paper).forEach(function (key) {
        var value = paper[key];

        if (value && typeof value === 'object' && value.md && value.html) {
          value.html = md.render(value.md);
        }
      });

      locals.result = result;
      locals.paper = paper;
      next(err);
    });
  });

  // Render the view
  view.render('paper');
};
