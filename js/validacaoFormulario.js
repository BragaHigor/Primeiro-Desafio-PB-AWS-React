const validaForm = () => {
    const name = document.getElementById('fullName').value
    const email = document.getElementById('Email').value
    const age = document.getElementById('Age').value
    const ancora = document.getElementById('ancora')
    const validaBtn = document.getElementById('valid-btn')

    const nameError = document.getElementById('name-error')
    const emailError = document.getElementById('email-error')
    const ageError = document.getElementById('age-error')


    const IsEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    if(!name) {
        nameError.classList.add('visible')
    }else{
        nameError.classList.remove('visible')
    }
    if(!IsEmail(email)) {
        emailError.classList.add('visible')
    }else{
        emailError.classList.remove('visible')
    }
    if(age <= 0 || age > 100){
        ageError.classList.add('visible')
    }else{
        console.log('aqui')
        ageError.classList.remove('visible')
    }



    if(!name || !IsEmail(email) || (age <= 0 || age > 100)){
        ancora.setAttribute('disabled', '')
        validaBtn.setAttribute('disabled', 'disabled')
    }
}



