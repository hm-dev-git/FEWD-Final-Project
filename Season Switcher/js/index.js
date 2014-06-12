// console.log(Date.today); 
// interestingly, without the functionCall() it TELLS what it's doing, neat


// var month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


// console.log(Date.prototype.getMonth());

//src: http://jsfiddle.net/dstorey/Xgerq/
var daToday = new Date.now(),
    loc = "en-US";
    
function writeMonth(){
	monthFull = daToday.toLocaleString(loc, { month: "long" });
	console.log(monthFull); 
	$("#title_month").html(monthFull);
}



function writeDaysOfWeek(){
	// console.log(daToday.toLocaleString(loc, { weekday: "short"}));
	for (var i = 0; i < 7; i++) {
		var dateTrack = daToday;
		var wkDay = daToday.toLocaleString(loc, { weekday: "short"});
		$('#'+wkDay).html(dateTrack.getDate());

		if (wkDay == "Sat") {
			dateTrack.addDays(-6);
		} else {
			dateTrack.addDays(1);
		}

	}
}


writeMonth();
writeDaysOfWeek();