function calc15_calculate() {


    var weigh;

    var fat;

    var p_fat;

    var cal_weight;

    var lbw;

    var cal_value;

    var result;


    var str = /%/g;

    document.calc15form.calc15_p_fat1.value = document.calc15form.calc15_p_fat1.value.replace(str, "");

    if (isNaN(document.calc15form.calc15_weight.value)) {

        alert("Value entered in Your Weight is not a number");

        document.calc15form.calc15_weight.focus();

        return false;

    }

    if (document.calc15form.calc15_weight.value == "") {

        alert("Введите Ваш вес ");

        document.calc15form.calc15_weight.focus();

        return false;

    }


    if (isNaN(document.calc15form.calc15_fat1.value)) {


        alert("Введите процент жира в организме");

        document.calc15form.calc15_fat1.focus();

        return false;

    }


    if (parseInt(document.calc15form.calc15_fat1.value) >= parseInt(document.calc15form.calc15_weight.value)) {

        alert("Введите процент жира в организме");

        document.calc15form.calc15_fat1.focus();

        return false;

    }

    if ((document.calc15form.calc15_fat1.value == "") && (document.calc15form.calc15_p_fat1.value == "")) {

        alert("Введите процент жира в организме");

        document.calc15form.calc15_fat1.focus();

        return false;

    }


    if (isNaN(document.calc15form.calc15_p_fat1.value) || (parseInt(document.calc15form.calc15_p_fat1.value) >= 100)) {

        alert("Введите процент жира в организме");

        document.calc15form.calc15_p_fat1.focus();

        return false;

    }


    weigh = document.calc15form.calc15_weight.value * 2.2;

    fat = document.calc15form.calc15_fat1.value;

    p_fat = document.calc15form.calc15_p_fat1.value;


    if (p_fat == "") {

        cal_weight = weigh - fat;

    }

    else {

        cal_weight = weigh - (weigh * p_fat / 100);

    }


    lbw = cal_weight / 2.2;

    cal_value = Math.round(lbw);

    result = 2 * cal_value;

    document.calc15form.calc15_res1.value = result;

}