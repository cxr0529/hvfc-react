import React from 'react';
import "./history.css";

function History() {
	return (
		<>
		<h1 id="history">History</h1>
		<p>The first meeting to establish the Harrisville Volunteer Fire Department was held on September 8, 1938.</p>
		<img id="firstMinutes" src={'images/history/FirstMinutes.jpg'} alt="Picture of the First Minutes"/>
		<p>The Harrisville Volunteer Fire Deptartment was founded in October 1938.</p>
		<img src={'images/history/FireDeptSign.jpg'} alt="Old Fire Deptartment Sign"/>
		<p>We celebrated our 75 Anniversary in October 2013.</p>
		<img src={'images/history/75thAnniversary.jpg'} alt="75th Anniversary Member Photo"/>
		<p>HVFC covers 13.6 square miles consisting of the Harrisville Boro and Mercer Township.</p>
		<img id="mercertwp" src={'images/history/MercerTwp.jpg'} alt="Map of Mercer Twp"/>
		<p>We run approximately 300 calls per year. Among those are: Fires(residential, commercial, brush, etc.), Vehicile accidents and traffic control as well as providing non-emergency services (flooded basements, trees down across roadways, etc.). We also assist neighboring companies from Mercer, Venango and Butler counties when needed.</p>
		<br/><br/><br/>
		</>
	);
}

export default History;