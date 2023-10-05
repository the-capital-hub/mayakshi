const baseUrl = "http://localhost:8000";

document.addEventListener('DOMContentLoaded', () => {

  // contact form submit
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
