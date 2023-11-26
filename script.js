let list= [];

//charger liste
function charger(){
    var x=localStorage.getItem('data');
    list= JSON.parse(x);
    return list;
}

// chargement de la liste
window.addEventListener("load", function(list){ 
    carnet= document.getElementById("carnet");
    list=charger();
     for(var i= 0; i < list.length; i++)
    {
        np=list[i].nom + " "+list[i].pre
        nelt=new Option(np,list[i].adr);
        carnet.options[i]=nelt;
    }
   
});



bt_ajouter=document.getElementById("bt_ajouter");
bt_supp=document.getElementById("bt_supp");
bt_find=document.getElementById("bt_find");
if(bt_ajouter!=null)
bt_ajouter.addEventListener("click", function(){ ajout();});
if(bt_supp!=null)
bt_supp.addEventListener("click", function(){ supp();});
if(bt_find!=null)
bt_find.addEventListener("click", function(){ adresse();});

function ajout()
{   list=charger();
nom=document.getElementById("nom").value;
pre=document.getElementById("pre").value;
np=nom+" "+pre
adr=document.getElementById("email").value;
carnet= document.getElementById("carnet");
var taille=carnet.options.length;
var nouveau=true;
// chercher si la personne existe dans la liste
if(nom!=""&&pre!=""){
if(taille!=0)
{
for (i=0;i<taille;i++)
{
elt=carnet.options[i].text;
 if(elt==np)
  {
  nouveau=false;
  alert("contact deja existant");
  break;
  }
  }
  }
  //ajouter dna la liste
  if(nouveau)
  {
  nelt=new Option(np,adr);
carnet.options[taille]=nelt;

list.push({ nom: nom, pre: pre, adr: adr });
var json_string = JSON.stringify(list);
localStorage.setItem('data', json_string);
alert(list.length+json_string)
// vider les valeurs des champ
document.getElementById("nom").value="";
document.getElementById("pre").value="";
document.getElementById("email").value="";
}}}
function supp()
{list=charger();
carnet= document.getElementById("carnet");
sel=carnet.options.selectedIndex;
if(sel==-1)
alert("veuillez sélectionner un élément SVP");
else
{
carnet.options[sel]=null;
list.splice(sel, 1);
var json_string = JSON.stringify(list);
localStorage.setItem('data', json_string);
alert(json_string)
}
}
function adresse()
{   alert(list.length)
    nom=document.getElementById("nom").value;
    pre=document.getElementById("pre").value;
    np=nom+" "+pre
adr=document.getElementById("email").value;
carnet= document.getElementById("carnet");
sel=carnet.options.selectedIndex;
if(sel==-1)
alert("veuillez sélectionner un élément SVP");
else
{
np=carnet.options[sel].text;
adr=carnet.options[sel].value;
alert("l'adresse mail de:"+np+" est: "+adr);
}
}




