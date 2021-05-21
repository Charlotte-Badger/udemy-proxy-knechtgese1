const path = require('path');
const search = require('./search.js');
const verify = require('./verify.js');
const s3 = require('./s3.js');
const generate = require('./generate.js');
const local = require('./local.js');
const db = require('./db.js');


// In order to run script, add file "config.js" to root directory. It should contain an object with the following format:

// module.exports = {
//   dbUrl: // Database Url,
//   dbName: // Database Name,
//   accessKeyID: // S3 Access Key,
//   secretAccessKey: // S3 Secret Access Key,
//   pexelKey: // Key for pexel API. If you want to use mine it's pinned on the Charlotte-Badger Slack Channel
// };

// Create a directory named videos in the same directory as this file
// You may want to change 'per_page' on line 104 of search.js to a smaller number. This is the number of unique videos the script will download

// When setup, run 'npm run seed'

const runScript = async (isLocal = true) => {
  if (!isLocal) {
    await search.searchVideos();
    await verify.checkAll();
    await s3.uploadDirectory(path.join(__dirname, 'videos'), isLocal);
  } else {
    local();
  }
  const response = await db.seedDB();
  console.log(response);
};

// If seeding to local database, set argument to true. Uncomment lines 14-19 in db.js.
// If seeing to remote database, uncomment lines 15-19 and line 29 in db.js and set argument to false. Make sure that dbUrl and dbName are set in ../config.js
runScript();
