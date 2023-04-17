const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser")
const Contactrouter=require("./src/Routes/ContactRouter");



const app = express();
    

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use("/api",Contactrouter)

app.listen(5000, () => {
    console.log("server started at http://localhost:5000");
  });


