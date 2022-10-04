const express = require('express');
require('./MongoConnection/connect');
const app = express();
const Route=require('./Router/router');
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/',Route);


app.listen(port, () => {
    console.log(`Your Application is running on PORT ${port}`)
});


