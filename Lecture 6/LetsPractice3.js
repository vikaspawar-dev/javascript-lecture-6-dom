let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";
newBtn.style.border = "1px solid black"

document.body.prepend(newBtn);

document.querySelector("body").prepend(newBtn);