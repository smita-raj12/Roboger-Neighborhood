function beepBoop(userNum){
  let outputStrArray = [];
  for (let i = 0; i <= userNum ; i++){
    let strNum= i.toString();
    let strNumArray=strNum.split("");
    console.log(strNumArray)
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
  return outputStrArray.join( "  ,  ")
}


$(document).ready(function() {
  $("#formRoger").submit(function(event){
    event.preventDefault();
    $("#formRoger").hide();
    const UserNum = $("input#num").val();
    const BeepBoop = beepBoop(UserNum)
    $("#output").html(BeepBoop);
  });
});

