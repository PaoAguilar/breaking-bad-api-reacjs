import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="btn-options">
        <div className="btn-container">
          <Link to="/character" className="btn-character">
            Characters
          </Link>
          <Link to="/episode" className="btn-character">
            Episodes
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
