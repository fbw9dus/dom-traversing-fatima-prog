var closestEl = document.querySelector("h1")
closestEl.closest("header").style.border= "5px solid red"
closestEl.closest("header").style.textAlign="center"

var imgs = document.querySelectorAll("img")

for(var i=0;i<imgs.length;i++){
imgs[i].style.border="2px solid black",
imgs[i].style.width="265px",
imgs[i].style.height="200px"
}
var ps = document.querySelectorAll("p")
for(var x=0;x<ps.length;x++){
    ps[x].style.fontSize="20px"
    ps[x].style.fontWeight="bold"
    
}

var labels = document.querySelectorAll("label")

    labels[0].style.borderBottom="2px solid yellow",
    labels[1].style.borderBottom="2px solid orange",
    labels[2].style.borderBottom="2px solid red"
   
    

document.getElementsByClassName("info-package")[0].style.borderBottom="3px solid blue"
document.getElementsByClassName("info-package")[1].style.borderBottom="3px solid blue"
document.getElementsByClassName("info-package")[2].style.borderBottom="3px solid blue"
document.getElementsByClassName("info-package")[0].style.paddingBottom="30px"



var info =document.getElementsByClassName("info")
info[0].style.display="flex"
info[0].style. justifyContent= "space-around"

var ul =document.getElementsByTagName("ul")
ul[0].style.display="flex"
ul[0].style. justifyContent= "space-around"
ul[0].style.background="blue"
ul[0].style.color="white"
ul[0].style.listStyle="none"
ul[0].style.fontSize="16px"
ul[0].style.padding="10px 20px 10px 20px"
ul[0].style.fontWeight="bold"
ul[0].style.textDecoration="none"

var closestEl = document.querySelector("h2")

closestEl.closest("header").style.textAlign="center"

var price=document.getElementsByClassName("price")

for(var e=0;e<price.length;e++){


price[e].style.border="3px solid blue"
price[e].style.display="flex"
price[e].style.alignItems="center"
price[e].style.justifyContent="center"
price[e].style.borderRadius="50% 50%"
price[e].style.width="150px"
price[e].style.height="150px"
}

var prices=document.getElementsByClassName("prices")
prices[0].style.display="flex"
prices[0].style. justifyContent= "space-around"
prices[0].style.paddingTop="20px"
 
var a =document.getElementsByClassName("links")



a[0].style.display="flex"
a[0].style. justifyContent= "space-around"
a[0].style.justifyItem="center"
a[0].style.background="blue"
a[0].style.marginTop="40px"
a[0].style.listStyle="none"
a[0].style.fontSize="16px"
a[0].style.padding="50px"
a[0].style.fontWeight="bold"
for(i=0;a[0].querySelectorAll("a").length;i++){
    a[0].querySelectorAll("a")[i].style.textDecoration="none";
    a[0].querySelectorAll("a")[i].style.color="white";
}
