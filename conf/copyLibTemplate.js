const fs = require('fs');
const path = require('path');
const util = require('util');
const copyFile = util.promisify(fs.copyFile);

// ideally would want to check for lib folder first and then do this
// for now we just did it after we did the rollup so that the lib folder was there
copyFile(
  path.resolve('./conf/indexLibTemplate.js'),
  path.resolve('./lib/index.js'),
  fs.constants.COPYFILE_FICLONE,
)
  .catch(error => console.log('error', error))
  .then(() => console.log('successfully copied over the index.js template'));
