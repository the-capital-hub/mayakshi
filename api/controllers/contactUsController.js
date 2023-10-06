import { sendMail } from "../utils/helper.js";

export const contactUsController = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const emailMessage = `
      <html>
        <head>
          <style>
            /* Define your CSS styles here */
            body {
              font-family: Arial, sans-serif;
              font-size: 14px;
            }
            h2 {
              color: #007bff;
            }
            p {
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <h2>Contact Us Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <h3>Message:</h3>
          <p>${message}</p>
        </body>
      </html>
    `;
    const subject = "Contact Us Form";
    const response = await sendMail(email, subject, emailMessage);
    res.status(response.status).send(response);
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
      name_and_education_of_application,
      address_one,
      telno,
      email,
      constitution_proprietor_partner_pvt_ltd,
      authorised_person_name,
      address_two,
      sales_tax_no,
      local_no_tin,
      cst,
      present_business_occupation,
      present_business_status,
      business_duration,
      showroom_sq_ft,
      office_sq_ft,
      go_down_sq_ft,
      manpower_sales_and_marketing,
      manpower_services,
      manpower_office,
      manpower_go_down,
      total_yearly_turnover,
      banker_name_A,
      banker_branch_A,
      banker_name_B,
      banker_branch_B,
      partner_no_one,
      partner_name_one,
      partner_relation_one,
      partner_address_one,
      partner_ph_no_one,
      partner_age_one,
      partner_no_two,
      partner_name_two,
      partner_relation_two,
      partner_address_two,
      partner_ph_no_two,
      partner_age_two,
      partner_no_three,
      partner_name_three,
      partner_relation_three,
      partner_address_three,
      partner_ph_no_three,
      partner_age_three,
      partner_no_four,
      partner_name_four,
      partner_relation_four,
      partner_address_four,
      partner_ph_no_four,
      partner_age_four,
      company_no_one,
      company_name_one,
      company_status_one,
      company_duration_one,
      company_turnover_one,
      company_no_two,
      company_name_two,
      company_status_two,
      company_duration_two,
      company_turnover_two,
      company_no_three,
      company_name_three,
      company_status_three,
      company_duration_three,
      company_turnover_three,
      company_no_four,
      company_name_four,
      company_status_four,
      company_duration_four,
      company_turnover_four,
    } = req.body;

    const emailMessage = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              font-size: 14px;
            }
            h2 {
              color: #007bff;
            }
            table {
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              border: 1px solid #dddddd;
              text-align: left;
              padding: 8px;
            }
            tr:nth-child(even) {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <h2>Partner Form Submission</h2>
          <p>Name and Education of Application: ${name_and_education_of_application}</p>
          <p>Address: ${address_one}</p>
          <p>Telephone No: ${telno}</p>
          <p>Email: ${email}</p>
          <p>Constitution (Proprietor/Partner/Pvt. LTD): ${constitution_proprietor_partner_pvt_ltd}</p>
          <p>Authorized Person Name: ${authorised_person_name}</p>
          <p>Address: ${address_two}</p>
          <h2>Partner Information</h2>
          <table>
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Partner Name</th>
                <th>Relation</th>
                <th>Address</th>
                <th>Phone No.</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${partner_no_one}</td>
                <td>${partner_name_one}</td>
                <td>${partner_relation_one}</td>
                <td>${partner_address_one}</td>
                <td>${partner_ph_no_one}</td>
                <td>${partner_age_one}</td>
              </tr>
              <tr>
                <td>${partner_no_two}</td>
                <td>${partner_name_two}</td>
                <td>${partner_relation_two}</td>
                <td>${partner_address_two}</td>
                <td>${partner_ph_no_two}</td>
                <td>${partner_age_two}</td>
              </tr>
              <tr>
                <td>${partner_no_three}</td>
                <td>${partner_name_three}</td>
                <td>${partner_relation_three}</td>
                <td>${partner_address_three}</td>
                <td>${partner_ph_no_three}</td>
                <td>${partner_age_three}</td>
              </tr>
              <tr>
                <td>${partner_no_four}</td>
                <td>${partner_name_four}</td>
                <td>${partner_relation_four}</td>
                <td>${partner_address_four}</td>
                <td>${partner_ph_no_four}</td>
                <td>${partner_age_four}</td>
              </tr>
            </tbody>
          </table>
          <p>Sales Tax No: ${sales_tax_no}</p>
          <p>Local No. TIN: ${local_no_tin}</p>
          <p>CST: ${cst}</p>
          <p>Present Business/Occupation: ${present_business_occupation}</p>
          <p>Present Business Status (a/b/c): ${present_business_status}</p>
          <p>How long has the business been: ${business_duration}</p>
          <p>Present Business Facility (A/B/C): Showroom - ${showroom_sq_ft}, Office - ${office_sq_ft}, Go Down - ${go_down_sq_ft}</p>
          <p>Manpower Strength: Sales and Marketing - ${manpower_sales_and_marketing}, Services - ${manpower_services}, Office - ${manpower_office}, Go Down - ${manpower_go_down}</p>
          
          <h2>Presently associated with :</h2>
          <table>
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Company Name</th>
                <th>Status</th>
                <th>How Long with Company</th>
                <th>Yearly Turnover</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${company_no_one}</td>
                <td>${company_name_one}</td>
                <td>${company_status_one}</td>
                <td>${company_duration_one}</td>
                <td>${company_turnover_one}</td>
              </tr>
              <tr>
                <td>${company_no_two}</td>
                <td>${company_name_two}</td>
                <td>${company_status_two}</td>
                <td>${company_duration_two}</td>
                <td>${company_turnover_two}</td>
              </tr>
              <tr>
                <td>${company_no_three}</td>
                <td>${company_name_three}</td>
                <td>${company_status_three}</td>
                <td>${company_duration_three}</td>
                <td>${company_turnover_three}</td>
              </tr>
              <tr>
                <td>${company_no_four}</td>
                <td>${company_name_four}</td>
                <td>${company_status_four}</td>
                <td>${company_duration_four}</td>
                <td>${company_turnover_four}</td>
              </tr>
            </tbody>
          </table>
          
          <p>Total Yearly Turnover: ${total_yearly_turnover}</p>
          <p>Bankers Name (a): ${banker_name_A}, Branch: ${banker_branch_A}</p>
          <p>Bankers Name (b): ${banker_name_B}, Branch: ${banker_branch_B}</p>
          
        </body>
      </html>
    `;

    const subject = "Partners Form";
    const response = await sendMail(email, subject, emailMessage);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while sending mail",
    });
  }
};
