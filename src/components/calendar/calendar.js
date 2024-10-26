import React from 'react';
import "./calendar.css";

function Calendar() {
	return(
		<br><br>
		<h1 id="disclaimer">**  Disclaimer:  Calendar might not be 100% accurate and subject to change.  Please call 724-735-4646 to ensure availability.</h1>
		<br><br><br>
		<iframe id="calender" src="https://www.google.com/calendar/embed?src=harrisvillevfc%40gmail.com&ctz=America/New_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
		<br><br><br>
	);
};

export default Calendar;