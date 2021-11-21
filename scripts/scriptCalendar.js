		var dateHTML = document.getElementById('date');
    var prevEl = document.getElementById('prev');
		var nextEl = document.getElementById('next');
		var deferentMonth = 0;
    var deferentYear = 0;


    var MONTH = ["January", "February", "March", "April", 
    "May", "June", "July", "August", "September", "October", "November", "December"];

    var cd = new Date();

		var currentDate = cd;

		createCalendar("calendar", currentDate.getFullYear(), currentDate.getMonth()+1+deferentMonth);

		prevEl.addEventListener('click', prev);
		nextEl.addEventListener('click', next);
		function prev() {
      if (currentDate.getMonth()+1+deferentMonth<=1) {
        deferentMonth = 0;
         currentDate = new Date(currentDate.getFullYear()-1, 11);
      } else {deferentMonth--;}

			createCalendar("calendar", currentDate.getFullYear(), currentDate.getMonth()+1+deferentMonth);
		}
		function next() {
       if (currentDate.getMonth()+1+deferentMonth>=12) {
        deferentMonth = 0;
        currentDate = new Date(currentDate.getFullYear()+1, 0);
      } else {deferentMonth++;}

			createCalendar("calendar", currentDate.getFullYear(), +(+currentDate.getMonth()+1+deferentMonth));
		}


 function createCalendar(id, year, month) {

    dateHTML.innerHTML = MONTH[month-1] + " " + year;

      var elem = document.getElementById(id);

      var mon = month - 1;
      var d = new Date(year, mon);

      var table = '<table class=\'calendarTable\'><tr><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th><th>Su</th></tr><tr>';

      for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
      }

      while (d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) {
          table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
      }

      if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
          table += '<td></td>';
        }
      }

      table += '</tr></table>';

      elem.innerHTML = table;

      let da = new Date();
      let td = document.querySelectorAll(".calendarTable td")
      if ((da.getFullYear() == year) && (da.getMonth()+1 == month))
      for (var i = td.length - 1; i >= 0; i--) {
        if (td[i].innerHTML == da.getDate()) {
          td[i].style.backgroundColor = '#055555';
          td[i].style.color = "#fff";
        }
      }
    }

    function getDay(date) {
      var day = date.getDay();
      if (day == 0) day = 7;
      return day - 1;
    }



   