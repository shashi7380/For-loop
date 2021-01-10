function myError() {
    var msg,x;
    msg= document.getElementById("test");
    msg.innerHTML="";
    x=document.getElementById("same").value;
    

try{
    if(x=="") throw "please choose a number";
    if(isNaN(x)) throw "only number allowed";
    if(x<4) throw "choose number greater 3";
}
catch(err){
    msg.innerHTML="Error is"+err;


}
finally{
    document.getElementById("same").value="";
}
}