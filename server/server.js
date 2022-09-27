const express = require('express');
//Doesn't need a ./

const app = express();

//make files in server/public folder available for anyone.

app.use(express.static('./server/public'));

app.listen(3000, function() //or () => 
{
    console.log('We are schlive!')
});


console.log('in server.js!');



