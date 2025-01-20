const colorMode = document.getElementById("colormode");
const body = document.getElementById("body");
const dfooter = document.getElementById("footer_content");

colorMode.addEventListener("change", () => {
       
    document.body.classList.toggle("dark-mode");
    document.dfooter.classList.toggle("dark-mode");
    document.main.classList.toggle("dark-mode");    
    document.dk.classList.toggle("dark-mode");
    
});