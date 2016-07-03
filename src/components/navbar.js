import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component  {
	
	render() {
		return (
		<div className="navbar navbar-inverse navbar-fixed-top navBarStyle">
	  		<div className="container">
	  			<div className="navbar-header">
	  				<span>
	  				<Link to="/" className="navbar-brand">
	  					<img src="http://punchcard.io/wp-content/uploads/2016/04/icon-particle.svg" className="icon-particle" />
	  				</Link></span>

	  				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
	        			<span className="sr-only">Toggle navigation</span>
	        			<span className="icon-bar"></span>
	        			<span className="icon-bar"></span>
	        			<span className="icon-bar"></span>
	      			</button>
	      		</div>
	  			<div className="collapse navbar-collapse">
	  				<ul className="nav navbar-nav navbar-right">
	                    <li className="active"><Link to="/">HOME</Link></li>
	  					<li><Link to="/">LOG OUT</Link></li>
	  				</ul>
	  			</div>
	  		</div>
	  	</div>);
	}
}
