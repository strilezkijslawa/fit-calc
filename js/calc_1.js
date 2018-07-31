function gaBf1(){

 var imweight = document.form.weightRB[0];
 var meweight = document.form.weightRB[1];

 var age = Number(document.form.age.value);
 var weight = Number(document.form.weight.value);
 var pec = Number(document.form.pec.value);
 var abd = Number(document.form.abd.value);
 var thigh = Number(document.form.thigh.value);
 var triceps = Number(document.form.triceps.value);
 var subscapular = Number(document.form.subscapular.value);
 var suprailiac = Number(document.form.suprailiac.value);
 var axilla = Number(document.form.axilla.value);

 var y = 495;
 var z = 450;

 if (imweight.checked) {
 var remain = weight%10;
 var wint = Math.round(weight);
 remain = weight-wint;
 var suff = Math.round(remain*10);
 weight = wint + suff/10;
	}
 if (meweight.checked) {
	weight = weight;
 var remain = weight%10;
 var wint = Math.round(weight);
 remain = weight-wint;
 var suff = Math.round(remain*10);
 weight = wint + suff/10;
	}

 gender="мужчина";

 var m = pec + abd + thigh + triceps + subscapular + suprailiac + axilla;
 var n = Math.pow(m, 2);
 var bd =1.1120 -(0.00043499*m)+(0.00000055*n)-(0.00028826*age);

 var perfat= ( y/(bd) ) - z;
 var pleanmass = 1 - (perfat/100);

 var remain = perfat%10;
 var bfint = Math.round(perfat);
 remain = perfat-bfint;
 var suff = Math.round(remain*10);
 var finbf = bfint + suff/10;

 var leanmass = pleanmass * weight;
 var remain2 = leanmass%10;
 var lmint = Math.round(leanmass);
 remain2 = leanmass-lmint;
 var suff2 = Math.round(remain*10);
 var finlm = lmint + suff2/10;

 //validation
 if ((age>100)||(age<15)){
	alert("Необходимо ввести возраст между 15 и 100 годами");
 return false;
 }
 if ((weight>272)||(weight<16)){
	alert("Необходимо ввести вес тела между 16 и 272 кг или в фунтах");
 return false;
 }
 if (pec>100 || pec<1){
	alert("Необходимо ввести толщину складки на груди между 1 и 100 мм");
 return false;
 }
 if (abd>100 || abd<1){
	alert("Необходимо ввести толщину складки на животе между 1 и 100 мм");
 return false;
 }
 if (thigh>100 || thigh<1){
	alert("Необходимо ввести толщину складки на бёдрах между 1 и 100 мм");
 return false;
 }
 if (triceps>100 || triceps<1){
	alert("Необходимо ввести толщину складки на трицепсе между 1 и 100 мм");
 return false;
 }
 if (subscapular>100 || subscapular<1){
	alert("Необходимо ввести толщину складки под лопаткой между 1 и 100 мм");
 return false;
 }
 if (suprailiac>100 || suprailiac<1){
	alert("I'm sorry, you must enter a suprailiac fold measurement between 1 and 100 mm");
 return false;
 }
 if (axilla>100 || axilla<1){
	alert("Необходимо ввести толщину складки под мышкой между 1 и 100 мм");
 return false;
 }

document.getElementById("res1").innerHTML="<h4>Ваш процент жира: " + finbf + " %</h4>";
document.getElementById("res2").innerHTML="<h4>Ваша сухая мышечная масса: " + finlm + " кг</h4>";
 }
 
 function gaBf2(){

 var imweight = document.form.weightRB[0];
 var meweight = document.form.weightRB[1];

 var age = Number(document.form.age.value);
 var weight = Number(document.form.weight.value);
 var pec = Number(document.form.pec.value);
 var abd = Number(document.form.abd.value);
 var thigh = Number(document.form.thigh.value);
 var triceps = Number(document.form.triceps.value);
 var subscapular = Number(document.form.subscapular.value);
 var suprailiac = Number(document.form.suprailiac.value);
 var axilla = Number(document.form.axilla.value);

 var y = 495;
 var z = 450;

 if (imweight.checked) {
 var remain = weight%10;
 var wint = Math.round(weight);
 remain = weight-wint;
 var suff = Math.round(remain*10);
 weight = wint + suff/10;
	}
 if (meweight.checked) {
	weight = weight;
 var remain = weight%10;
 var wint = Math.round(weight);
 remain = weight-wint;
 var suff = Math.round(remain*10);
 weight = wint + suff/10;
	}

 gender="мужчина";

 var m = pec + abd + thigh + triceps + subscapular + suprailiac + axilla;
 var n = Math.pow(m, 2);
 var bd =1.1120 -(0.00043499*m)+(0.00000055*n)-(0.00028826*age);

 var perfat= ( y/(bd) ) - z;
 var pleanmass = 1 - (perfat/100);

 var remain = perfat%10;
 var bfint = Math.round(perfat);
 remain = perfat-bfint;
 var suff = Math.round(remain*10);
 var finbf = bfint + suff/10;

 var leanmass = pleanmass * weight;
 var remain2 = leanmass%10;
 var lmint = Math.round(leanmass);
 remain2 = leanmass-lmint;
 var suff2 = Math.round(remain*10);
 var finlm = lmint + suff2/10;

 //validation
 if ((age>100)||(age<15)){
	alert("you must enter an age between 15 and 100 years old");
 return false;
 }
 if ((weight>272)||(weight<16)){
	alert("you must enter a weight between 35 and 600 pounds or kilos");
 return false;
 }
 if (pec>100 || pec<1){
	alert("you must enter a pec fold measurement between 1 and 100 mm");
 return false;
 }
 if (abd>100 || abd<1){
	alert(" you must enter an abdominal fold measurement between 1 and 100 mm");
 return false;
 }
 if (thigh>100 || thigh<1){
	alert("you must enter a thigh fold measurement between 1 and 100 mm");
 return false;
 }
 if (triceps>100 || triceps<1){
	alert("you must enter a triceps fold measurement between 1 and 100 mm");
 return false;
 }
 if (subscapular>100 || subscapular<1){
	alert(" you must enter a subscapular fold measurement between 1 and 100 mm");
 return false;
 }
 if (suprailiac>100 || suprailiac<1){
	alert("you must enter a suprailiac fold measurement between 1 and 100 mm");
 return false;
 }
 if (axilla>100 || axilla<1){
	alert("you must enter an axilla fold measurement between 1 and 100 mm");
 return false;
 }

document.getElementById("res1").innerHTML="<b>Your estimated body fat percentage is: " + finbf + " %</b><p/>";
document.getElementById("res2").innerHTML="<b>Your estimated lean body mass is: " + finlm + " lbs</b>";
 }