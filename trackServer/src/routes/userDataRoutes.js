const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');
const {db} = require("nodemon/lib/rules");

const UserData = mongoose.model('UserData');

const router = express.Router();

router.use(requireAuth);

router.get('/userdata', async (req, res) => {
    const userData = await UserData.find({userId: req.user._id});
    res.send(userData);
})

router.post('/getParticularInfo', async(req, res) => {
    console.log(req.body);
    const {id} = req.body;
    try{
        const x = await UserData.find({_id: id});
        res.send(x);
    }
    catch (err){
        res.status(422).send({error:err.message});
    }
})

router.get('/getAllInfo', async(req, res) => {
    try{
        let infoArr = [];
        const x = await UserData.find()/*.forEach(info => infoArr.push(info));*/
        x.forEach(info => console.log(infoArr.push(info)));
        res.send(infoArr);
    }
    catch (err){
        res.status(422).send({error:err.message});
    }
})

router.post('/updateDoctor', async (req, res) => {
    const {
        firstName,
        lastName,
        age,
        gender,
        phoneNumber,
        address,
        appointmentFees,
        specialisation
    } = req.body;

    try{
        UserData.updateOne(
            {
                "_id": req.body.id
            },
            {
                $set:{
                    "firstName": firstName,
                    "lastName": lastName,
                    "age": age,
                    "gender": gender,
                    "phoneNumber": phoneNumber,
                    "address": address,
                    "fees": appointmentFees,
                    "specialisation": specialisation
                }
            }, function(err) {
                if(err) return console.log("Error updating: " + err);
            }
        );
    }catch(err){
        res.status(422).send({error:err.message});
    }
})

router.post('/updatePatient', async (req, res) => {
    const {
        firstName,
        lastName,
        age,
        gender,
        phoneNumber,
        address,
        bloodGroup,
        diabitic,
        sugar,
        highBloodPressure,
        currentUnderDiagnosis
    } = req.body;

    try{
        UserData.updateOne(
            {
                "_id": req.body.id
            },
            {
                $set:{
                      "firstName": firstName,
                      "lastName": lastName,
                      "age": age,
                      "gender": gender,
                      "phoneNumber": phoneNumber,
                      "address": address,
                      "bloodGroup": bloodGroup,
                      "diabitic": diabitic,
                      "sugar": sugar,
                      "highBloodPressure": highBloodPressure,
                      "currentUnderDiagnosis": currentUnderDiagnosis
                }
            }, function(err) {
                if(err) return console.log("Error updating: " + err);
            }
        );
        console.log('Update Done');
        res.send('Done!!');
    }catch(err){
        console.log(err);
        res.status(422).send({error:err.message});
    }
})

router.post('/userdata', async (req, res) => {
    const {timeStamp,
            firstName,
            lastName,
            age,
            gender,
            phoneNumber,
            address,
            bloodGroup,
            diabitic,
            highBloodPressure,
            currentUnderDiagnosis,
            userType,
            sugar,
            fees,
            specialisation,
            medicineList,
            shopName
    } = req.body;

    if(!firstName || !lastName){
        return res.status(422).send({error: 'You must provide First Name and Last Name'});
    }

    try{
        const userData = new UserData({
            timeStamp,
            firstName,
            lastName,
            age,
            gender,
            phoneNumber,
            address,
            bloodGroup,
            diabitic,
            highBloodPressure,
            currentUnderDiagnosis,
            userType,
            sugar,
            fees,
            specialisation,
            medicineList,
            shopName,
            userId: req.user._id});
        await userData.save();
        res.send(userData);
    }catch(err){
        res.status(422).send({error:err.message});
    }
})

module.exports = router;