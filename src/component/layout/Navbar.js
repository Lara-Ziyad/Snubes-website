import React, {useState} from 'react';
import snubesLogo from '../../img/snubesLogo.png';
const Navbar = () => {

const [nav, setNav] = useState('-100%');

  const openNav = () => (nav === '-100%') ? setNav('0') : setNav('-100%');

    return (
        <nav>
     
        
      <img src={snubesLogo}  alt="pic"
                className="Snubes_logo" />
            <label type="check" className="checkbtn" onClick={openNav}>
        <i className="fas fa-bars"></i>
      </label>
      <ul style={{right:`${nav}`}}>
       
        <li><a href="/">About Us</a></li>
        <li><a href="/">How it works</a></li>
        <li><a href="/">Become a Partner</a></li>
        <li><a href="/">EUR <i className="fa-solid fa-angle-down"></i></a></li>
          <li><a href="/">EN <i className="fa-solid fa-angle-down"></i></a></li>
          <li><a href="/">Sign In</a></li>
          <li><a href="/">Get Access</a></li>
      </ul>
    </nav>

  
    );
};

export default Navbar;