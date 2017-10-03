var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Paper Model
 * ==========
 */
var Paper = new keystone.List('Paper', {
  searchFields: 'title summary input output method results extra',
  drilldown: 'authors',
});

Paper.add({
  title: { type: Types.Text, required: true, initial: true, index: true },
  authors: { type: Types.Relationship, ref: 'Author', many: true, createInline: true },
  publishDate: { type: Types.Date },
  summary: { type: Types.Markdown, height: 200 },
  input: { type: Types.Markdown, height: 300 },
  output: { type: Types.Markdown, height: 300 },
  method: { type: Types.Markdown, height: 300 },
  results: { type: Types.Markdown, height: 300 },
  extra: { type: Types.Markdown, height: 200 },
  uploads: { type: Types.Relationship, ref: 'Upload', many: true, createInline: true },
});

/**
 * Registration
 */
Paper.defaultColumns = 'title, authors';
Paper.mappings = { name: 'title' };
Paper.register();
