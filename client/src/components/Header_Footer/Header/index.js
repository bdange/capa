import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  render() {
    return (
      <header className='bck_b_light'>
        <div className='container'>
          <div className='left'>
            <div className='logo'>
              flyCapacity <FontAwesomeIcon icon={faPlaneDeparture} />
            </div>
          </div>
          <div className='right'>
            <div className='top'>Links</div>
            <div className='bottom'>Links</div>
          </div>
        </div>
      </header>
    );
  }
}

// const Header = () => {
//   return (
//     <header>
//       <div className='container margin-left'>
//         <h1>
//           flyCapacity <FontAwesomeIcon icon={faPlaneDeparture} />
//         </h1>
//         <h2 className='margin-left'>Ready for take-off!</h2>
//       </div>
//       <div className='container right'>
//         <h1>Add your flight</h1>
//       </div>
//     </header>
//   );
// };

export default Header;
