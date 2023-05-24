const express = require('express');

const resumeRoutes = express.Router();

const fs = require('fs');
const path = require('node:path');
const { finished } = require('node:stream/promises');

const dbo = require('../db/conn');

const mongodb = require("mongodb")
const ObjectId = mongodb.ObjectId;

const bucket = new mongodb.GridFSBucket(dbo.getDb(), { bucketName: 'resumeBucket' });

const multer = require('multer')
const upload = multer({ dest: path.join(__dirname, '.') })

resumeRoutes.get('/latest', async (req, res) => {
  try {
    const cur = bucket.find({}).sort({ uploadDate: -1 }).limit(1);
    const doc = await cur.next();
    if (doc) {
      const readStream = bucket.openDownloadStream(new ObjectId(doc._id));
      readStream.on("data", (chunk) => {
        res.write(chunk);
      });
      readStream.on("end", () => {
        res.status(200).end();
      });
      readStream.on("error", (err) => {
        console.log(err);
        res.status(500).send(err);
      });
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

resumeRoutes.post('/new', upload.any(), async (req, res) => {
  try {
    if (req.files) {
      const promises = req.files.map(async (file) => {
        const fileStream = fs.createReadStream(file.path);

        await finished(fileStream.pipe(bucket.openUploadStream(file.originalname)));

        fs.unlinkSync(file.path);
      });

      await Promise.all(promises);
    }
    res.sendStatus(201);
  } catch(err) {
    throw err;
  }
});

resumeRoutes.delete('/clean', (req, res) => {
  bucket.drop();
  res.sendStatus(200);
})

module.exports = resumeRoutes;