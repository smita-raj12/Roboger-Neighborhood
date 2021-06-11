function beepBoop(Num){
  let outputStrArray = [];
  for (let i = 0; i <= Num ; i++){
    let strNum= i.toString();
    let strNumArray=strNum.split("");
    console.log(strNumArray)
    let outputStr = " "
    
    /*switch (strNumArray){
      case strNumArray.includes("3"):{
          outputStr = "Won't you be my neighbor?" 
      }
      case strNumArray.includes("2"):{
        outputStr = "Boop!" 
      }
      case strNumArray.includes("1"):{
        outputStr = "Beep" 
      }
      default :{
        outputStr = strNumArray;
      }
    }/* end switch*/
    if(strNumArray.includes("3")){
      outputStr = "Wont you be my neighbor" 
    }
    else if(strNumArray.includes("2")){
      outputStr = "Boop" 
    }
    else if(strNumArray.includes("1")){
      outputStr = "Beep" 
    }
    else {
      outputStr = strNumArray.toString();
    }
    outputStrArray.push(outputStr)
      console.log("outputStr",outputStr)
  }
  console.log("outputStrArray",outputStrArray,Num)
}

