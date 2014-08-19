//src: http://jsfiddle.net/dstorey/Xgerq/
var daToday = new Date.now(),
    loc = "en-US";
    
function writeMonth(){
	monthFull = daToday.toLocaleString(loc, { month: "long" });
	$("#title_month").html(monthFull);
}

function writeDaysOfWeek(){
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