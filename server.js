const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/apis/items');

const app = express();

// body parser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connect to mongodb
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( ()=> {
        console.log("mongoDB conneted...")
    })
    .catch( err => console.log(err) );

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server started at port ${port}`);
})