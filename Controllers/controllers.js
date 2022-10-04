const main = require('../Nodemailer/nodemailer');
const USER = require('../Models/user');

const CreateUSer = async(req, res) =>{
    try{
        const data = req.body;
        let data1 = new USER(data);
        let result = await data1.save();
        if (result._id) {
            main(result.email);
        }
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
    }

}

module.exports = CreateUSer;