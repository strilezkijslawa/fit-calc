function showadd()
{
	if 	(document.myform.age.value == "9" && document.myform.sex[1].checked) {jQuery('#add').show( "fast" );}
	else {
	jQuery('#p').removeAttr('checked');
	jQuery('#l').removeAttr('checked');
	jQuery('#add').hide( "fast" );;
	}	
}

function pl(id)
{
	if (id=="p")  {
	
	jQuery('#l').removeAttr('checked');
	}
	else {}
	if (id=="l") {

	jQuery('#p').removeAttr('checked');
	}
	else {}
}

function show() {
    var el = document.myform.age.value;
	if (el>6) {
	if (document.myform.sex[0].checked) 
		{el = el+"m";}
	else 
		{el = el+"f";}
	}
	else {}	
	if (document.myform.pregnancy.checked) {el = el + "p";}
	if (document.myform.lactation.checked) {el = el + "l";}	
    jQuery('#total div').css('display','none');
	jQuery('#'+el).show( "fast" );
};