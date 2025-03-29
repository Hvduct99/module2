var curDate = new Date();

var time = curDate.getHours();

if(time < 10) {
    greeting = "good morning";
}else if (time < 20) {
    greeting = "good day";
}else {
    greeting = "Good evening";
}

alert(greeting);