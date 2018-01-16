const express = require('express');

const port = 3000; 

let app = express();


app.get('/', (req, res) =>{
	res.send('Hello World');
});

app.liten(port, () => {
	console.log('server started on '+port);
});
