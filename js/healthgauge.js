const inputForm=document.querySelector("#health-input-form");
const healthInput=document.querySelector("#health-input-form input");
const presentHealth=document.querySelector("#present-health");
const fillTime=document.querySelector("#fill-time");


function onInputHealth(event){
    event.preventDefault();
    const inputHealth=healthInput.value;
    localStorage.setItem("health",inputHealth)
    inputForm.classList.add("hidden")
}
inputForm.addEventListener("submit",)