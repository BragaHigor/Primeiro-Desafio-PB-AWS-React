const contador = () => {

    var textarea = document.getElementById("textarea");
    var caracteresRestantes = document.getElementById("caracteresRestantes");
    textarea.oninput = function () {
        caracteresRestantes.innerHTML = (`${130 - this.value.length} allowed characters.`);
    }

    var caractere = 130 - (document.getElementById("textarea")).value.length

    if(caractere <= 130) {
        const nextBtn = document.getElementById("next")

        nextBtn.setAttribute('disabled', '')
    }

}