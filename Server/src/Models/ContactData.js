const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://jinsjoseph:8943480915@cluster0.lnb8wip.mongodb.net/ContactManager?retryWrites=true&w=majority")



const Schema=mongoose.Schema;



const contactSchema=new Schema({
    name: {type:String},
    email: {type:String}

})

const contactdata=mongoose.model("contactdata_table",contactSchema)
 module.exports=contactdata;