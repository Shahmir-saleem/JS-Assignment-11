// TASK-2


function tellTime() {



    var now = new Date();
 var them = now.getMonth();
 var thed = now.getDay();
 var they = now.getFullYear();
 document.write(+ them  +  "   / " + thed + "  / " + they );
document.write('<br>');
 var now = new Date();
 var theHr = now.getMonth();
 var theMin = now.getDay();
 var thesec = now.getFullYear();
 document.write(+ theHr  +  "   - " + theMin + "  - " + thesec  );
};
tellTime()