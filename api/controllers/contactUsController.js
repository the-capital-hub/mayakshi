import { sendMail } from "../utils/helper.js";

export const contactUsController = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const emailMessage = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      
      Message:
      ${message}
    `;
    const subject = "Contact Us Form";
    await sendMail(email, subject, emailMessage);
    res.status(200).send({
      status: 200,
      message: "Email Sent",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while sending mail",
    });
  }
}