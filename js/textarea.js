var textarea = document.getElementById("textarea");
var caracteresRestantes = document.getElementById("caracteresRestantes");
textarea.oninput = function(){
    caracteresRestantes.innerHTML = (`${130 - this.value.length} allowed characters.`);
}