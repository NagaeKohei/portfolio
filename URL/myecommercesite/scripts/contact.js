// scripts/main.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const customAlert = document.getElementById('customAlert');
  const customAlertMessage = document.getElementById('customAlertMessage');
  const customAlertButton = document.getElementById('customAlertButton');
  
  form.addEventListener('submit', function(event) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      let isValid = true;
      let errorMessage = '';

      if (!name) {
        isValid = false;
        errorMessage += '「お名前」\n';
      }
      if (!email) {
        isValid = false;
        errorMessage += '「メールアドレス」\n';
      }
      if (!message) {
        isValid = false;
        errorMessage += '「メッセージ」\n';
      }
      if (!name || !email || !message) {
        isValid = false;
        errorMessage += 'は必須項目です。\n';
      }

      if (!isValid) {
          customAlertMessage.textContent = errorMessage;
          customAlert.style.display = 'flex';
          event.preventDefault();
      }
  });

  customAlertButton.addEventListener('click', function() {
      customAlert.style.display = 'none';
  });
});
