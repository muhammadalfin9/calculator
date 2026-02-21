const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let isi = button.textContent;
    if (isi === "C") {
      display.value = "";
    } else if (isi === "=") {
      try {
        if(display.value === "") display.value = ""
        else display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } else {
      display.value += isi;
    }
  });
});
