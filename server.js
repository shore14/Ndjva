const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "ejs");
app.listen(port,function(){
    console.log("Listening on port: " + port);
});