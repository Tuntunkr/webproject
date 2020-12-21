const http = require("http");
const fs = require("fs");
var requests = require('requests');
const homeFile = fs.readFileSync("home.html","utf-8");

const server = http.createServer((req,res)=>{
    if(req.url= "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e65adc08bf31edc1e3f9d241befd9e77", 
    )
.on('data', function (chunk) {
    console.log(chunk);
    
})
.on('end', function (err) {
  if (err) return console.log('connection closed due to errors', err);
 
  console.log('end');
});
    }
})

server.listen(5000, "127.0.0.1");   
console.log("hello ")