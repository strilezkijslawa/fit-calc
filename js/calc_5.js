function pointValueError(field) {
    field.style.backgroundColor = "#FFAAAA";
    field.value = "";
}

function oleyCalcPlace(divElName, piece) {
    var divEl = document.getElementById(divElName);

    if (divEl) { divEl.innerHTML = piece; }
}

function oleyResultsPlace(textElName, piece) {
    var textEl = document.getElementById(textElName);

    if (textEl) { textEl.value = piece; }
}

function oleyCalcBuild(referrer, divElName, openTxt, closeTxt) {
    var divEl = document.getElementById(divElName);

    if (!divEl) return false;

    if (divEl.style.display == 'block') {
        divEl.style.display = 'none';
        referrer.innerHTML = openTxt;
    } else {
        divEl.style.display = 'block';
        referrer.innerHTML = closeTxt;
    }

    return true;
}


function fillChart(maxP, minP, vmax, vmin, v90100, v8090, v7080, v6070, v5060) {
    var pref = 'oleyPC';
    var Pcurr = maxP - minP;
    var Pdiff = Pcurr * 0.1;
    document.getElementById(pref + vmax).innerHTML = maxP;
    document.getElementById(pref + vmin).innerHTML = minP;
    Pcurr-=Pdiff; document.getElementById(pref + v90100).innerHTML = parseInt(minP + Pcurr) + "-" + maxP;
    Pcurr-=Pdiff; document.getElementById(pref + v8090 ).innerHTML = parseInt(minP + Pcurr) + "-" + parseInt(minP + Pcurr + Pdiff);
    Pcurr-=Pdiff; document.getElementById(pref + v7080 ).innerHTML = parseInt(minP + Pcurr) + "-" + parseInt(minP + Pcurr + Pdiff);
    Pcurr-=Pdiff; document.getElementById(pref + v6070 ).innerHTML = parseInt(minP + Pcurr) + "-" + parseInt(minP + Pcurr + Pdiff);
    Pcurr-=Pdiff; document.getElementById(pref + v5060 ).innerHTML = parseInt(minP + Pcurr) + "-" + parseInt(minP + Pcurr + Pdiff);
    return true;
}

function oleyPCvalues(pulseParam, ageParam) {
    var form = document.getElementById('oleyPulseForm');
    var age = parseInt(ageParam);
    var minpulse = parseInt(pulseParam);
    var max1, max2, resultsEl;

    if (!age || !minpulse) {
        if (form.oleyPCage && !age) { pointValueError(form.oleyPCage); }
        if (form.oleyPCpulse && !minpulse) { pointValueError(form.oleyPCpulse); }
        return false;
    }

    if (form) {
        form.oleyPCpulse.value = minpulse;
        form.oleyPCage.value = age;
    }

    max1 = parseInt(220 - age);
    max2 = parseInt(205.8 - (0.685 * age));

    fillChart(max1, minpulse, 'max220', 'minP', '90100a', '8090a', '7080a', '6070a', '5060a');
    fillChart(max2, minpulse, 'maxAcc', 'minP', '90100b', '8090b', '7080b', '6070b', '5060b');


    oleyResultsPlace('oleyPCresults',
        PCshare[0] + parseInt(220 - age) + PCshare[1] + parseInt(205.8 - (0.685 * age)) +
        PCshare[2] + parseInt(minpulse + (max1 - minpulse) * 0.9) + '-' + max1 +
        PCshare[3] + parseInt(minpulse + (max2 - minpulse) * 0.9) + '-' + max2 +
        PCshare[4] + parseInt(minpulse + (max1 - minpulse) * 0.8) +'-' + parseInt(minpulse + (max1 - minpulse) * 0.9) +
        PCshare[5] + parseInt(minpulse + (max2 - minpulse) * 0.8) + '-' + parseInt(minpulse + (max2 - minpulse) * 0.9) +
        PCshare[6] + parseInt(minpulse + (max1 - minpulse) * 0.7) + '-' + parseInt(minpulse + (max1 - minpulse) * 0.8) +
        PCshare[7] + parseInt(minpulse + (max2 - minpulse) * 0.7) + '-' + parseInt(minpulse + (max2 - minpulse) * 0.8) +
        PCshare[8] + parseInt(minpulse + (max1 - minpulse) * 0.6) + '-' + parseInt(minpulse + (max1 - minpulse) * 0.7) +
        PCshare[9] + parseInt(minpulse + (max2 - minpulse) * 0.6) + '-' + parseInt(minpulse + (max2 - minpulse) * 0.7) +
        PCshare[10] + parseInt(minpulse + (max1 - minpulse) * 0.5) + '-' + parseInt(minpulse + (max1 - minpulse) * 0.6) +
        PCshare[11] + parseInt(minpulse + (max2 - minpulse) * 0.5) + '-' + parseInt(minpulse + (max2 - minpulse) * 0.6) +
        PCshare[12] + minpulse + PCshare[13]);

    if (resultsEl = document.getElementById('oleyPCgetresults')) {
        resultsEl.style.display = 'block';
    }

    return true;
}