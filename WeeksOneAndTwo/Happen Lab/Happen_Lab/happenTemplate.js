var library = (function() {
	var monthNum = new Date().getMonth()+1;
	var dateMonth = new Date().getDate();
	/* number of days */
	var dateOfYear = new Date().getFullYear();
	var dayOfWeekArray = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
	var monAbrArray = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var monArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	var dayOfWeek = new Date().getDay();
	var today = dayOfWeekArray[dayOfWeek];
	var hours = new Date().getHours();
	var minutes = new Date().getMinutes();
	var seconds = new Date().getSeconds();
	var ampm = (hours >= 12)? 'PM': 'AM';
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			var timeStampUnix = new Date().getTime();
			return String(Math.floor(timeStampUnix/1000));
		},
		UnixMillisecond: function(){
			var timeStampUnix = new Date().getTime()
			return String(timeStampUnix);
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
				 var hour = new Date().getHours();
				var ampm = (hour >= 12)? 'PM': 'AM';
					if (hour > 12){
						var hour = hour - 12;
					}
					var stringHour = String(hour);
				var minute = new Date().getMinutes();
					if (minute < 10){
						var stringMinute = String("0" + minute);
					}else{
						var stringMinute = String(minute);
					}
				var second = new Date().getSeconds();
					if (second < 10){
						var stringSecond = String("0" + second);
					}else{
						var stringSecond = String(second);
					}
				return stringHour + ":" + stringMinute + ":" + stringSecond+ " " + ampm;
			  },
	   	    WithOutSeconds: function() {
				   var hour = new Date().getHours();
					var ampm = (hour >= 12)? 'PM': 'AM';
						if (hour > 12){
							var hour = hour - 12;
					}
					var stringHour = String(hour);
					var minute = new Date().getMinutes();
						if (minute < 10){
							var stringMinute = String("0" + minute);
						}else{
							var stringMinute = String(minute);
					}

				return stringHour + ":" + stringMinute + " " + ampm;
				   
			   }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
								return String(monthNum + "/" + dateMonth + "/" + dateOfYear);
			},
			Name: function(){
								return String(monArray[monthNum - 1] + " " + dateMonth + ", " + dateOfYear);
			}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
				return String(seconds)
			},
			DblDigit: function(){
				if (seconds < 10){
							return String("0" + seconds);
						} else {
							return String(seconds);
						}
			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				return String(minutes)
			},
			DblDigit: function(){
				if (minutes < 10){
							return String("0" + minutes);
						} else {
							return String(minutes);
						}
			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				return String(hours);
			},
			TwelveHour: function() {
				if(hours > 12) {
					return String(hours -12);
				} else {
					return String(hours);
				}
				
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						var amPm = (hours >= 12)? 'PM': 'AM';
						return String(amPm);
					},
					LowerCase: function(){
						var amPmL = (hours >= 12)? 'pm': 'am';
						return String(amPmL);
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				return String(today);
			},
			AbrDayOfWeek: function(){
				return today.substring(0,3);
			},
			FirstTwoOfWeek: function(){
				return today.substring(0,2);
			},
			WeekOfYear: function(){
				var now = new Date();
                       var start = new Date(now.getFullYear(), 0, 0);
                       var diff = now - start;
                       var oneWeek = 1000 * 60 * 60 * 24 * 7;
                       var week = Math.floor(diff/oneWeek + 2);
                       return String(week);
			}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						return String(dateMonth);
					},
					Ordinal: function(){
						switch (dateMonth) {
                         case 1: + dateMonth + "st";
                         case 2: + dateMonth + "nd";
                         case 3: + dateMonth + "rd";
                         default: return + dateMonth + "th";
                        }
					},
					DateDblDigit: function(){
						if (dateMonth < 10){
							return String("0" + dateMonth);
						} else {
							return String(dateMonth);
						}
					}
				}
			})(),
			MonthNumber: function(){
				var myMonth = new Date().getMonth() +1;
				return String(myMonth);
			},
			MonthNumberDblDigit: function(){
				var myDblDigit = new Date().getMonth() +1;
				if (myDblDigit < 10){
					return String("0" + myDblDigit);
					
				} else {
					return String(myDblDigit);
				}
				
			},
			AbrOfCurrentMonth: function(){
				return monAbrArray[monthNum - 1];
			},
			CurrentMonth: function(){
				var monArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
				return monArray[monthNum - 1];
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
						var now = new Date();
						var start = new Date(now.getFullYear(), 0, 0);
						var diff = now - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var day = Math.floor(diff / oneDay);
						return String(day);
					},
					Ordinal: function(){
						var now = new Date();
						var start = new Date(now.getFullYear(), 0, 0);
						var diff = now - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var day = Math.floor(diff / oneDay);
						 switch (day.toString[day.length -1]) {
                           case 1: + day + "st";
                           case 2: + day + "nd";
                           case 3: + day + "rd";
                           default: return + day + "th";
						 }
						return String(day);
					}
				}
			})(),
			YearFull: function(){
				return String(dateOfYear);
			},
			
			YearAbr: function(){
				return dateOfYear.toString().substr(2);
			}
		}
	})(),
	Defaults: function(){
		var myMonthNumberDblDigit = monthNum;
						if (myMonthNumberDblDigit < 10) {	
						var stringMyMonthDblDigit = String('0' + myMonthNumberDblDigit);
					} else {
						var stringMyMonthDblDigit = String(myMonthNumberDblDigit);
					}
					var myDateDblDigit = dateMonth;
						if (myDateDblDigit < 10) {	
						var stringMyDateDblDigit = String('0' + myDateDblDigit);
					} else {
						var stringMyDateDblDigit = String(myDateDblDigit);
					}
					var hour = new Date().getHours();
						if (hour < 10){
							var stringHour = String("0" + hour);
						}else{
							var stringHour = String(hour);
						}
					var minute = new Date().getMinutes();
						if (minute < 10){
							var stringMinute = String("0" + minute);
						}else{
							var stringMinute = String(minute);
						}
					var second = new Date().getSeconds();
						if (second < 10){
							var stringSecond = String("0" + second);
						}else{
							var stringSecond = String(second);
						}
		return String(dateOfYear) + "-" + stringMyMonthDblDigit + "-" +stringMyDateDblDigit + "T" + stringHour + ":" + stringMinute + ":" + stringSecond;
	}
  }
})();