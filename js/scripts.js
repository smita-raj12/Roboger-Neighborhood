function beepBoop(userNum){
  let outputStrArray = [];
  for (let i = 0; i <= userNum ; i++){
    let strNum= i.toString();
    let strNumArray=strNum.split("");
    let outputStr = " "
    
    if(strNumArray.includes("3")){
      outputStr = `"Wont you be my neighbor?"` 
    }
    else if(strNumArray.includes("2")){
      outputStr = `"Boop!"`
    }
    else if(strNumArray.includes("1")){
      outputStr = `"Beep!"` 
    }
    else {
      outputStr = strNumArray.toString();
    }
    outputStrArray.push(outputStr)
  }
  return outputStrArray.join(  "  ,  "  )
}

function beepBoopReverse(userNum){
  let outputStrArray = [];
  for (let i = userNum; i >= 0; i--){
    let strNum = i.toString();
    let strNumArray = strNum.split("");
    let outputStr = " "

    if(outputStr = strNumArray.toString()){
       
    if(strNumArray.includes("3")){
      outputStr = `"Wont you be my neighbor?"` 
    }
    else if(strNumArray.includes("2")){
      outputStr = `"Boop!"`
    }
    else if(strNumArray.includes("1")){
      outputStr = `"Beep"` 
    }
    }  
    outputStrArray.push(outputStr)
    console.log("outputStrArray",outputStrArray,userNum);
}
  return outputStrArray.join(  "  ,  "  )
}

$(document).ready(function() {
  $("#formRoger").submit(function(event){
    event.preventDefault();
    const UserNum = $("input#num").val();
    const BeepBoop = beepBoop(UserNum)
    const ReverseBeepBoop = beepBoopReverse(UserNum)
    $("#output").html(BeepBoop);
    $("#Routput").html(ReverseBeepBoop);
  });
});

