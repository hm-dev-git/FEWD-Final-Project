// console.log(Date.today); 
// interestingly, without the functionCall() it TELLS what it's doing, neat


// var month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


// console.log(Date.prototype.getMonth());

//src: http://jsfiddle.net/dstorey/Xgerq/
var dateToday = new Date.today(),
    locale = "en-us",
    month = dateToday.toLocaleString(locale, { month: "long" });


function writeMonth(){
	console.log(month);
	$("#title_month").html(month);
}
writeMonth();