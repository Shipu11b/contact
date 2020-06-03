import React, { Component } from "react";
import PropTypes from "prop-types";

class contactcard extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "Shipu Aashiq ",email:"mshipu143@gmail.com " };
      }
    
  render() {
    return (
      <div className="contact-card">
        <h3>{this.props.name}</h3>
        <p>{this.props.email}</p>
        
      </div>
    );
  }
}

contactcard.propTypes = {
  
  name: PropTypes.string.isRequired,
  students: PropTypes.number.isRequired,
};

export default contactcard;