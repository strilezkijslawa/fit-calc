function Calc33(form){
    if (!Check33(form.calc33_max.value)){
        return;
    }
    if (!Check33(form.calc33_weight.value)){
        return;
    }
    if (!Check33(form.calc33_popravka2.value)){
        return;
    }

    if(!form.calc33_max.value || !form.calc33_weight.value){
        alert("Недостаточно информации - введите максимальный вес и рабочий!");
        return;
    }

    var popr = form.calc33_popravka2.value;
    if (!popr){popr = 1;}
    form.calc33_reps.value =  Math.round((((( 1.0278 - (form.calc33_weight.value/form.calc33_max.value) ) / 0.0278))*popr*100))/100;
}

function Popr33(form){
    if (!Check33(form.calc33_max.value)){
        return;
    }
    if (!Check33(form.calc33_weight.value)){
        return;
    }
    if (!Check33(form.calc33_reps.value)){
        return;
    }

    if(!form.calc33_max.value || !form.calc33_weight.value || !form.calc33_reps.value){
        alert("Недостаточно информации - введите максимальный вес в одном повторении, вес, прогнозируемое количество повторений!");
        return;
    }

    form.calc33_popravka2.value =  Math.round((((( 1.0278 - (form.calc33_weight.value/form.calc33_max.value) ) / 0.0278))*100)/form.calc33_reps.value)/100;
}

function Check33(input){
    var ok = true;
    for(var i=0; i<input.length; i++){
        var inp=input.charAt(i);
        if (inp!="1" && inp!="2" && inp!="3" && inp!="4" && inp!="5" && inp!="6"
            && inp!="7" && inp!="8" && inp!="9" && inp!="0" && inp!= ".")
        {
            alert("Неправильный ввод - необходимо вводить лишь положительные значения!");
            ok = false;
            return ok;
        }
    }
    return ok;
}