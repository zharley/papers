var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Author Model
 * ==========
 */
var Author = new keystone.List('Author');

Author.add({
  firstName: { type: Types.Text, initial: true, required: true, index: true },
  lastName: { type: Types.Text, initial: true, required: true, index: true },
  email: { type: Types.Email },
  affiliations: { type: Types.Relationship, ref: 'Organization', many: true },
});

/**
 * Registration
 */
Author.defaultColumns = 'firstName, lastName';
Author.register();
