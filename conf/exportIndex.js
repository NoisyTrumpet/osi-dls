// Consolidate different modules with index files into one main index file

// imports
const path = require('path');
const fs = require('fs');

const mainIndexFile = 'src/index.js';

// Remove src/index.js if it exists
if (fs.existsSync(mainIndexFile)) {
  fs.unlinkSync(mainIndexFile);
}

// List all index.js files in a directory in Node.js recursively in a synchronous fashion
const walkSync = (dir, fileList) => {
  const files = fs.readdirSync(dir).filter(name => name !== 'widgets');
  let filelist = fileList || [];
  files.forEach(file => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    } else {
      const filePath = path.join(dir, file);
      if (filePath.indexOf('index.js') > -1) {
        // eslint-disable-line
        filelist.push(filePath);
      }
    }
  });
  return filelist;
};
const indexList = walkSync('./src');
console.info(`Found ${indexList.length} index files...`); // eslint-disable-line

// Write src/index.js file with exports
const writeStream = fs.createWriteStream(mainIndexFile);
console.info('Adding import for reset.scss'); // eslint-disable-line
writeStream.write("import './styles/reset.scss';\n\n");
console.info(`Consolidating indexes in ${mainIndexFile}`); // eslint-disable-line
console.log(''); // eslint-disable-line
indexList.forEach(file => {
  // Process file name
  const noSrcStr = file.split("src" + path.sep)[1];
  const noIndStr = noSrcStr.split(path.sep + 'index.js')[0];
  const pattern = /\\/gi;
  const importPath = ("." + path.sep + `${noIndStr}`).replace(pattern, '/');
  // Write to src/index.js
  console.info(`Adding '${importPath}'...`); // eslint-disable-line
  writeStream.write(`export * from '${importPath}';\n`);
});
writeStream.write('');
writeStream.end();
console.log(''); // eslint-disable-line
console.info(
  `Finished consolidating ${mainIndexFile} with ${indexList.length} index files`,
); // eslint-disable-line
