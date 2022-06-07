// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";

export default function handler(req, res) {
  require('dotenv').config()
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    },
    secure: true,
  })

  const mailData = {
    from: process.env.SMTP_USER,
    to: 'rkanibolotskyi@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.text,
    html: `<p>You have a contact form submission</p><br>
    <p><strong>Email: </strong> ${req.body.email}</p><br>
    <p><strong>Message: </strong> ${req.body.text}</p><br>
  `
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}
