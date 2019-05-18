const express = require('express'),
      morgan = require('morgan'),
      fileServer = express.static('public');

var app = express();

var PORT = process.env.port || 8080;


// setup the logger
app.use(morgan('dev'));

//Serve up static file
app.use(fileServer);

app.listen(PORT, function(err){
    if(err) {
        console.log("Server Error: ",err);
        process.exit(1);
    } else {
        console.log("Server is up on port " + PORT);
    }
});
