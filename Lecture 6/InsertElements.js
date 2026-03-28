let newBtn = document.createElement("button"); 

newBtn.innerText = "Click Me !"; 

let div = document.querySelector("#box");    

div.append(newBtn);

div.prepend(newBtn);

div.before(newBtn);

div.after(newBtn);

let p = document.querySelector("p");
p.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hello, Welcome To JavaScript DOM Manipulation!<i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");

// para.remove();

// newHeading.remove();