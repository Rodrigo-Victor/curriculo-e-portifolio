window.onload = function () {
   if(document.querySelector(".menuMobile").addEventListener("click", function() {
      if(document.querySelector(".navMenu").style.display == "flex") {
         document.querySelector(".navMenu").style.display = "none"
      } else {
         document.querySelector(".navMenu").style.display = "flex"
      }
   }));
};

function changeP() {
   let urlParams = new URLSearchParams(window.location.search)
   let pID = urlParams.get("pID")
   
   if (pID == "jdv") {
      changeProject("as-jdv")

   } else if (pID == "calc") {
      changeProject("as-calc")
   } else if (pID == "cc") {
      changeProject("as-cc")
   } else if (pID == "tdl") {
      changeProject("as-tdl")
   }
}