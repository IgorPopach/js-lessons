var hamburger=document.querySelector(".hamburger"),dropdown=document.getElementById("myDropdown");function isOurDropdown(r){return r.matches(".dropbtn")||r.matches(".hamburger")||r.matches(".hamburger-box")}hamburger.addEventListener("click",function(){hamburger.classList.toggle("is-active"),dropdown.classList.toggle("show")}),window.onclick=function(r){isOurDropdown(r.target)||(dropdown.classList.remove("show"),hamburger.classList.remove("is-active"))};