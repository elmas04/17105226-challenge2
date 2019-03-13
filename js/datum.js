	//Datum Engels
var datum=document.getElementById('datum');

function toDay(){
	 var date= new Date();
	 var year=date.getYear();
		if(year < 1000){
			year +=1900
		}
	var day		=date.getDay();
	var month	=date.getMonth();
	var daym	=date.getDate();
	var dayarray=new Array("Sun", "Mon", "Tue","Wed","Thu","Fri", "Sat");
var montharray	= new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
 
  var dateStr = dayarray[day]+ ' , ' + daym + '  ' + montharray[month] + '  ' + year;
datum.textContent = dateStr
	}

toDay();
setInterval(toDay, 1000);
