var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Upload Model
 * ==========
 */
var Upload = new keystone.List('Upload');

var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./uploads'), // required; path where the files should be stored
    publicPath: '/public/uploads', // path where files will be served
  },
  format: function(item, file){
    return '<img src="/files/'+file.filename+'" style="max-width: 300px">'
  }
});


Upload.add({
  file: { type: Types.File, required: true, initial: true, storage: storage },
  label: { type: Types.Text, required: true, initial: true, index: true },
});

/**
 * Registration
 */
Upload.defaultColumns = 'label, file';
Upload.register();
