function select1() {
    var sel1=document.getElementById("sel1").value;
    switch (sel1){
                  case "bears":var me=["panda","other"];break;
                  case "lions":var me=["tiger","lion"];break;
                  default: var me = "...";
                }
                var sel2="";
                for(i=0;i<me.length;i++){

                    sel2=sel2+"<option value='"+me[i]+"'>"+me[i]+"</option>";
                }
                document.getElementById('sel2').innerHTML=sel2;
}
function select2(){

var x=document.getElementById("sel2").value;
  var y=document.getElementById("sel1").value;
  if(y==="bears" && x==="panda"){
    document.getElementById("p1").style.display="block";
    document.getElementById("p2").style.display="block";
    document.getElementById("p3").style.display="block";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";

  }else if(y==="bears" && x==="other"){
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="block";
    document.getElementById("p5").style.display="block";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="none";

  }else if(y==="lions" && x==="tiger"){
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="block";
    document.getElementById("p7").style.display="block";
    document.getElementById("p8").style.display="none";

  }else if(y==="lions" && x==="lion"){
    document.getElementById("p1").style.display="none";
    document.getElementById("p2").style.display="none";
    document.getElementById("p3").style.display="none";
    document.getElementById("p4").style.display="none";
    document.getElementById("p5").style.display="none";
    document.getElementById("p6").style.display="none";
    document.getElementById("p7").style.display="none";
    document.getElementById("p8").style.display="block";

  }
}
