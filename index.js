let cvBtn = document.querySelector("#cvBtn");
let submit = document.querySelector("#submit");
let bar = document.querySelector("#bar");

cvBtn.addEventListener("click", function(){
    alert("Download Succesfully");
})

submit.addEventListener("click", function(){
    let email = document.querySelector("#email");
    let pass = document.querySelector("#pass")

    if(email.value == "" && pass.value == ""){
        alert("Please fill out all fields!");
    }else{
        alert("Logged IN")
    }
})

let ul = document.querySelector("ul");
bar.addEventListener("click", function(){
    ul.classList.toggle("showData"); // we have created a class called showData

    if(ul.className == showData){
        bar.className="fa-solid fa-xmark"
    }else{
        bar.className="fa-solid fa-bars"
    }
})
