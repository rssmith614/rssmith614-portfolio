const express = require("express");
 
// workexpRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /workexp.
const workexpRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// get all work experience
workexpRoutes.get('/', (req, res) => {
    let db_connect = dbo.getDb();
    try {
        db_connect.collection("Workexp")
        .find().sort({end: -1}).toArray().then(result => {
            res.json(result);
        });
    } catch (err) {
        throw err;
    }
});

// add workexp
workexpRoutes.post("/add", (req, res) => {
    let db_connect = dbo.getDb();
    let newobj = {
        title: req.body.title,
        company: req.body.company,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
    };
    try {
        db_connect.collection("Workexp")
        .insertOne(newobj).then(result => {
            res.json(result);
        });
    } catch(err) {
        throw err;
    }
});

// get single workexp
workexpRoutes.get("/:id", (req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectId(req.params.id) };
    try {
        db_connect.collection("Workexp")
        .findOne(myquery).then(result => {
            res.json(result);
        });
    } catch(err) {
        throw err;
    }
});

// update workexp
workexpRoutes.post("/update/:id", (req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectId(req.params.id) };
    let newvalues = {
    $set: {
        title: req.body.title,
        company: req.body.company,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
    },
    };
    db_connect.collection("Workexp")
    .updateOne(myquery, newvalues).then(result => {
        res.json(result);
    });
});

// delete workexp
workexpRoutes.delete("/:id", (req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectId(req.params.id) };
    try {
        db_connect.collection("Workexp")
        .deleteOne(myquery).then(result => {
            res.json(result);
        });
    } catch(err) {
        throw err;
    }
});

module.exports = workexpRoutes;