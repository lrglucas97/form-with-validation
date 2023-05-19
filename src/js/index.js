const textField = document.querySelectorAll(".input");
const submitButton = document.querySelector("input[type='submit']");
const errorMessage = document.querySelectorAll(".error");

textField.forEach((element, index) => {
  element.addEventListener("keyup", () => {
    if (
      element.value !== "" ||
      element.classList.contains("denied") ||
      errorMessage[index].classList.contains("active")
    ) {
      element.classList.remove("denied");
      errorMessage[index].classList.remove("active");
      element.classList.add("accepted");
    } else {
      element.classList.remove("accepted");
    }
  });
});

submitButton.addEventListener("click", () => {
  textField.forEach((element, index) => {
    if (element.value === "") {
      element.classList.add("denied");
      errorMessage[index].classList.add("active");
    } else {
      element.classList.remove("denied");
      errorMessage[index].classList.remove("active");
    }
  });
});
