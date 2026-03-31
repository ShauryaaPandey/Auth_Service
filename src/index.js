const express = require('express');
const app = express();
const {PORT} = require('./config/server_config');
const bodyParser = require('body-parser');
const apiroutes = require('./routes/index');

// const {User} = require('./models/index');
// const bcrypt = require('bcrypt');

const prepareAndStartServer = () =>{
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));
        
        app.use('/api',apiroutes);

        app.listen(PORT,async ()=>{
             console.log(`server started on PORT : ${PORT}`); 
        //      const incomingpassword = 'new@1234';
        //      const user = await User.findByPk(3);
        //      const response = bcrypt.compareSync(incomingpassword,user.password);  
        //      console.log(response);
        });
}

prepareAndStartServer();