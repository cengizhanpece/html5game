const express = require('express'),
      app = express();

      app.use('/static', express.static(__dirname + '/public'));

      

      app.get('/', (req,res)=>{
        res.sendFile(__dirname + '/index.html');
      })

      app.listen(process.env.PORT || 5000, ()=>{
          console.log("server started");
      })