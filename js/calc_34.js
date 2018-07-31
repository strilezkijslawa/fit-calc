function calc34(){
    var param1 = jQuery('#calc34_param1').val();
    var param2 = jQuery('#calc34_param2').val();

    if (jQuery.isNumeric(param1) && jQuery.isNumeric(param2)){

        var res1 = param1/(1.0278-(0.0278*param2));
        var res2 = (param1 * param2* 0.033) + eval(param1);
        var res3 = param1 / (1.013 - (0.0267123 * param2));

        jQuery('#calc34_res1').val(res1.toFixed(1));
        jQuery('#calc34_res2').val(res2.toFixed(1));
        jQuery('#calc34_res3').val(res3.toFixed(1));
    }
    else {
        alert('Введите правильно значения');
        return;
    }
}