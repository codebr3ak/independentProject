var dd = parseInt(prompt("enter the date"));
var mm  = parseInt(prompt("enter month"));
var yyyy = parseInt(prompt("enter year"));
var gender = prompt("enter gender");
var c = (yyyy-1)/100 + 1;
var cc = parseFloat(c);
var day = parseFloat(( ((cc/4) -2*cc-1) + ((5*yyyy/4)) + ((26*(mm+1)/10)) + dd )) % 7;
var day = (day.toFixed(0));
if (day == 0 && gender == 'male') {
  alert("Kwasi");
} 
else if (day== 1 && gender == 'male') {
alert(" Kwadwo");
}
else if (day==2 && gender == 'male') {
  alert("kwabena");
}
else if (day==3 && gender == 'male') {
  alert("Kwaku");
}
else if (day == 4 && gender == 'male') {
  alert("Yaw");
}
else if (day == 5 && gender == 'male') {
  alert("Kofi");
}
else if (day == 6 && gender == 'male') {
    alert("kwame");
  }
  else if (day == 0 && gender == 'female') {
    alert("Akosua");
  }
  else if (day == 1 && gender == 'female') {
    alert("Adwoa");
  } 
  else if (day == 2 && gender == 'female') {
    alert("Abenaa");
  } 
  else if (day == 3 && gender == 'female') {
    alert("Akua");
  } 
  else if (day == 4 && gender == 'female') {
    alert("Yaa");
  } 
  else if (day == 5 && gender == 'female') {
    alert("Afua");
  }
  else if (day == 6 && gender == 'female') {
    alert(" Ama");
  }