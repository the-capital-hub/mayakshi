// import twilio from 'twilio';
import sgMail from '@sendgrid/mail';
import dotenv from "dotenv";
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (email, subject, message) => {
  try {
    const msg = {
      to: "farmermartmayakshiretailer@gmail.com",
      // to: "adithyahebbar32@gmail.com",
      // from: "yesgobus.help@gmail.com",
      from: "farmermartmayakshiretailer@gmail.com",
      subject: subject,
      // text: message,
      html: message,  
    };
    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode)
      })
      .catch((error) => {
        console.error(error)
        throw error.message;
      })

  } catch (error) {
    console.error('Error sending message:', error);
    throw error.message;
  }
};
