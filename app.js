require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');


//middleware for reading request body
app.use(express.json())
 
async function database(){
    try {
        await mongoose.connect(process.env.Mongo_URI)
        console.log("connected to MongoDB")
    }catch (error){
        console.log("error connecting to MongoDB")
    } 
} 
database(); 

const ApplicantSchema = new mongoose.Schema({
    Firstname : String,
    Lastname : String,
    Email : String,
    phone_Number : Number,
    Reason : String
})
const Applicant = mongoose.model('ApplicantDB', ApplicantSchema)

app.post('/register', async (req, res)=>{
    try{
        const {firstname, lastname, email, phone_number, reason} = req.body

        if(firstname && lastname && email && phone_number && reason){
            const newApplicant = Applicant ({
                Firstnmae: firstname,
                Lastname: lastname,
                Email : email,
                phone_Number : phone_number,
                Reason : reason
            })
            await newApplicant.save();

            return res.status(201).json({message: "regisration successfully", newApplicant})
        }else{
            return res.status(400).json({message: "please firstname, lastname, email, phone_Number and reason are required fields"})
        }
    }catch (error) {
        console.log(error.message)
        
    }

})

app.get('/getAll', async (req, res) =>{
    try{
        const all_Applicants = await Applicant.find()

        if(all_Applicants < 1){
            return res.status(400).json({message: 'No Applicants found'})
        }

        return res.status(200).json({all_Applicants})

    }catch (error){
    console.log(error.messsage);
    }
})

app.get('/applicantsCount', async (req, res)=>{
    try{
        const applicants_Total = await Applicant.find()        
        
        if(!applicants_Total )
            return res.status(404).json({message: 'No applicants found'})
        
        const applicants_TotalCount = applicants_Total.length
        return res.status(200).json({Count : applicants_TotalCount})

    }catch (error){
        console.log(error.message);
    }
})

app.listen(process.env.PORT, (err)=>{
    if(err) throw err
    console.log(`server is running on port ${process.env.PORT}`);
})
