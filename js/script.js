let p1
let p2

const pegaElemento = (value, type) => {
    if(type.type == 'radio'){
        p2 = (value, type)
    }else{
        p1 = ({value}, {type})
    }

    if(p1 != undefined && p2 != undefined) {
        const nextBtn = document.getElementById("next")

        nextBtn.setAttribute('disabled', '')
    }else(console.log('ainda não'))
}

const verificaScreen3 = (value, type) => {
    if(type.type == 'checkbox'){
        p2 = (value, type)
    }

    if(p2 != undefined) {
        const nextBtn = document.getElementById("next")

        nextBtn.setAttribute('disabled', '')
    }
}
