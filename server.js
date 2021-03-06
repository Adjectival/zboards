var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "licenses";

var app = express();
app.use(bodyParser.json());

// Create database variable outside of the database connection callback to reuse the connection pool
var db;

// Connect to database before starting the application server
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from callback for reuse
  db = database;
  console.log("Database connection gtg!");

  // Initialize the app now db conx is up
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});


// // API ROUTES for LICENSES // //

// Generic error handler for all endpoints' use
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/licenses"
 *    GET: request all licenses
 *    POST: create a new license
 */
 app.get("/api/licenses", function(req, res) {
    db.collection(LICENSES_COLLECTION).find({}).toArray(function(err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to GET licenses ;_;");
        } else {
            res.status(200).json(docs);
        }
    });
 });
 app.post("/api/licenses", function(req, res) {
    var newLicense = req.body;

    if (!req.body.name) {
        handleError(res, "Bad input, please provide a name", 400);
    }

    db.collection(LICENSES_COLLECTION).insertOne(newLicense, function(err, doc) {
        if (err) {
            handleError(res, err.message, "Did not create new license ;_;");
        } else {
            res.status(201).json(doc.ops[0]);
        }
    });
 });

 /*  "/api/licenses/:id"
 *    GET: request license by id
 *    PUT: update license by id
 *    DELETE: delete license by id
 */

 app.get("/api/licenses/:id", function(req, res) {} );

 app.put("/api/licenses/:id", function(req, res) {} );

 app.delete("/api/licenses/:id", function(req, res) {} );
