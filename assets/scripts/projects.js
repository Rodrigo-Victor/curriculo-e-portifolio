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

function changeProject(id) {
   let iFrame = document.querySelector("#iFrame");
   let tittle = document.querySelector(".projects h2")

   if(id == "as-jdv") {
      iFrame.setAttribute("src","./projects/jogo-da-velha/index.html")
      tittle.innerHTML = "Jogo da Velha"
   } else if (id == "as-calc") {
      iFrame.setAttribute("src", "./projects/calculadora/index.html")
      tittle.innerHTML = "Calculadora"
   } else if (id == "as-cc") {
      iFrame.setAttribute("src", "./projects/cara-ou-coroa/index.html")
      tittle.innerHTML = "Cara ou Coroa"
   } else if (id == "as-tdl") {
      iFrame.setAttribute("src", "./projects/to-do-list/index.html")
      tittle.innerHTML = "Lista de tarefas"
   }
}