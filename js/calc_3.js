$(function() {  
    let lang = $('#lang').val();
    switch (lang) {
        case 'en':
            text_1 = 'Enter your age between 1 and 126';
            text_2 = 'Enter your height in cm of feet and inches';
            text_3 = 'Robinson formula, your ideal weight is <b>';
            text_4 = ' kgs or ';
            text_5 = ' lbs</b> <br>Miller formula, your ideal weight is <b>';
            text_6 = ' lbs </b> <br>Devine formula, your ideal weight is <b>';
            text_7 = ' lbs </b><br>Hamwi formula, your ideal weight is <b>';
            text_8 = ' lbs </b><br>healthy BMI recommendation, your recommended weight is <b>';
            text_9 = ' kg - ';
            text_10 = ' lbs - ';
            text_11 = ' lbs</b>';
            break;
        default:
            text_1 = 'Введите возраст от 1 до 126';
            text_2 = 'Введите рост';
            text_3 = 'Формула Робинсона: идеальный вес <b>';
            text_4 = ' кг или ';
            text_5 = ' фунтов</b> <br> Формула Миллера: идеальный вес <b>';
            text_6 = ' фунтов </b> <br> Формула Девайна: идеальный вес <b>';
            text_7 = ' фунтов </b><br> Формула Хамви: идеальный вес <b>';
            text_8 = ' фунтов </b><br> Рекомендаций ВОЗ: рекомендованный вес <b>';
            text_9 = ' кг - ';
            text_10 = ' фунтов - ';
            text_11 = ' фунтов</b>';
    }
});

function easyRoundOf(value,decima) {
    decima = Math.pow(10, decima);
    var rndvalus = Math.round(value * decima) / decima;
    if (isNaN(rndvalus)) {
        return 0;
    } else {
        return rndvalus;
    }
}

function calculate()
{
var age = parseFloat($('#bhname').val());
var gender = $('#gender').val();
var heightcm = parseFloat($('#heightcm').val());
var heightft = parseFloat($('#heightft').val());
var heightinch = parseFloat($('#heightinch').val());
if(isNaN(age) || age<2 || age>125)
{
alert(text_1);
$('#bhname').focus();
return false;
}
else if(heightcm=='')
{
alert(text_2);
heightUnitChange();
return false;
}
else
{
if(gender=='male')
{
var robikg = 52 + ( (((heightft*12)+heightinch) - 60) * 1.9);
var robilbs = kgToLbs(robikg);

var millerkg = 56.2 + ( (((heightft*12)+heightinch) - 60) * 1.41);
var millerlbs = kgToLbs(millerkg);

var hamwikg = 48 + ( (((heightft*12)+heightinch) - 60) * 2.7);
var hamwilbs = kgToLbs(hamwikg);

var devinekg = 50 + ( (((heightft*12)+heightinch) - 60) * 2.3);
var devinelbs = kgToLbs(devinekg);
}
else
{
var robikg = 49 + ( (((heightft*12)+heightinch) - 60) * 1.7);
var robilbs = kgToLbs(robikg);

var millerkg = 53.1 + ( (((heightft*12)+heightinch) - 60) * 1.36);
var millerlbs = kgToLbs(millerkg);

var hamwikg = 45.5 + ( (((heightft*12)+heightinch) - 60) * 2.2);
var hamwilbs = kgToLbs(hamwikg);

var devinekg = 45.5 + ( (((heightft*12)+heightinch) - 60) * 2.3);
var devinelbs = kgToLbs(devinekg);
}

var inchConv =  ((heightft*12)+heightinch) / 39.373533;
var whobmistart = inchConv * inchConv * 18.5;
var whobmiend = inchConv * inchConv * 25;
var whobmistrlbs = kgToLbs(whobmistart);
var whobmiendlbs = kgToLbs(whobmiend);

$('#dispres').html(text_3+ easyRoundOf(robikg,2) +text_4 +easyRoundOf(robilbs,2)+text_5+ easyRoundOf(millerkg,2) +text_4+easyRoundOf(millerlbs,2)+text_6+ easyRoundOf(devinekg,2) +text_4+easyRoundOf(devinelbs,2)+text_7+ easyRoundOf(hamwikg,2) +text_4+easyRoundOf(hamwilbs,2)+text_8+ easyRoundOf(whobmistart,2) +text_9+easyRoundOf(whobmiend,2)+text_4+ easyRoundOf(whobmistrlbs,2) +text_10+easyRoundOf(whobmiendlbs,2)+text_11);
}
}

function heightUnitChange()
{
var height = $('#height').val();
if(height=='cm')
{
$('#heightcm').prop('readonly', false);
$('#heightft').prop('readonly', true);
$('#heightinch').prop('readonly', true);
$('#heightcm').focus();
}
else
{
$('#heightcm').prop('readonly', true);
$('#heightft').prop('readonly', false);
$('#heightinch').prop('readonly', false);
$('#heightft').focus();
}
}

function lengConv(cur)
{
var id = $(cur).attr('id');
if(id=='heightcm')
{
var heightcm = parseFloat($('#heightcm').val());
if(heightcm==''){heightcm=0;}
var ft = Math.floor((heightcm * 0.3937008)/12);
var inch = ((heightcm * 0.3937008)%12);
if(isNaN(ft)){ft='0';}
$('#heightft').val(ft);
$('#heightinch').val(easyRoundOf(inch,4));
}
else
{
var ft = parseFloat($('#heightft').val());
var inch = parseFloat($('#heightinch').val());
if(ft==''){ft=0;}
if(inch==''){inch=0;}
var heightcm = ( (ft*12)+inch) *  2.54;
$('#heightcm').val(easyRoundOf(heightcm,4));
}
}

function kgToLbs(val)
{
return val * 2.20462;
}
