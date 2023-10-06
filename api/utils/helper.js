// import twilio from 'twilio';
import sgMail from '@sendgrid/mail';
import dotenv from "dotenv";
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (email, subject, message) => {
  try {
    const msg = {
      to: "farmermartmayakshiretailer@gmail.com",
      from: "farmermartmayakshiretailer@gmail.com",
      subject: subject,
      // text: message,
      html: message,  
    };
    await sgMail.send(msg);
    return {
      status: 200,
      message: "Email Sent",
    }

  } catch (error) {
    console.error('Error sending message:', error);
    throw error.message;
  }
};
