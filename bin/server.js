const app = require("../app");
const db = require("../model/db");
const path = require("path");
const createFolderIsExist = require("../helpers/create-dir");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

db.then(() => {
  app.listen(PORT, async () => {
    const PUBLIC_DIR = process.env.PUBLIC_DIR;
    const UPLOAD_DIR = process.env.UPLOAD_DIR;
    const AVATARS_OF_USERS = path.join(
      PUBLIC_DIR,
      process.env.AVATARS_OF_USERS
    );
    await createFolderIsExist(PUBLIC_DIR);
    await createFolderIsExist(UPLOAD_DIR);
    await createFolderIsExist(AVATARS_OF_USERS);

    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}).catch((err) => {
  console.log(err.message);
  process.exit(1);
});