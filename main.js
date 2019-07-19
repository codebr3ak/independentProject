function akanName() {
    var input = document.getElementById("result").value;
    var d = new Date(input);
yyyy = d.getFullYear();
mm = d.getMonth();
mm = mm+1;
dd = d.getDate();
var gender= document.querySelector('input[name="Gender"]:checked').value;
var c = (yyyy-1)/100 + 1;
var cc = parseFloat(c);
var day = parseFloat(( ((cc/4) -2*cc-1) + ((5*yyyy/4)) + ((26*(mm+1)/10)) + dd )) % 7;
day = day.toFixed(0);


document.getElementById('akan').innerHTML=akan;
 if (input='' && gender==''){
     alert("enter values for akan");
 }
else if(day == 0 && gender == "Male"){
document.getElementById("akan").innerHTML = "you were born on Sunday your name is kwasi";
}
else if(day == 1 && gender == "Male"){
    document.getElementById("akan").innerHTML = "you were born on Monday your name is Kwadwo";
}
else if(day == 2 && gender == "Male"){
    document.getElementById("akan").innerHTML = "you were born on Tuesday your name is kwabena";
}
else if(day == 3 && gender == "Male"){
    document.getElementById("akan").innerHTML = "you were born on Wednesday your name is Kwaku";
}
else if(day == 4 && gender == "Male"){
    document.getElementById("akan").innerHTML = "you were born on Thursday your name is Yaw";
}
else if(day == 5 && gender == "Male"){
    document.getElementById("akan").innerHTML = "you were born on Friday your name is Kofi";
}
else if(day == 6 && gender == "Male"){
    document.getElementById("akan").innerHTML = "you were born on Saturday your name is Kwame";
}
else if(day == 0 && gender == "Female"){
    document.getElementById("akan").innerHTML = "you were born on Sunday your name is Akosua";
}
else if(day == 1 && gender == "Female"){
    document.getElementById("akan").innerHTML = "you were born on Monday your name is Adwoa";
}
else if(day == 2 && gender == "Female"){
    document.getElementById("akan").innerHTML = "you were born on Tuesday your name is Abenaa";
}
else if(day == 3 && gender == "Female"){
    document.getElementById("akan").innerHTML = "you were born on Wednesday your name is Akua";
}
else if(day == "4" && gender == "Female"){
    document.getElementById("akan").innerHTML = "you were born on Thursday your name is Yaa";
   
}
else if(day == 5 && gender == "Female"){
    document.getElementById("akan").innerHTML = "you were born on Friday your name is Afua";
}
else if(day == 6 && gender == "Female"){
    document.getElementById("akan").innerHTML = "you were born on Saturday your name is Ama";
}

}