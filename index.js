window.onload=function(){
  let button = document.getElementById("calculate");
  button.addEventListener("click",loveCalculate);
}
function loveCalculate(){
  let name1 =document.getElementById("your-name").value;
  let name2=document.getElementById("crush-name").value;
  if(name1 != "" && name2 != ""){
    var randomNumber=Math.floor(Math.random()*101);
    document.getElementById("result-message").innerHTML=name1+" and "+name2+"'s chance of love :";
    document.getElementById("result-percentage").innerHTML=randomNumber.toString()+"%";

  }
}