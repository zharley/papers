var keystone = require('keystone');
var Paper = keystone.list('Paper');

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
      locals.paper = result;
      next(err);
    });
  });

  // Render the view
  view.render('paper');
};
