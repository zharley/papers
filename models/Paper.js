var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Paper Model
 * ==========
 */
var Paper = new keystone.List('Paper');

var s3Storage = new keystone.Storage({
  adapter: require('keystone-storage-adapter-s3'),
  s3: {
    path: 'papers',
    headers: {
      'x-amz-acl': 'public-read',
    },
  },
});

Paper.add({
  title: { type: Types.Text, required: true, initial: true, index: true },
  authors: { type: Types.Relationship, ref: 'Author', many: true },
  publishDate: { type: Types.Date },
  summary: { type: Types.Markdown, height: 200 },
  input: { type: Types.Markdown, height: 300 },
  output: { type: Types.Markdown, height: 300 },
  method: { type: Types.Markdown, height: 300 },
  results: { type: Types.Markdown, height: 300 },
  extra: { type: Types.Markdown, height: 200 },
  image: { type: Types.File, storage: s3Storage },
});

/**
 * Registration
 */
Paper.defaultColumns = 'title, authors';
Paper.mappings = { name: 'title' };
Paper.register();
