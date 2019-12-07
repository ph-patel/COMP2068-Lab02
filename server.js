var express = require("express");
var app     = express();


app.get('/', (req, res) => {
    const method = req.query.method;
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);

switch(method)
        {
	 case 'add':
       return res.send(`${x} + ${y} = ${x + y}`);
     case 'subtract':
        return res.send(`${x} - ${y} = ${x - y}`);
     case 'multiply':
        return res.send(`${x} * ${y} = ${x * y}`);
     case 'divide':
        return res.send(`${x} / ${y} = ${x / y}`);
     default:
        return res.send(
                    "This Node.js Calculator works with Addition, Substraction, Division  and Multiplication");
                
        }

});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("App Started ! @devpriyesh");
});


// app.listen(3000 , () => {
// 	console.log("Server started !!");
// });