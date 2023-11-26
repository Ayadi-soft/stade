//charger liste
function charger(){
    var x=localStorage.getItem('data'); 
    list= JSON.parse(x);
    return list;
}


// chargement du champ age
window.addEventListener("load", function(){ 
    age= document.getElementById("age");
     for (i=10;i<70;i++)
  {
  newelt=new Option(i);
age.options[age.options.length]=newelt;
  }
   
});
// lorsque on saisie le nom
nom= document.getElementById("nom");
nom.addEventListener("keyup", function(){ 
     if (nom.value.length < 3)
    m=" nom invalide ";
else
m="";

document.getElementById("msg").innerText=m;

  });

  // lorsque on saisie le prenom
pre= document.getElementById("pre");
pre.addEventListener("keyup", function(){ 
       if (pre.value.length < 3)
    m=" prenom invalide ";
else
m="";

document.getElementById("msg").innerText=m;

  });


  // lorsque on saisie de age
age= document.getElementById("age");

age.addEventListener("change", function(){ 
      
    if (age.options[age.options.selectedIndex].innerText < 18)
    m=" age invalide ";
else
m="";

document.getElementById("msg").innerText=m;

  });


    // lorsque on saisie email
email= document.getElementById("mail");
email.addEventListener("keyup", function(){ 
     //alert(email.value)
    if (email.value.indexOf("@") ==-1)
    m=" email invalide ";
else
m="";

document.getElementById("msg").innerText=m;

  });


    // lorsque on clique sur le bouton
bt= document.getElementById("bt");
bt.addEventListener("click", function(){ 
    nom= document.getElementById("nom").value;
    pre= document.getElementById("pre").value;
    if(nom!=""&&pre!=""){
     l=charger(); 
     acces=true
     for(i =0;i<l.length;i++)
     if(list[i].nom == nom && list[i].pre== pre){
    alert(nom+" "+pre+" exixte dans la black list")
     acces=false}
     }
     if(acces)
     alert(nom+" "+pre+" peut entrer au stade")

 } );


