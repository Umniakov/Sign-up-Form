console.log('hi');


const pwd1 = document.querySelector(".pwd-1");
const pwd2 = document.querySelector(".pwd-2");
const form = document.querySelector(".form");


pwd1.addEventListener("input", () => {
    if (pwd2.value === pwd1.value) {
        pwd1.setAttribute("class", "error pwd-1 good");
    } else if (pwd2.value.length > pwd1.value.length) {
        pwd1.setAttribute("class","error pwd-1")
    } else if (!pwd1.value || !pwd2.value){ 
        pwd1.setAttribute("class", "error pwd-1")
    } else {
        pwd1.setAttribute("class","error pwd-1 error-message")
    }
});

pwd2.addEventListener("input", () => {
    if (pwd2.value === pwd1.value) {
        pwd2.setAttribute("class", "error pwd-2 good");
    } else if (pwd2.value.length < pwd1.value.length) {
        pwd2.setAttribute("class","error pwd-2")
    } else if (!pwd2.value || !pwd1.value) { 
        pwd1.setAttribute("class", "error pwd-1")
    } else {
        pwd2.setAttribute("class","error pwd-2 error-message")
    }
});

form.addEventListener("submit", e => {
    if (pwd1.value !== pwd2.value) {
        e.preventDefault();
    }
});

