 var s = /Antoine/gi;
var a = /Arpi/gi
function replacer() {
   
    var str = document.getElementById("rep").innerHTML;
    var newstr = str.replace(s, "<span style = 'color:red'>Arpi</span>");
    document.getElementById("rep").innerHTML = newstr;

}

function replacer1() {
    
    var str1 = document.getElementById("rep").innerHTML;
    var newstr1 = str1.replace(a, "<span style = 'color:blue'>Antoine</span>");
    
    document.getElementById("rep").innerHTML = newstr1;

}
