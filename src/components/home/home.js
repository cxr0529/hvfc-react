import React from 'react';
import "./home.css";

function Home() {
	return (
		<>
		<h1 id="welcome">Harrisville Vol Fire Company</h1>
		<img class="img-fluid" src={'../src/images/newHall.JPG'} alt="New Hall" id="hallPic"/>
		<h2 id= "welcome">Celebrating 86 years of service</h2><br/><br/>
		<div class= "container">
			<div class= "row">
				<section class="col-sm-12 col-md-6 col-lg-6" id="address">
					<span>Address:</span><br/>
		          	313 Mercer Road<br/>
		          	Harrisville, PA 16038<br/><br/>
		          	<span>Phone Number:</span><br/>
		          	724-735-4646
				</section>
				<section id="map" class="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center">
		        	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.8804508030794!2d-80.00932932395305!3d41.13713567133262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88337362cd446e5b%3A0xbd83e65754f70ad4!2sHarrisville%20Volunteer%20Fire%20Company!5e0!3m2!1sen!2sus!4v1725391851535!5m2!1sen!2sus" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		        </section>
			</div>
		</div>
		</>
	);
}

export default Home;