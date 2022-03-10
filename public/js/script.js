


let dataLen = document.getElementsByClassName("dataLen")
let btn = document.getElementById("btnAns");
btn.addEventListener("click", () => {
    showDiv();
});



function showDiv() {
for (var i = 0; i < dataLen.length; i++) {
    let ans = document.getElementById("ans")
    let radio = document.getElementsByName(`input[name="radio${i}"`);
    let radioVal = document.getElementsByName(`input[name="radio${i}":checked`).value;
    var showDiv = document.getElementById("showDiv" + i);

    if (showDiv.style.display === "none") {
        // 處理介面
        // if(radioVal == ans){
        //     radio.style.backgroundColor = "red"

        // }
        showDiv.style.display = "block";
        document.getElementById("btnAns").textContent = "關閉答案";
        document.getElementById("btnAns").style.backgroundColor  = "#d9534f";
        } 
        else {
        showDiv.style.display = "none";
        document.getElementById("btnAns").innerHTML = "顯示答案";
        document.getElementById("btnAns").style.backgroundColor  = "#0275d8";
        }
    }
}