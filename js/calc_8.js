function bal()
{
	let wt = document.calc_8.wg.value;
    let op = document.calc_8.opt1.value;

	//If value is not given for weight
	if(wt=="")
	{
		alert("Введите вес");
	}

	//If weight is less than 10
	else if(wt<=10)
	{
		alert("Вес должен быть больше 10 кг");
	}
	
	//If weight is pounds and less than 22lbs
	else if(op=="pounds" && wt<=22)
	{
		alert("Вес должен быть больше 22 фунтов");
	}
	else{
		if(op=="kilograms")
		{
			wt=wt*2.2;
		}
		document.calc_8.r1.value = Math.round((wt/2)*100)/100;
		document.calc_8.r2.value = Math.round((wt*15)*100)/100;
		document.calc_8.r3.value = Math.round((wt/16)*100)/100;
	}
	
}
function unit()  //Weight conversion
{
	var pp = document.calc_8.opt1.value;
	var ww = document.calc_8.wg.value;
	
	//Kilogram to pounds
	if(pp=="pounds")	
	{
		document.calc_8.wg.value = Math.round((ww*2.2)*100)/100;
	}

	//Pounds to kilograms
	else
	{
		document.calc_8.wg.value=Math.round(ww/2.2);
	}
}
	
		


function color(test)
{

	for(var j=2; j<10; j++)
	{
		var myI=document.getElementsByTagName("input").item(j);
		//myI.setAttribute("style",ch);
		myI.style.backgroundColor=test;
	}
}


function color1(test)
{
var myI=document.getElementsByTagName("table").item(0);
//myI.setAttribute("style",ch);
myI.style.backgroundColor=test;
}

function bal1()
{
	var wt = document.calc_8.wg.value;
	var op = document.calc_8.opt1.value;

	//If value is not given for weight
	if(wt=="")
	{
		alert("Enter the weight");
	}

	//If weight is less than 10
	else if(wt<=10)
	{
		alert("The weight must be more than 10 kg");
	}
	
	//If weight is pounds and less than 22lbs
	else if(op=="pounds" && wt<=22)
	{
		alert("The weight must be greater than 22 pounds");
	}
	else{
		if(op=="kilograms")
		{
			wt=wt*2.2;
		}
		document.calc_8.r1.value = Math.round((wt/2)*100)/100;
		document.calc_8.r2.value = Math.round((wt*15)*100)/100;
		document.calc_8.r3.value = Math.round((wt/16)*100)/100;
	}
	
}
