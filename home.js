const toggleBtn = document.querySelector("#togglebtn");
const sidebarEl = document.querySelector("#open");

toggleBtn.addEventListener("click", () => {
    if (sidebarEl.getAttribute("class") === "open") {
      sidebarEl.classList.remove("open");
    } else  {
      sidebarEl.classList.add("open");
    }
  });

const togglebtn = document.querySelector("#open .ftr");
const sidebarel = document.querySelector("#ftrhover");

togglebtn.addEventListener("click", () => {
    if (sidebarel.getAttribute("id") === "ftrhover") {
      sidebarel.idList.remove("ftrhover");
    } else  {
      sidebarel.idList.add("ftrhover");
    }
  });


const togglebtN = document.querySelector("#open .pages");
const sidebareL = document.querySelector("#pageshover");

togglebtN.addEventListener("click", () => {
    if (sidebarel.getAttribute("id") === "pageshover") {
      sidebareL.idList.remove("pageshover");
    } else  {
      sidebareL.idList.add("pageshover");
    }
  });





