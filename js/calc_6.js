
$(function() {  
    let lang = $('#lang').val();
    switch (lang) {
        case 'en':
            calc_6_text_1 = "Enter Number of Reps";
            calc_6_text_2 = "lbs";
            calc_6_text_3 = "kg";
            calc_6_text_4 = "No. of Reps must be between 1 to 10";
            calc_6_text_5 = "Enter Weight";
            break;
        default:
            calc_6_text_1 = "Введите количество повторений";
            calc_6_text_2 = "фунтов";
            calc_6_text_3 = "кг";
            calc_6_text_4 = "Количество повторений от 1 до 10";
            calc_6_text_5 = "Введите вес";
    }
});


function rnd(ob)
{
return Math.round(1000000*ob) / 1000000;
}

var pre_val=0;
function calculate_calc_6()
{
var a=parseFloat($("#i1").val());
//var b=parseFloat($("#i2").val());
var c=parseInt($("#i3").val());
//var d=parseFloat($("#i4").val());

       if(isNaN(a) || a==0)
        {
        alert(calc_6_text_5);
           
        }
       else if(isNaN(c) || c==0)
        {
                alert(calc_6_text_1);
   
        }
        
        else
        {
        var d=parseFloat($("#i4").val());
        if(d==2)
        {
         $("#i5").empty();
            $("#i5").append("<option value=2>"+calc_6_text_2+"</option><option value=1>"+calc_6_text_3+"</option>");
            pre_val=2;
        }
        
         if(d==1)
        {
         $("#i5").empty();
            $("#i5").append("<option value=1>"+calc_6_text_3+"</option><option value=2>"+calc_6_text_2+"</option>");
        pre_val=1;
        }
       var r=(1.16 *a) + (1.68 *c)
         r=r-1.89
          $("#r1").val(rnd(r));
          
          
        }
}

function bbbb(aa)
{
    var tot=parseInt(aa.value);
    if(tot>10)
    {
        alert(calc_6_text_4 );
        $("#i3").focus();
        
    }
    
}

function changeunit()
{
   var a=parseFloat($("#r1").val());
    var d=parseFloat($("#i5").val());
     var d1=parseFloat($("#i4").val());
     if(a>=0)
     {
        if(d==2 && pre_val==1)
        {
         $("#i5").empty();
            $("#i5").append("<option value=2>"+calc_6_text_2+"</option><option value=1>"+calc_6_text_3+"</option>");
            a=a*2.2046;
             $("#r1").val(rnd(a));
             pre_val=2;
        }
        if(d==1 && pre_val==2)
        {
            $("#i5").empty();
            $("#i5").append("<option value=1>"+calc_6_text_3+"</option><option value=2>"+calc_6_text_2+"</option>");
            a=a/2.2046;
             $("#r1").val(rnd(a));
             pre_val=1;
        }
        
   }
}
