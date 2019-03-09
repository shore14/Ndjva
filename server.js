const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.static("views"));
app.set("views", "views");
app.set("view engine", "ejs");
app.listen(port,function(){
    console.log("Listening on port: " + port);
});

app.get("/getPrice", calcPrice);


function calcPrice(request, response){
    console.log("Finding values...");
    const mailType = request.query.mailtype;
    const weight = request.query.weight;
    const price = checkPricing(mailType, weight);

    const params = {mailType: mailType,
                    weight: weight,
                    price: price};
    console.log("mail type is " + mailType + " wieght is " + weight + " total is " + price);
    response.render("results", params);
}

function checkPricing(type, weight){
  var p = 0.0;
  if(type == "letters"){
     if(weight <= 1)
     {
        p = 0.55;
     }
     if(weight <= 2 && weight > 1)
     {
        p = 0.70;
     }
     if(weight <= 3 && weight > 2)
     {
       p = 0.85; 
     }
     if(weight >= 3.5)
     {
        p = 1.00;
     }
  }
  if(type == "letterm"){

     if(weight <= 1)
     {
        p = 0.50;
     }
     if(weight <= 2 && weight > 1)
     {
        p = 0.65;
     }
     if(weight <= 3 && weight > 2)
     {
       p = 0.80; 
     }
     if(weight >= 3.5)
     {
        p = 0.95;
     }
  }
  if(type == "largenvelope"){

     if(weight <= 1)
     {
        p = 1.00;
     }
     if(weight <= 2 && weight > 1)
     {
        p = 1.15;
     }
     if(weight <= 3 && weight > 2)
     {
       p = 1.30; 
     }
     if(weight <= 4 && weight > 3)
     {
        p = 1.45;
     }
     if(weight <= 5 && weight > 4)
     {
        p = 1.60;
     }
     if(weight <= 6 && weight > 5)
     {
        p = 1.75;
     }
     if(weight <= 7 && weight > 6)
     {
       p = 1.90; 
     }
     if(weight >= 8 && weight > 7)
     {
        p = 2.05;
     }
     if(weight <= 9 && weight > 8)
     {
       p = 2.20; 
     }
     if(weight >= 10 && weight > 9)
     {
        p = 2.35;
     }
     if(weight >= 11 && weight > 10)
     {
        p = 2.50;
     }
     if(weight <= 12 && weight > 11)
     {
       p = 2.65; 
     }
     if(weight >= 13 && weight > 12)
     {
        p = 2.80;
     }
  }
  if(type == "firstClass"){

     if(weight <= 4)
     {
        p = 3.66;
     }
     if(weight <= 8 && weight > 4)
     {
        p = 4.39;
     }
     if(weight <= 12 && weight > 8)
     {
       p = 5.19; 
     }
     if(weight >= 13)
     {
        p = 5.71;
     }
  }
  return p;
}