//script.js
//function tht handles everything
function calulateTip() {
    //fetchiing data
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    //Quick Validations
    if(billAmount ==="" || serviceQuality =="0"){
        window.alert("Something is missing!,Please check all the details");
        return;//this will prevent executing the further
    }/*=== is used for typecasting checking the parent n all*/
    
    //check the no of ppl n manage it properly
    if(numPeople==="" || numPeople<=1){
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "block";
    }
    //do math
    var total = (billAmount * serviceQuality)/numPeople;
    total = total.toFixed(2);
    
    //display the total
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//hide the tip on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


//Events handling
document.getElementById("calculate").onclick = function(){
    //code which will be triggered
    calulateTip();
}
