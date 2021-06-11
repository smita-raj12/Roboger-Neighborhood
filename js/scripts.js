
function beepBoop(i,userName){
  let strNum= i.toString();
  let strNumArray=strNum.split("");
  let outputStr = " "
  
  if(strNumArray.includes("3")){
    return outputStr = `"Wont you be my neighbor? , ${userName} "` 
  }
  else if(strNumArray.includes("2")){
    return  outputStr = `"Boop!"`
  }
  else if(strNumArray.includes("1")){
    return  outputStr = `"Beep!"` 
  }
  else {
    return outputStr = strNumArray.toString();
  }
}

function ForwardLoop(userNum,userName){
  let outputStrArray = [];
  for ( i = 0; i <= userNum ; i++){
    let outputStr = beepBoop(i,userName)
    outputStrArray.push(outputStr)
  }
  return outputStrArray.join(  "  ,  "  )
}

function ReverseLoop(userNum,userName){
  let outputStrArray = [];
  for (let i = userNum; i >= 0; i--){
    let outputStr=beepBoop(i,userName)
    outputStrArray.push(outputStr)
  }  
  return outputStrArray.join(  "  ,  "  )
}

$(document).ready(function() {
  $("#formRoger").submit(function(event){
    event.preventDefault();
    const UserNum = $("input#num").val();
    const UserName = $("input#username").val();
    const BeepBoop = ForwardLoop(UserNum,UserName)
    const ReverseBeepBoop = ReverseLoop(UserNum,UserName)
    $("#output").html(BeepBoop);
    $("#Routput").html(ReverseBeepBoop);
  });
});

