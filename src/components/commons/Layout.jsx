import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/breaking-bad.png';
import Header from './Header';
import './layout.scss';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <div className='container'>
          <Link to='/' className='logo-box'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
          <Header />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
