const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
       const buttonPressed = button.textContent;

       if (button.id ==="c") {
        display.textContent = "0";
        return;
       }

       if (button.id === "delete") {
        if (display.textContent.length === 1 || display.textContent === "error") {
            display.textContent = "0";
        } else {
            display.textContent = display.textContent.slice(0,-1);
        }
        return;
        }

        if (button.id === "igual"){
            try {
                display.textContent = eval(display.textContent);
            }
            catch {
                display.textContent = "error";
            }
            return;
        }

       if (display.textContent === "0" || display.textContent === "error")
       {
        display.textContent = buttonPressed;
       }
       else {
        display.textContent += buttonPressed;
       }
    })

})