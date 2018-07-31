var gender = true;
var weight = 0;
var height = 0;
var age = 0;
var RHR = 0;
var meas_01 = 0;
var meas_02 = 0;
var meas_03 = 0;
var meas_04 = "";
var meas_05 = 0;

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

function calc12_gender_set()
{	var g_f = document.getElementById("calc12_gender_f");
	var g_m = document.getElementById("calc12_gender_m");
	if(g_m.checked)		window.gender = true;
	else
		window.gender = false;
    calc12_checkInput();
}

function calc12_checkInput()
{	var is_ok = true;
	window.weight = document.getElementById("calc12_weight").value;
	if(isNaN(window.weight) || window.weight < 0 || window.weight > 150)
	{
		window.weight = 0;
		is_ok = false;
	}
	document.getElementById("calc12_weight").value = window.weight;


	window.height = document.getElementById("calc12_height").value;
	if(isNaN(window.height) || window.height < 0 || window.height > 220)
	{
		window.height = 0;
		is_ok = false;
	}
	document.getElementById("calc12_height").value = window.height;


	window.age = document.getElementById("calc12_age").value;
	if(isNaN(window.age) || window.age < 0 || window.age > 80)
	{
		window.age = 0;
		is_ok = false;
	}
	document.getElementById("calc12_age").value = window.age;


	window.RHR = document.getElementById("calc12_RHR").value;
	if(isNaN(window.RHR))
	{
		window.RHR = 0;
		is_ok = false;
	}
	document.getElementById("calc12_RHR").value = window.RHR;


	window.meas_01 = document.getElementById("calc12_meas_1").value;
	if(isNaN(window.meas_01))
	{
		window.meas_01 = 0;
		is_ok = false;
	}
	document.getElementById("calc12_meas_1").value = window.meas_01;


	window.meas_02 = document.getElementById("calc12_meas_2").value;
	if(isNaN(window.meas_02))
	{
		window.meas_02 = 0;
		is_ok = false;
	}
	document.getElementById("calc12_meas_2").value = window.meas_02;


	window.meas_03 = document.getElementById("calc12_meas_3").value;
	if(isNaN(window.meas_03))
	{
		window.meas_03 = 0;
		is_ok = false;
	}
	document.getElementById("calc12_meas_3").value = window.meas_03;


	var meas_4_obj = document.getElementById("calc12_meas_4");
	if(meas_4_obj&&meas_4_obj.selectedIndex>=0)
	{
		window.meas_04=meas_4_obj.selectedIndex;
	}


	window.meas_05 = document.getElementById("calc12_meas_5").selectedIndex;

	if(is_ok)
		calc12_processCalc();
	else
		alert("Неправильно введены один или более параметров.");
}

function calc12_processCalc()
{	var BMI = window.weight / (window.height*window.height) * 10000;
	var BMIClass = "";
	if (BMI <= 18.5)
		BMIClass = "Низкая";
	else if(BMI > 18.5 &&BMI <= 25)
		BMIClass = "Физиологическая норма";
	else if(BMI > 25 &&BMI <= 30)
		BMIClass = "Небольшой избыток веса";
	else if(BMI > 30 &&BMI <= 40)
		BMIClass = "Избыточный вес";
	else if(BMI > 40)
		BMIClass = "Ожирение";

	var WtHR = Math.round(window.meas_01 / window.meas_02 * 100);
	var body_shape = "";
	if(window.gender)
		if(WtHR <= 95)
			body_shape = "Груша";
		else
			body_shape = "Яблоко";
	else
		if(WtHR <= 80)
			body_shape = "Груша";
		else
			body_shape = "Яблоко";

	var body_frame_size = Array("Хрупкое", "Среднее", "Крупное");
	if(window.gender)
	{
		if(window.height < 162)
			if(window.meas_03 < 6.35)
				body_frame_size = body_frame_size[0];
			else if(window.meas_03 > 7.28)
				body_frame_size = body_frame_size[2];
			else
				body_frame_size = body_frame_size[1];
		else if(window.height < 172)
			if(window.meas_03 < 6.65)
				body_frame_size = body_frame_size[0];
			else if(window.meas_03 > 7.28)
				body_frame_size = body_frame_size[2];
			else
				body_frame_size = body_frame_size[1];
		else if(window.height < 182)
			if(window.meas_03 < 6.98)
				body_frame_size = body_frame_size[0];
			else if(window.meas_03 > 7.62)
				body_frame_size = body_frame_size[2];
			else
				body_frame_size = body_frame_size[1];
		else if(window.height < 192)
			if(window.meas_03 < 6.98)
				body_frame_size = body_frame_size[0];
			else if(window.meas_03 > 7.92)
				body_frame_size = body_frame_size[2];
			else
				body_frame_size = body_frame_size[1];
		else if(window.height < 202)
			if(window.meas_03 < 7.28)
				body_frame_size = body_frame_size[0];
			else if(window.meas_03 > 8.25)
				body_frame_size = body_frame_size[2];
			else
				body_frame_size = body_frame_size[1];
		else
			if(window.meas_03 < 7.45)
				body_frame_size = body_frame_size[0];
			else if(window.meas_03 > 8.5)
				body_frame_size = body_frame_size[2];
			else
				body_frame_size = body_frame_size[1];
	}
	else
	{
		if(window.height < 162)
			if(window.meas_03 < 5.71)
				body_frame_size = body_frame_size[0];
			else if(window.meas_03 > 6.35)
				body_frame_size = body_frame_size[2];
			else
				body_frame_size = body_frame_size[1];
		else if(window.height > 180)
			if(window.meas_03 < 6.35)
				body_frame_size = body_frame_size[0];
			else if(window.meas_03 > 6.98)
				body_frame_size = body_frame_size[2];
			else
				body_frame_size = body_frame_size[1];
		else
			if(window.meas_03 < 6.02)
				body_frame_size = body_frame_size[0];
			else if(window.meas_03 > 6.65)
				body_frame_size = body_frame_size[2];
			else
				body_frame_size = body_frame_size[1];
	}

	if(window.gender)
		var ideal_weight = Math.round((window.height - 100) * 0.90) + " кг. - " + Math.round((window.height - 100)) + " кг.";
	else
		var ideal_weight = Math.round((window.height - 100) * 0.85) + " кг. - " + Math.round((window.height - 100) * 0.95) + " кг.";

	var lean_mass = Math.round((1.1 * window.weight) - (128*(window.weight*window.weight)/(window.height*window.height)));
	var lean_mass_percent = Math.round(100 * lean_mass / window.weight);

	var body_fat = window.weight - lean_mass;
	var body_fat_percent = 100 - lean_mass_percent;

	var RMR_perday = 66 + (6.23 * (window.weight * 2.2)) + (12.7 * (window.height / 2.54)) - (6.8 * window.age);
	var RMR_perhour = RMR_perday / 24;


	var activity_factor = Array(1.2, 1.375, 1.55, 1.725, 1.9);
	var AAM_perday = RMR_perday * activity_factor[window.meas_04];
	var AAM_perhour = AAM_perday / 24;

	var MHR = 220 - window.age;
	var MHR_10 = MHR / 6;

	var koef = 0.5 + (0.1 * window.meas_05);
	var THR_1 = ((MHR - window.RHR) * koef) + window.RHR * 1;
	var THR_2 = ((MHR - window.RHR) * (koef + 0.1)) + window.RHR * 1;
	var THR_1_10 = THR_1 / 6;
	var THR_2_10 = THR_2 / 6;



	document.getElementById("calc12_BMI").innerHTML = Math.round(BMI * 100) / 100;
	document.getElementById("calc12_BMIClass").innerHTML = BMIClass;
	document.getElementById("calc12_WaistHipRatio").innerHTML = WtHR;
	document.getElementById("calc12_FrameSize").innerHTML = body_frame_size;
	document.getElementById("calc12_IdealWgtRng").innerHTML = ideal_weight;
	document.getElementById("calc12_FatMass").innerHTML = body_fat;
	document.getElementById("calc12_BodyFat").innerHTML = body_fat_percent;
	document.getElementById("calc12_LeanMass").innerHTML = lean_mass;
	document.getElementById("calc12_LeanPct").innerHTML = lean_mass_percent;
	document.getElementById("calc12_RMRDay").innerHTML = Math.round(RMR_perday * 100) / 100;
	document.getElementById("calc12_RMRHour").innerHTML = Math.round(RMR_perhour * 100) / 100;
	document.getElementById("calc12_AvgCalDay").innerHTML = Math.round(AAM_perday * 100) / 100;
	document.getElementById("calc12_AvgCalHour").innerHTML = Math.round(AAM_perhour * 100) / 100;
	document.getElementById("calc12_TargetHrtRtMin").innerHTML = (Math.round(THR_1 * 100) / 100) + " - " + (Math.round(THR_2 * 100) / 100);
	document.getElementById("calc12_TargetHrtRtSec").innerHTML = (Math.round(THR_1_10 * 100) / 100) + " - " + (Math.round(THR_2_10 * 100) / 100);
	document.getElementById("calc12_MaxHrtRtMin").innerHTML = (Math.round(MHR * 100) / 100);
	document.getElementById("calc12_MaxHrtRtSec").innerHTML = (Math.round(MHR_10 * 100) / 100);
}



 
function Get( oName, oFrame, oDoc ) {
	if( !oDoc ) { if( oFrame ) { oDoc = oFrame.document; } else { oDoc = window.document; } }
	if( oDoc[oName] ) { return oDoc[oName]; } if( oDoc.all && oDoc.all[oName] ) { return oDoc.all[oName]; }
	if( oDoc.getElementById && oDoc.getElementById(oName) ) { return oDoc.getElementById(oName); }
	for( var x = 0; x < oDoc.forms.length; x++ ) { if( oDoc.forms[x][oName] ) { return oDoc.forms[x][oName]; } }
	for( var x = 0; x < oDoc.anchors.length; x++ ) { if( oDoc.anchors[x].name == oName ) { return oDoc.anchors[x]; } }
	for( var x = 0; document.layers && x < oDoc.layers.length; x++ ) {
		var theOb = Get( oName, null, oDoc.layers[x].document ); if( theOb ) { return theOb; } }
	if( !oFrame && window[oName] ) { return window[oName]; } if( oFrame && oFrame[oName] ) { return oFrame[oName]; }
	for( var x = 0; oFrame && oFrame.frames && x < oFrame.frames.length; x++ ) {
		var theOb = Get( oName, oFrame.frames[x], oFrame.frames[x].document ); if( theOb ) { return theOb; } }
	return null;
}

// Numeric test
function isNumeric(num, fieldPrompt, fieldName) {
	var regTest=/(^\d+$)|(^\d+\.\d+$)/
	if (regTest.test(num))
		return true;
	else {
		if (fieldPrompt) { 
			alert(fieldPrompt + " Must be a valid number");
			Get(fieldName).focus();
			Get(fieldName).select();
		}
		return false;
	}
}

//Iterate thru table rows
function loopTable(tbl, fnCallback, data)
{
	
  var r, c;
  if (!tbl || !fnCallback)  
	return; 
	
  for (r = 0; r < tbl.rows.length; ++r) {
    if (false == fnCallback(tbl.rows[r], true, r, c, data)) { 
		return; 
	}
 
  }
}

 
function TableObject(id, inh, def, hov, sel, alt) // object prototype
{
  var tbl = Get(id);
  if (tbl) {
    loopTable(tbl, doHover);
  }
  function doHover(obj, isRow)
  {
    if (isRow) {
	  
	  if (obj.className == alt) {
	  	//debug("got alt");
	  		obj.onmouseout = trOutAlt;
	  } else {
	  	obj.onmouseout = trOut;
	  }
      //obj.className = def;
      obj.onmouseover = trOver;
      
    }
    else {
      obj.className = inh;
      obj.onmouseover = tdOver;
      obj.onmouseout = tdOut;
    }
  }
  this.unload = function() { loopTable(tbl, clearEvents); }
  function clearEvents(o) { o.onmouseover = o.onmouseout = null; }
  function trOver() { this.className = hov; }
  function trOut() {this.className = def;}
  function trOutAlt() {this.className = alt;}
  function tdOver() { this.className = sel; }
  function tdOut() { this.className = inh; }
}

// Show the debug window
function showDebug() {
  window.top.debugWindow =
      window.open("",
                  "Debug",
                  "left=0,top=0,width=300,height=700,scrollbars=yes,"
                  +"status=yes,resizable=yes");
  window.top.debugWindow.opener = self;
  // open the document for writing
  window.top.debugWindow.document.open();
  window.top.debugWindow.document.write(
      "<HTML><HEAD><TITLE>Debug Window</TITLE></HEAD><BODY><PRE>\n");
}

// If the debug window exists, then write to it
function debug(text) {
  if (window.top.debugWindow && ! window.top.debugWindow.closed) {
    window.top.debugWindow.document.write(text+"\n");
  }
}


function setInitValues()
{
        document.formFullBody.radioUnit[0].checked = true;
        document.formFullBody.radioGender[0].checked = true;

        //document.formFullBody.txtWeight.value = 130;
        document.getElementById("divWeightUS").innerHTML = "lbs";

	document.getElementById("divHeightUS").style.display = "block";
	document.getElementById("divHeightMetric").style.display = "none";
	//$("#divHeightUS").replaceWith("<div id=divHeightMetric> 
                          // <input type=text size=4 maxlength=4 name=txtHeight value='' id=txtHeight>cm</div>");

        //document.formFullBody.txtAge.value = 29;

        //document.formFullBody.txtRHR.value = 12;
        document.getElementById("unitRHR").innerHTML = "bpm";


        //document.formFullBody.txtWaist.value = 29;
        document.getElementById("unitWaist").innerHTML = "in";

        //document.formFullBody.txtHip.value = 38;
        document.getElementById("unitHip").innerHTML = "in";

        //document.formFullBody.txtElbow.value = 2.5;
        document.getElementById("unitElbow").innerHTML = "in";


        //document.formFullBody.FitGoal.selectedIndex = 2;
        //document.formFullBody.ActLevel.selectedIndex = 1;

}




function setUnits()
{
if(document.formFullBody.radioUnit[0].checked){     //US

        /*document.formFullBody.txtWeight.value = 130;
        document.formFullBody.txtAge.value = 29;
        document.formFullBody.txtRHR.value = 12;

            document.formFullBody.txtWaist.value = 29;
            document.formFullBody.txtHip.value = 38;
            document.formFullBody.txtElbow.value = 2.5;

            document.formFullBody.txtWaist.value = 29;
            document.formFullBody.txtHip.value = 38;
            document.formFullBody.txtElbow.value = 2.5;*/

        document.getElementById("divWeightUS").innerHTML = "lbs";
	document.getElementById("divHeightUS").style.display = "block";
	document.getElementById("divHeightMetric").style.display = "none";
        document.getElementById("unitWaist").innerHTML = "in";
        document.getElementById("unitHip").innerHTML = "in";
        document.getElementById("unitElbow").innerHTML = "in";

} else if(document.formFullBody.radioUnit[1].checked){    //Metric

        /*document.formFullBody.txtWeight.value = 59;
        document.formFullBody.txtHeight.value = 168;
        document.formFullBody.txtAge.value = 29;
        document.formFullBody.txtRHR.value = 12;

            document.formFullBody.txtWaist.value = 74;
            document.formFullBody.txtHip.value = 97;
            document.formFullBody.txtElbow.value = 6.4;

            document.formFullBody.txtWaist.value = 74;
            document.formFullBody.txtHip.value = 97;
            document.formFullBody.txtElbow.value = 6.4;*/



        document.getElementById("divWeightUS").innerHTML = "kg";
	document.getElementById("divHeightUS").style.display = "none";
	document.getElementById("divHeightMetric").style.display  = "block";
        document.getElementById("unitWaist").innerHTML = "cm";
        document.getElementById("unitHip").innerHTML = "cm";
        document.getElementById("unitElbow").innerHTML = "cm";
        document.getElementById("unitRHR").innerHTML = "bpm";


}

}


function calcFullBody() {
     
    formFullBody = document.formFullBody;

    if(document.formFullBody.radioUnit[0].checked) //us
    {

        var hFeet = formFullBody.HeightFeet.value*1;
        var hInch = formFullBody.HeightInches.value*1;
	    var hFeetConvert = hFeet * 12;
        var h = hFeetConvert + hInch;

        var height = h*2.54 ;

        var weight = formFullBody.txtWeight.value*1;
        weight = weight * 0.4536;

        var waist_temp = formFullBody.txtWaist.value*1;
        var waist = waist_temp*2.54;

        var hip_temp = formFullBody.txtHip.value*1;
        var hip = hip_temp*2.54;

        var elbow_temp = formFullBody.txtElbow.value*1;
        var elbow = elbow_temp*2.54;

        var age = formFullBody.txtAge.value*1;
        var RHR = formFullBody.txtRHR.value*1;



    }else {  //metric

        var height = formFullBody.txtHeight.value*1;
        var weight = formFullBody.txtWeight.value*1;
        var waist = formFullBody.txtWaist.value*1;
        var hip = formFullBody.txtHip.value*1;
        var elbow = formFullBody.txtElbow.value*1;
        var age = formFullBody.txtAge.value*1;
        var RHR = formFullBody.txtRHR.value*1;

    }


        var fitGoal = formFullBody.FitGoal.value;
        var actLevelFactor = formFullBody.ActLevel.value*1;


        var heightOk = checkNum(height);
        var weightOk = checkNum(weight);
        var waistOk = checkNum(waist);
        var hipOk = checkNum(hip);;
        var elbowOk = checkNum(elbow);
        var ageOk = checkNum(age);
        var RHROk = checkNum(RHR);

     


    if(!heightOk || height==0 || height==""){
        alert("Please Provide valid Numeric value in Height box.");
        //exit(0);
	return false;
    }

    if(!weightOk || weight==0 || weight=="" ){
        alert("Please Provide valid Numeric value in Weight box.");
	//exit(0);
        return false;
    }

    if(!waistOk || waist=="" || waist==""){
        alert("Please Provide valid Numeric value in Waist box.");
	//exit(0);
        return false;
    }

    if(!hipOk || hip==0 || hip==""){
        alert("Please Provide valid Numeric value in Hip box.");
	//exit(0);
        return false;
    }

    if(!elbowOk || elbow==0 || elbow==""){
        alert("Please Provide valid Numeric value in elbow box.");
	// exit(0);
        return false;
    }

    if(!age || age==0 || age==""){
        alert("Please Provide valid Numeric value in age box.");
	// exit(0);
        return false;
    }else if(age>100){
        alert("Please age less than 100 year in age box.");
	// exit(0);
        return false;
    }

    if(!RHR || RHR==0 || RHR==""){
        alert("Please Provide valid Numeric value in RHR box.");
	// exit(0);
        return false;
    }



    //Body Mass Index (BMI)
    // BMI = Weight / (Height in cm)2 * 10000

    var bmi = weight/(height*height) * 10000;
    var BMI = Math.round(bmi)
    Get("BMI").innerHTML = BMI;                                                              //1


	if (BMI <19) 
		Get("BMIClass").innerHTML = "Underweight" ;                                 //2
	if (BMI >=19 && BMI <=25) 
		Get("BMIClass").innerHTML = "Desirable weight";
	if (BMI >=26 && BMI <=29) 
		Get("BMIClass").innerHTML = "Prone to health risks" ;
	if (BMI >=30 && BMI <=40) 
		Get("BMIClass").innerHTML = "Obese";
	if (BMI >40) 
		Get("BMIClass").innerHTML = "Extremely obese" ;

    var waistToHip = waist/hip;
    var wth = parseFloat(waistToHip*100);
    wth = wth.toFixed(2);
    Get("WaistHipRatio").innerHTML = wth+" %";                                           //3






    var waistToHip_Interpretation = "";
    var bodyShape = "";

    //Body Shape Pear = Male with Waist to Hip Ratio less than 95%
    if(document.formFullBody.radioGender[1].checked) //male
    {
    	if(waistToHip>95)
    	{ bodyShape = "Apple"; } else {  bodyShape = "Pear"; }

       if(waistToHip<(0.75))
         waistToHip_Interpretation = "Excellent";
       else if(waistToHip>=(0.76) && waistToHip<=(0.85))
         waistToHip_Interpretation = "Very Good";

       else if(waistToHip>=(0.86) && waistToHip<=(0.90))
         waistToHip_Interpretation = "Healthy";

       else if(waistToHip>=(0.91) && waistToHip<=(0.99))
         waistToHip_Interpretation = "Increased risk";

       else if(waistToHip>=(1.0) && waistToHip<=(1.09))
         waistToHip_Interpretation = "Serious risk";

       else if(waistToHip>=(1.10) && waistToHip<=(1.25))
         waistToHip_Interpretation = "Aggravated risk";

       else if(waistToHip>(1.25))
         waistToHip_Interpretation = "Severe health risk";


    } else if(document.formFullBody.radioGender[0].checked){  // female

    	if(waistToHip>80)
    	{ bodyShape = "Apple"; } else {  bodyShape = "Pear"; }

       if(waistToHip<(0.73))
         waistToHip_Interpretation = "Excellent";
       else if(waistToHip>=(0.74) && waistToHip<=(0.79))
         waistToHip_Interpretation = "Very Good";

       else if(waistToHip>=(0.80) && waistToHip<=(0.85))
         waistToHip_Interpretation = "Healthy";

       else if(waistToHip>=(0.86) && waistToHip<=(0.94))
         waistToHip_Interpretation = "Increased risk";

       else if(waistToHip>=(1.95) && waistToHip<=(1.04))
         waistToHip_Interpretation = "Serious risk";

       else if(waistToHip>=(1.05) && waistToHip<=(1.20))
         waistToHip_Interpretation = "Aggravated risk";

       else if(waistToHip>(1.20))
         waistToHip_Interpretation = "Severe health risk";

    }


     Get("BodyShape").innerHTML = bodyShape;                                              //4
     Get("WaistToHipInterp").innerHTML = waistToHip_Interpretation ;                      //5




  //Body Frame Size
    // Small = Height between 163 cm and 170 cm and Elbow less than 6.7  cm

     
    var bodyFrameSize = "";
    if(document.formFullBody.radioGender[1].checked) //male
    {


    	if(height<155 && elbow<57)
     	{
     		 bodyFrameSize = "Small";



     	}else if((height>=155 && height<=149) ||  (elbow>6.4 && elbow<7.3)||  
                 (height>=160 && height<=169) ||  (elbow>6.7 && elbow<7.3)||
                 (height>=170 && height<=179) ||  (elbow>7.0 && elbow<7.5)||
                 (height>=180 && height<=189) ||  (elbow>7.0 && elbow<7.9)||
                 (height>=190 && height<=199) ||  (elbow>7.3 && elbow<8.3))
     	{
     		 bodyFrameSize = "Medium";

     	}else if(height>199 && elbow>83)
     	{
     		 bodyFrameSize = "Large";
     	}else { bodyFrameSize = "Undefined"; }

                                                 //female
    } else { 

    	if(height>146 && elbow<57)
     	{
     		 bodyFrameSize = "Small";

     	}else if((height>=146 && height<=149) ||  (elbow>5.7 && elbow<6.4)||
                 (height>=150 && height<=159) ||  (elbow>5.7 && elbow<6.4)||
                 (height>=160 && height<=169) ||  (elbow>6.0 && elbow<6.7)||
                 (height>=170 && height<=179) ||  (elbow>6.0 && elbow<6.7)||
                 (height>=180 && height<=190) ||  (elbow>6.3 && elbow<7.0))
        {
     		 bodyFrameSize = "Medium";

     	}else  if(height>190 && elbow< 70)
     	{
     		 bodyFrameSize = "Large";
     	}else 
	{
	   odyFrameSize="Undefined";	
	}

    }
     // Ideal Weight 62 kg - 64 kg


     Get("FrameSize").innerHTML = bodyFrameSize;                                            //6


     var idealWeight = "";
     var u = "lb"

    height = height.toFixed(1);

    if(document.formFullBody.radioGender[1].checked) //male
    {

    	 if((height==157.5 ) || (height>157 && height<160)){
             if(bodyFrameSize=="Small" ) idealWeight= "128-134"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "131-141"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "131-141"+u;
         }else if((height==160)|| (height>=160 && height<162)){
             if(bodyFrameSize=="Small" ) idealWeight= "130-136"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "133-143"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "140-153"+u;
         }else if((height==162.6)||(height>=162 && height<165)){
             if(bodyFrameSize=="Small" ) idealWeight= "132-138"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "135-145"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "142-156"+u;
  	 }else if((height==165.1)||(height>=165 && height<167)){
             if(bodyFrameSize=="Small" ) idealWeight= "134-140"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "137-148"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "144-160"+u;	 	
 	 }else if((height==167.6) || (height>=167 && height<170)){
             if(bodyFrameSize=="Small" ) idealWeight= "136-142"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "139-151"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "146-164"+u;	 	
 	 }else if((height==170.2)||  (height>=170 && height<172)){
             if(bodyFrameSize=="Small" ) idealWeight= "138-145"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "142-154"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "149-168"+u;
 	 }else if((height==172.7)|| (height>=172 && height<175)){
             if(bodyFrameSize=="Small" ) idealWeight= "140-148"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "145-157"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "152-172"+u;	
 	 }else if((height==175.3)||(height>=175 && height<177)){
             if(bodyFrameSize=="Small" ) idealWeight= "142-151"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "148-160"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "155-176"+u;	 	
 	 }else if((height==177.8)|| (height>=177 && height<180)){
             if(bodyFrameSize=="Small" ) idealWeight= "144-154"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "151-163"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "158-180"+u; 	 	
 	 }else if((height==180.3)|| (height>=180 && height<182)){
             if(bodyFrameSize=="Small" ) idealWeight= "146-157"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "154-166"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "161-184"+u; 	 	
 	 }else if((height==182.9) || (height>=182 && height<185)){
             if(bodyFrameSize=="Small" ) idealWeight= "149-160"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "157-170"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "164-188"+u;  	 	
 	 }else if((height==185.4)|| (height>=185 && height<188)){
             if(bodyFrameSize=="Small" ) idealWeight= "152-164"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "160-174"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "168-192"+u; 	 		 	
 	 }else if((height==188)|| (height>=188 && height<190)){
             if(bodyFrameSize=="Small" ) idealWeight= "155-168"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "164-178"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "172-197"+u;	 	
 	 }else if((height==190.5) || (height>=190 && height<193)){
             if(bodyFrameSize=="Small" ) idealWeight= "158-172"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "167-182"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "176-202"+u;	 	
	 }else if(height==193){
             if(bodyFrameSize=="Small" ) idealWeight= "162-176"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "171-187"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "181-207"+u;	
         }else idealWeight="Undefined";
	
                                                           //female
     }else{


    	 if((height==147.3 ) ||(height>=147 && height<149)){
             if(bodyFrameSize=="Small" ) idealWeight= "102-111"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "109-121"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "118-131"+u;
         }else if((height==149.9)|| (height>=149 && height<152)){
             if(bodyFrameSize=="Small" ) idealWeight= "103-113"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "111-123"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "120-134"+u;
         }else if((height==152.4) || (height>=152 && height<154)){
             if(bodyFrameSize=="Small" ) idealWeight= "104-115"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "113-126"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "122-137"+u;
  	 }else if((height==154.9)|| (height>=154 && height<157)){
             if(bodyFrameSize=="Small" ) idealWeight= "106-118"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "115-129"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "125-140"+u;	 	
 	 }else if((height==157.5)|| (height>=157 && height<160)){
             if(bodyFrameSize=="Small" ) idealWeight= "108-121"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "118-132"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "128-143"+u;	 	
 	 }else if((height==160)|| (height>=160 && height<162)){
             if(bodyFrameSize=="Small" ) idealWeight= "111-124"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "121-135"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "131-147"+u;	
 	 }else if((height==162.6)|| (height>=162 && height<165)){
             if(bodyFrameSize=="Small" ) idealWeight= "114-127"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "124-138"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "134-151"+u;	 	
 	 }else if((height==165.1)|| (height>=165 && height<167)){
             if(bodyFrameSize=="Small" ) idealWeight= "117-130"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "127-141"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "137-155"+u;		 	
 	 }else if((height==167.6) || (height>=167 && height<170)){
             if(bodyFrameSize=="Small" ) idealWeight= "120-133"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "130-144"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "140-159"+u;	 		
 	}else if((height==170.2)|| (height>=170 && height<172)){
             if(bodyFrameSize=="Small" ) idealWeight= "123-136"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "133-147"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "143-163"+u;	 	
 	}else if((height==172.7)|| (height>=172 && height<175)){
             if(bodyFrameSize=="Small" ) idealWeight= "126-139"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "136-150"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "146-167"+u;	 		
 	}else if((height==175.3)|| (height>=175 && height<177)){
             if(bodyFrameSize=="Small" ) idealWeight= "129-142"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "139-153"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "149-170"+u;	 	
	}else if((height==177.8)|| (height>=177 && height<180)){
             if(bodyFrameSize=="Small" ) idealWeight= "132-145"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "142-156"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "152-173"+u;	
	}else if((height==180.3)|| (height>=180 && height<182)){
             if(bodyFrameSize=="Small" ) idealWeight= "135-148"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "145-159"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "155-176"+u; 	
 	}else if((height==182.9) || (height>=183)){
             if(bodyFrameSize=="Small" ) idealWeight= "138-151"+u;
             if(bodyFrameSize=="Medium" ) idealWeight= "148-162"+u;
             if(bodyFrameSize=="Large" ) idealWeight= "158-179"+u; 		 	
        }else  idealWeight="Undefined";

     }

   Get("IdealWgtRng").innerHTML = idealWeight;                                                  //7

    

    
    if(document.formFullBody.radioGender[1].checked) //male
    {
     var lMass = (weight * 0.32810) + (height * 0.33929)- 29.5336;

    }else{

     var lMass = (weight * 0.29569) + (height * 0.41813) - 43.2933;

    }


     var leanMass = lMass.toFixed(2);

     Get("LeanMass").innerHTML = leanMass+" kg";                                                       //8

      //Lean mass Percent
      //Lean Mass / Weight

      var lMassPercent = leanMass / weight;
      var leanMassPercent = Math.round(lMassPercent*100);

      Get("LeanPct").innerHTML = ",  "+leanMassPercent+" %";                                                //9





    //BodyFat = Weight - Lean Mass 
     var bFat = weight - leanMass;

     var bodyFat = bFat.toFixed(2);
     var bodyFatPercent = Math.round(100 - leanMassPercent);

      Get("FatMass").innerHTML = bodyFat+" kg";                                                       //10
      Get("BodyFat").innerHTML = ", "+bodyFatPercent+" %";                                                //11

      var RMRDay_temp = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
      var RMRDay =  Math.round(RMRDay_temp);
      var RMRHour_temp = RMRDay/24;
      var RMRHour =  Math.round(RMRHour_temp);

      Get("RMRDay").innerHTML = RMRDay;                                                            //12
      Get("RMRHour").innerHTML = RMRHour;                                                          //13



      var AvgActualMet_perDay_temp = RMRDay * actLevelFactor;
      var AvgActualMet_perDay =  Math.round(AvgActualMet_perDay_temp);

      var AvgActualMet_perHour_temp = AvgActualMet_perDay / 24;
      var AvgActualMet_perHour =  Math.round(AvgActualMet_perHour_temp);

      Get("AvgCalDay").innerHTML = AvgActualMet_perDay;                                               //14
      Get("AvgCalHour").innerHTML = AvgActualMet_perHour;                                             //15



       

    if(document.formFullBody.radioGender[1].checked) //male
    {
      var MHR_bpm = 220 - age;
      var MHR_bper10s = Math.round(MHR_bpm / 6);
    }else{
      var MHR_bpm = 226-age; 
      var MHR_bper10s = Math.round(MHR_bpm / 6);
    }


      Get("MaxHrtRtMin").innerHTML = MHR_bpm;                                               //18
      Get("MaxHrtRtSec").innerHTML = MHR_bper10s;                                             //19



      //Karvonen Target Heart Rate (THR)
      //bpm =  (MHR - RHR) * 70% + RHR thru (MHR - RHR) * 80% + RHR
      //b/10s =	THR (10 Sec) = ((MHR - RHR) * 70% + RHR) / 6 thru ((MHR - RHR) * 80% + RHR) / 6



        var goalFactor1; 
        var goalFactor2;
	if(fitGoal==1){ goalFactor1=50/100; goalFactor2=60/100; }
	else if(fitGoal==2){ goalFactor1=60/100; goalFactor2=70/100; }
	else if(fitGoal==3){ goalFactor1=70/100; goalFactor2=80/100; }
	else if(fitGoal==4){ goalFactor1=80/100; goalFactor2=90/100; }
	else if(fitGoal==5){ goalFactor1=90/100; goalFactor2=100/100; }

  
      var THR_bmp_rangeL = Math.round((MHR_bpm - RHR) * goalFactor1 + RHR);
      var THR_bmp_rangeU = Math.round((MHR_bpm - RHR) * goalFactor2 + RHR);
      var THR_bper10s_rangeL = Math.round(THR_bmp_rangeL / 6); 
      var THR_bper10s_rangeU = Math.round(THR_bmp_rangeU / 6);

      Get("TargetHrtRtMin").innerHTML = THR_bmp_rangeL + ", " +THR_bmp_rangeU;                                //16
      Get("TargetHrtRtSec").innerHTML = THR_bper10s_rangeL+", "+THR_bper10s_rangeU; //17
document.getElementById("divResult").style.display = "block";

}



function checkNum(num) 
{
  var regEx_f = /^((\d+(\.\d*)?)|((\d*\.)?\d+))$/;

        if(!(regEx_f.test(num))) 
        {
          return false;
        }else{
           return true;
        }
}

function logten(v){
	return (Math.log(v)/Math.log(10));
}


$(document).ready(function() {
  //setInitValues();
  });
function tofloat(a)			
{
return parseFloat(a);
}
function clearall()
{
    document.getElementById("divResult").style.display = "none";
}
