const colorMode = document.getElementById("colormode");
const body = document.getElementById("body");

colorMode.addEventListener("change", () => {
    // if(body.classname != "dark-mode"){
    //     body.className = "dark-mode";
    // }else {
    //     body.className = "white-mode";    
    // }       
    document.body.classList.toggle("dark-mode")
});