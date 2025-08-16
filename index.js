let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors')
const enquiryRouter = require('./App/routes/web/enquiryRoutes');
require('dotenv').config();
let app = express();

app.use(cors())
app.use(express.json());

//Routes
app.use('/api/website/enquiry',enquiryRouter);


//Connect to Mongodb
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connected to mongodb");
    app.listen(process.env.PORT || 3000,()=>{
        console.log("Server is running on port" );
    })
}).catch((err)=>{
    console.log("error detect"+err);
})