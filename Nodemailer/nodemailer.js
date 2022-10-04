const dotenv = require('dotenv');
dotenv.config('../');
const nodemailer = require("nodemailer");
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

const emailTemplateSource = fs.readFileSync(path.join(__dirname, "../Email_template/template.hbs"), "utf8")
const template = handlebars.compile(emailTemplateSource);


async function main(email) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.Email,
      pass: process.env.Password
    },
  });
  let D_ = new Date()
  const htmlToSend = template({ Date: `${D_.getDate()}/${D_.getMonth()}/${D_.getFullYear()}`, Time: `${D_.getHours()}:${D_.getMinutes()}:${D_.getSeconds()}` })
  let info = await transporter.sendMail({
    from: process.env.Email,
    to: email,
    subject: "New Order",
    text: "Hello world?",
    html: htmlToSend
  });
  console.log("Message sent: %s", info.messageId);
}

module.exports = main;
