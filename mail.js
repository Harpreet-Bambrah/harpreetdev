//1. install nodemailer libararay
var express = require('express');
const nodemailer = require('nodemailer');
var cors = require('cors')
var app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3030;

app.post('/message', function(req, res) {
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send(req.body);
    sendMail(req.body)
});


// start the server
app.listen(PORT);
console.log('Server started! At http://localhost:' + PORT);
//2. import nodemailer



//3. cofigure mail and send it
async function sendMail(userdata){
    //1. create an email transporter.
    //SMTP (Simple Mail Transfer Protocol)
   const transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'harpreet.phiteck@gmail.com',
            pass: 'idqw tuew fttm lgye'
        }
    })

    const persons = [
        {
            email:'harpreetbambrah93@gmail.com',
            subject:'Portfolio User Response',
            text:`
            User Detail....
    
            Name: ${userdata.name} 
            Email: ${userdata.email} 
            Mobile: ${userdata.mobile} 
            Message:${userdata.message}`
        },
        {
            email:userdata.email,
            subject:'Thanks for connecting',
            text:`Hi ${userdata.name}
            
            Thanks for connecting with us we will shorty respond to you.
            
            -------------------

            Thanks,
            Harpreet Singh
            Front End Developer
            `
        }
    ]
   persons.forEach( async data => {
    console.log(data.email)
   
    //2.configure email content.
    const mailOptions = {
        from:'harpreet.phiteck@gmail.com',
        to: data.email,
        subject:data.subject,
        text:data.text,
    }  
    //3. send email
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Eamil sent successfully')
    } catch (error) {
        console.log('Email send failed with error:', error)
    }
})
}
