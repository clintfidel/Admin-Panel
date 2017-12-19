import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render () {
    return (
			<div className="Jumbotron">
			<h1>Admin Panel</h1>
			<h2>welcome to the admin panel homepage</h2>
			<Link to="about" className="btn btn-primary btn-large">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
