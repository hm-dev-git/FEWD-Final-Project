// console.log(Date.today); 
// interestingly, without the functionCall() it TELLS what it's doing, neat


// var month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


// console.log(Date.prototype.getMonth());

//src: http://jsfiddle.net/dstorey/Xgerq/
var daToday = Date.today(),  //do not need NEW for an actual object
    loc = "en-US";
    
function writeMonth(){
	month = daToday.toLocaleString(loc, { month: "long" });
	// console.log(month);
	$("#title_month").html(month);
}
writeMonth();


function writeDaysOfWeek(){
	console.log(daToday.toLocaleString(loc, { weekday: "short"}));

}
writeDaysOfWeek();