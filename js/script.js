var allproducts=document.querySelectorAll(".products .item")
var div1=document.querySelector("#div1")
var div2=document.querySelector("#div2")
var btn=document.querySelector("#btn")
var btn1=document.querySelector("#btn1")
var totalprice=0

allproducts.forEach(function(m)
{m.onclick=function()
    {
        div1.innerHTML +=m.textContent +"<br>"
        totalprice+=+(m.getAttribute("price"))
        if(div1.innerHTML!="")
            {
                div1.style.display="block"
                btn1.style.display="block"
            }
    }})
    btn1.onclick=function()
    {
        div2.style.display="block"
        div2.innerHTML= "Total Price:" +totalprice+"$"

    }