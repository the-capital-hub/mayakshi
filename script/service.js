//backend base url
const baseUrl = "http://localhost:8000";

// contact form submit handler
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    fetch(`${baseUrl}/api/contactUs`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert("Message Sent");
        console.log(responseJson);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});

//appointment form handler
document.addEventListener('DOMContentLoaded', () => {
  const appointmentForm = document.getElementById('submit-form');

  appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {};

    const formData = new FormData(appointmentForm);

    formData.forEach((value, key) => {
      data[key] = value;
    });
    fetch(`${baseUrl}/api/partnerFormMail`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert("Message Sent");
        console.log(responseJson);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});