const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "pauliukass7@gmail.com",
    subject: "Thanks for Joining",
    text: `Welcome to the app, ${name}`,
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "pauliukass7@gmail.com",
    subject: "Saying Goodbye",
    text: `Goodbye, ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail,
};
