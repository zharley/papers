var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Author Model
 * ==========
 */
var Author = new keystone.List('Author');

Author.add({
  name: { type: Types.Name, initial: true, required: true, index: true },
  email: { type: Types.Email },
  affiliations: { type: Types.Relationship, ref: 'Organization', many: true },
});

/**
 * Registration
 */
Author.defaultColumns = 'name, affiliations';
Author.register();
