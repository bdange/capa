import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <div className='container margin-left'>
        <h1>
          flyCapacity <FontAwesomeIcon icon={faPlaneDeparture} />
        </h1>
        <h2 className='margin-left'>Ready for take-off!</h2>
      </div>
      <div className='container right'>
        <h1>Add your flight</h1>
      </div>
    </header>
  );
};

export default Header;
