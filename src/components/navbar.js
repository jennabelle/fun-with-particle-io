import React, { Component } from 'react';

export default class NavBar extends Component  {
	
	render() {
		return (
		<div className="navbar navbar-default navbar-fixed-top">
	  		<div className="container">
	  			<div className="navbar-header">
	  				<a href="" className="navbar-brand">Welcome back, Jenna!</a>

	  				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
	        			<span className="sr-only">Toggle navigation</span>
	        			<span className="icon-bar"></span>
	        			<span className="icon-bar"></span>
	        			<span className="icon-bar"></span>
	      			</button>
	      		</div>
	  			<div className="collapse navbar-collapse">
	  				<ul className="nav navbar-nav navbar-right">
	                    <li className="active"><a href="">Home</a></li>
	  					<li><a href="">Log Out</a></li>
	  				</ul>
	  			</div>
	  		</div>
	  	</div>);
	}
}
