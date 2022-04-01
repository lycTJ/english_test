


let dataLen = document.getElementsByClassName("dataLen")
let btn = document.getElementById("btnAns");
let wrong = document.getElementById("wrong")


btn.addEventListener("click", () => {
    showDiv();
    submit();
});

function submit() {
    let wrong_ans_count = 0;
    for (var i = 0; i < dataLen.length; i++) {
        let ans = document.getElementById(`ans${i}`)
        var obj = document.getElementsByName(`radio${i}`);
        
        
        var selected=[];
        for (var j=0; j<obj.length; j++) {
            if (obj[j].checked) {
            selected.push(obj[j].value);
            }
        }
        
        //   alert("您勾選的項目 : " + selected.join());
        if (selected.join() == ans.textContent){
            ans.style.color = "#62E759"
        }
        else{
            ans.style.color = "red"
            wrong_ans_count += 1
        }
        
    }
    wrong.textContent = "答錯: "+wrong_ans_count+ "題"
};

function showDiv() {
for (var i = 0; i < dataLen.length; i++) {
    
    let r = document.querySelector(`[name=radio${i}]:checked`)
    

    let radioVal = document.getElementsByName(`radio0`).value;
    var showDiv = document.getElementById("showDiv" + i);

    if (showDiv.style.display === "none") {
        wrong.style.display = "block"
        showDiv.style.display = "block";
        
        document.getElementById("btnAns").textContent = "關閉答案";
        document.getElementById("btnAns").style.backgroundColor  = "#d9534f";
        } 
        else {
        wrong.style.display = "none"
        showDiv.style.display = "none";
        document.getElementById("btnAns").textContent = "顯示答案";
        document.getElementById("btnAns").style.backgroundColor  = "#0275d8";
        }
    }
}