const nodemailer = require("nodemailer");

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abiodunfaith15@gmail.com",
    pass: "trytry@",
  },
});

// Email data
const mailOptions = {
  from: "abiodunfaith15@gmail.com", // Replace with your Gmail email address
  to: "abiodunfaith15@gmail.com", // Replace with the recipient's email address
  subject: "Email From Node.Js",
  text: "Hi Faith, how are you?",
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
