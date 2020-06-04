import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>
      <h1>
        flyCapacity <FontAwesomeIcon icon={faPlaneDeparture} />
      </h1>
    </div>
  );
};

export default Header;
