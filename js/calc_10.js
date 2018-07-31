function cal_proportion(neck, shoulder, ham, shank){

   proportion = Math.round(ham*100/(neck*1+shoulder*1+shank*1));

   return proportion;
}

function calc10(){
   var f = document.calc_10;

   a = f.neck.value;
   b = f.shoulder.value;
   c = f.ham.value;
   d = f.shank.value;

   // Do validation checking to ensure existence of values

   if (!chkw(a)){
     alert("Пожалуйста, корректно введите окружность шеи.");
     f.neck.focus();
     return;
   }
   if (!chkw(b)){
     alert("Пожалуйста, корректно введите окружность плеча.");
     f.shoulder.focus();
     return;
   }
   if (!chkw(c)){
     alert("Пожалуйста, корректно введите обхват бедра.");
     f.ham.focus();
     return;
   }
   if (!chkw(d)){
     alert("Пожалуйста, корректно введите окружность голени.");
     f.shank.focus();
     return;
   }

   f.proportion.value = cal_proportion(a,b,c,d);
   f.proportion.focus();
}
function chkw(w){
  // if (isNaN(parseInt(w))){
   if (isNaN(w)){
	  return false;
   } else if (w < 10){
  return false;
  }
  else{
  return true;
  }
}