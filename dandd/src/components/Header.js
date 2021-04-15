import React, {Component} from 'react';
import delivery from '../assets/images/delivery.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={delivery} className="App-logo" alt="logo" />
        <p className="title">
          DandD
        </p>
      </header>
    );
  }
}
export default Header;
