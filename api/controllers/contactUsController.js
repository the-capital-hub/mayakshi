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

export const partnerFormMail = async (req, res) => {
  try {
    const {
      name,
      address,
      phone,
      email,
      constitution,
      authorizedPersonName,
      authorizedPersonAddress,
      salesTaxNo,
      LocalNoTin,
      cst,
      presentBusinessOrOccupation,
      presentBusinessStatus,
      businessDuration,
      presentBusinessFaciliy,
      manPowerStrength,
      totalYearlyTakeOver
    } = req.body;

    // Create the email message
    const emailMessage = `
      Name: ${name}
      Address: ${address}
      Phone: ${phone}
      Email: ${email}
      Constitution: ${constitution}
      Authorized Person Name: ${authorizedPersonName}
      Authorized Person Address: ${authorizedPersonAddress}
      Sales Tax No: ${salesTaxNo}
      Local No Tin: ${LocalNoTin}
      CST: ${cst}
      Present Business or Occupation: ${presentBusinessOrOccupation}
      Present Business Status: ${presentBusinessStatus}
      Business Duration: ${businessDuration}
      Present Business Facility: ${presentBusinessFaciliy}
      Man Power Strength: ${manPowerStrength}
      Total Yearly Take Over: ${totalYearlyTakeOver}
    `;

    const subject = "Partners Form";
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
};
