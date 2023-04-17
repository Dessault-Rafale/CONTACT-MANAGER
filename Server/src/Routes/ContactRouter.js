const express = require("express")
const Contactrouter = express.Router()
const contactdata = require("../Models/ContactData")


Contactrouter.post("/addcontact", ((req, res) => {
    console.log(req.body);
    const items = {
        name: req.body.fname,
        email: req.body.lname
    }
    var details = contactdata(items)
    details.save().then(() => {
        res.status(200).json({
            success: true,
            error: false,
            messege: "data added"

        })
    })

}))

Contactrouter.get("/viewcontact", ((req, res) => {
    contactdata.find().then((data) => {
        console.log(data);
        if (data == 0) {
            res.status(400).json({
                success: false,
                error: true,
                messege: "data not found"

            })

        } else {
            res.status(200).json({
                success: true,
                error: false,
                data

            })
        }


    })
}))


Contactrouter.get("/deletecontact/:id", (async (req, res) => {

    const id = req.params.id
    console.log(id);
    try {
        await contactdata.deleteOne({ _id: id })
            .then((data) => {
                console.log(data);
                return res.status(200).json({
                    success: true,
                    error: false,
                    data: data

                })
            })
    }
    catch (err) {
        console.log(err);
    }

}))



Contactrouter.get("/editcontact/:id", ((req, res) => {
    const id = req.params.id
    console.log("iddddddd=========>",id);
    contactdata.findOne({ _id: id })
        .then(data => {
            console.log("editcontact===>", data);

            return res.status(200).json({
                success: true,
                error: false,
                data

            })

        })
}))



Contactrouter.post("/updatecontact", ((req, res) => {
    console.log(req.body);
    const items = {
        name: req.body.name,
        email: req.body.email
    }
    console.log(req.body.id);
    contactdata.updateOne({_id:req.body._id},{$set:items}).then((d) => {
        res.status(200).json({
            success: true,
            error: false,
            messege: "data updated",
            d:d

        })
    })

}))




module.exports = Contactrouter