const mongoose = require('mongoose');
// require('dotenv').config()

mongoose.connect('mongodb+srv://kamleshbhojane18:wPZR7PtgedWi5Fq8@cluster0.hllk1y1.mongodb.net/CSV_upload_db');
// mongoose.connect(process.env.mongooseUrl);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Connecting to Database!'));

db.once('open', function() {
  console.log("Successfully Connected to Database :: MongoDB");
});

module.exports = db;