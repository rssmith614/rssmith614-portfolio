const express = require("express");
 
// projectRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /project.
const projectRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// get all projects
projectRoutes.get("/project", (req, res) => {
    let db_connect = dbo.getDb();
    try {
        db_connect.collection("Projects")
        .find().sort({date: -1}).toArray().then(result => {
            res.json(result);
        });
    } catch(err) {
        throw err;
    }
});

// add project
projectRoutes.post("/project/add", (req, res) => {
    let db_connect = dbo.getDb();
    let newobj = {
        name: req.body.name,
        description: req.body.description,
        tags: req.body.tags,
        stack: req.body.stack,
        type: req.body.type,
        github: req.body.github,
        thumbnail: req.body.thumbnail,
        date: req.body.date,
        visibility: req.body.visibility,
    };
    try {
        db_connect.collection("Projects")
        .insertOne(newobj).then(result => {
            res.json(result);
        });
    } catch(err) {
        throw err;
    }
});

// get single project
projectRoutes.get("/project/:id", (req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectId(req.params.id) };
    try {
        db_connect.collection("Projects")
        .findOne(myquery).then(result => {
            res.json(result);
        });
    } catch(err) {
        throw err;
    }
});

// update project
projectRoutes.post("/project/update/:id", (req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectId(req.params.id) };
    let newvalues = {
    $set: {
        name: req.body.name,
        description: req.body.description,
        tags: req.body.tags,
        stack: req.body.stack,
        type: req.body.type,
        github: req.body.github,
        thumbnail: req.body.thumbnail,
        date: req.body.date,
        visibility: req.body.visibility,
    },
    };
    db_connect.collection("Projects")
    .updateOne(myquery, newvalues).then(result => {
        res.json(result);
    });
});

// delete project
projectRoutes.delete("/project/:id", (req, res) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: new ObjectId(req.params.id) };
    try {
        db_connect.collection("Projects")
        .deleteOne(myquery).then(result => {
            res.json(result);
        });
    } catch(err) {
        throw err;
    }
});

module.exports = projectRoutes;