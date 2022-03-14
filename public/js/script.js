


let dataLen = document.getElementsByClassName("dataLen")
let btn = document.getElementById("btnAns");
btn.addEventListener("click", () => {
    showDiv();
    submit()
});

function submit() {
    for (var i = 0; i < dataLen.length; i++) {
        let ans = document.getElementById(`ans${i}`)
        var obj=document.getElementsByName(`radio${i}`);
        
        
        var selected=[];
        for (var j=0; j<obj.length; j++) {
            if (obj[j].checked) {
            selected.push(obj[j].value);
            }
            
        }
        
        //   alert("您勾選的項目 : " + selected.join());
        if (selected.join() == ans.textContent){
            ans.style.color= "green"
        }
        else{
            ans.style.color= "red"
        }
    }
};

function showDiv() {
for (var i = 0; i < dataLen.length; i++) {
    
    let r = document.querySelector(`[name=radio${i}]:checked`)
    

    let radioVal = document.getElementsByName(`radio0`).value;
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