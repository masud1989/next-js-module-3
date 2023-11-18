import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function GET (req, res) {

    const {searchParams} = new URL(req.url)
    let emailTo = searchParams.get('email')

    // Transporter Prepare
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'mranasrj01@gmail.com', // generated ethereal user
          pass: 'dekxefijmevaqtgk', // generated ethereal password
        },
      });

     // Email Prepare
     let emailInfo = {
        from: " 'Hello, User! <responser@gmail.com>' ", // sender address
        to: emailTo, // list of receivers
        subject: 'Test Email', // Subject line
        text: 'Hello, This is a test email from next js App', // plain text body
        // html: data.htm, // html body
      };

    //   Email Sending 
      try {
        await transporter.sendMail(emailInfo) 
        return NextResponse.json({msg: 'Email Sending Success'}) 
      } catch (error) {
        return NextResponse.json({msg: 'Email Sending Fail'}) 
      }




}