const inputForm=document.querySelector("#input-form");
const healthInput=document.querySelector("#input-form input");
const presentHealth=document.querySelector("#present-health");
const fillTime=document.querySelector("#fill-time");
function onInputHealth(event){
    event.preventDefault();
    let inputHealth=Number(healthInput.value);
    inputForm.classList.add("hidden");
    inputHealth-=1;
    localStorage.setItem("health",inputHealth);
    onPresenthealth()
}
function onPresenthealth(){
    savedHealth=Number(localStorage.getItem("health"))
    savedHealth+=1;
    console.log("45");
    localStorage.setItem("health",savedHealth);
    presentHealth.innerText=savedHealth;
    presentHealth.classList.remove("hidden");
}
// 문제 6분 후에 입력시 non 나옴

inputForm.addEventListener("submit",onInputHealth);
setInterval(onPresenthealth,360000)
// (타이머 변수화, 타이머*시간당충전+입력체력= 현재 체력, (풀체력-현재체력)/시간당충전=채워지는 시간)