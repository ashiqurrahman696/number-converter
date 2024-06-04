let inputBase1 = document.getElementById('input-base1'),
baseSelect1 = document.getElementById('select-base1'),
inputBase2 = document.getElementById('input-base2'),
baseSelect2 = document.getElementById('select-base2');

inputBase1.addEventListener('input', () => {
    let inputVal = inputBase1.value,
    selectedBase1 = baseSelect1.value,
    selectedBase2 = baseSelect2.value,
    isValid = isValidNum(inputVal, selectedBase1);
    if(!isValid){
        inputVal = inputVal.slice(0, -1);
        inputBase1.value = inputVal;
    }
    if((inputVal === '' || (!isValid && inputVal.length === 0))){
        inputBase2.value = '';
        return;
    }

    inputBase2.value = convertBase(inputVal, selectedBase1, selectedBase2);
});

inputBase2.addEventListener('input', () => {
    let inputVal = inputBase2.value,
        selectedBase1 = baseSelect1.value,
        selectedBase2 = baseSelect2.value,
        isValid = isValidNum(inputVal, selectedBase2);
    if (!isValid) {
        inputVal = inputVal.slice(0, -1);
        inputBase2.value = inputVal;
    }
    if ((inputVal === '' || (!isValid && inputVal.length === 0))) {
        inputBase1.value = '';
        return;
    }

    inputBase1.value = convertBase(inputVal, selectedBase2, selectedBase1);
});

baseSelect1.addEventListener('change', () => {
    inputBase1.value = '';
    inputBase2.value = '';
});

baseSelect2.addEventListener('change', () => {
    inputBase1.value = '';
    inputBase2.value = '';
});

function convertBase(value, from, to){
    let decimalVal = parseInt(value, from);
    return decimalVal.toString(to);
}

function isValidNum(value, from){
    if(value == '') return false;
    let validChars = '0123456789ABCDEF'.substring(0, from);
    for(let i = 0; i < value.length; i++){
        if(validChars.indexOf(value[i].toUpperCase()) === -1) return false;
    }
    return true;
}