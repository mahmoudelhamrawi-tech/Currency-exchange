
var btn = document.getElementById("mybtn");
var inpdata = document.getElementById("inputnumber");

var showe = document.querySelectorAll(".showncur");
 var alrt = document.getElementById("alet");
var opt = document.getElementById("options")
var conter = 'EGP';
opt.onchange=function()
{
    conter=opt.value
//    console.log(conter)
}
//console.log(opt)
//console.log(opt)

  

var so1 = document.getElementById("show1");
var so11 = document.getElementById("show11");
var so2 = document.getElementById("show2");
var so3 = document.getElementById("show3");
var so4 = document.getElementById("show4");
var data;
btn.addEventListener("click",function(e){
    
    if(inpdata.value == ""||inpdata.value <=0)
        {
           alrt.classList.add("see");
            
        }else{
             alrt.classList.remove("see");

            
              for(var i=0;i<showe.length;i++)
        {
            showe[i].classList.add("see")
        }
    showdatas(); 
        }
  
})





 function showdatas() 
 {
     var req = new XMLHttpRequest();
     req.open("GET",`https://prime.exchangerate-api.com/v5/59121a8c8b62742f9c762581/latest/${conter}`);
     req.onreadystatechange = function()
     {
       if(req.readyState==4 && req.status==200)
          {
             data =JSON.parse(req.response);
             data= data.conversion_rates ;   
           
         }
       so11.innerHTML=(data.EGP * inpdata.value+"  "+'EGY');
       so1.innerHTML=(data.USD * inpdata.value+"  "+'USD');
       so2.innerHTML=(data.SAR * inpdata.value+"  "+'SAR');
       so3.innerHTML=(data.EUR * inpdata.value+"  "+'EUR');
       so4.innerHTML=(data.GBP * inpdata.value+"  "+'GBP');
                 // dis();
  
     }
     req.send();




 } 





