var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Author Model
 * ==========
 */
var Author = new keystone.List('Author');

Author.add({
  name: { type: Types.Text, initial: true, required: true, index: true },
  email: { type: Types.Email, initial: true },
  affiliations: { type: Types.Relationship, ref: 'Organization', many: true, initial: true, createInline: true },
});

/**
 * Registration
 */
Author.defaultColumns = 'name, affiliations';
Author.register();
