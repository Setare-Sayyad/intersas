// document.addEventListener("DOMContentLoaded", () => {
//   const submitButton = document.querySelector("#submit");
//   const inputField = document.querySelector("#input");
//   const messageDiv = document.createElement("div");
//   document.body.appendChild(messageDiv);

//   submitButton.addEventListener("click", () => {
//     if (inputField.value.trim() !== "") {
//       messageDiv.textContent = " submitted successfully!";
//       messageDiv.style.color = "green";
//     }
//     //       messageDiv.style.border = "1px solid green";
//     //       messageDiv.style.padding = "10px";
//     //       messageDiv.style.marginBottom = "10px";
//     //       messageDiv.style.borderRadius = "25px";
//     //     } else {
//     //       messageDiv.textContent = "Please enter your email.";
//     //       messageDiv.style.color = "white";
//     //       messageDiv.style.border = "1px solid red";
//     //       messageDiv.style.padding = "10px";
//     //       messageDiv.style.borderRadius = "25px";
//     //     }
//     setTimeout(() => {
//       messageDiv.textContent = "";
//     }, 3000);

//     if (inputField.value.trim() !== "") {
//       inputField.value = "";
//     }
//   });
// });
document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // ⛔ جلوگیری از رفرش شدن صفحه

    const emailInput = document.getElementById("input");
    const message = document.getElementById("message");

    if (!emailInput.value) {
      return; // اگر اینپوت خالی بود، هیچی نشون نده
    }

    if (!emailInput.checkValidity()) {
      emailInput.reportValidity(); // نمایش ارور پیش‌فرض مرورگر برای ایمیل نامعتبر
      return;
    }

    // نمایش پیام موفقیت
    message.textContent = "Submitted successfully!";
    message.style.display = "block";
    message.style.color = "green";
  });
