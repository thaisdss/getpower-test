const telInput = document.querySelector("#tel");

const maskTel = (e) => {
    const tel = telInput.value
    const backspace = e.key == "Backspace"

    if(tel.length == 1 && !backspace){
        const newTel = "(" + tel;
        telInput.value = newTel;
    }

    if(tel.length == 3 && !backspace){
        const newTel = tel + ")";
        telInput.value = newTel;
    }

    if(tel.length == 9 && !backspace){
        const newTel = tel + "-";
        telInput.value = newTel;
    }
}

telInput.addEventListener("keypress", maskTel);