import ableton_logo from '../assets/img/ableton-logo.png';
import { useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar'>
      <h1>
        <a
          href='#'
          className='anchor_logo'
        >
          <img
            className='imagen_logo'
            src={ableton_logo}
            alt='ableton_logo'
          />
        </a>
      </h1>

      <ul className='list uno'>
        <li>
          <a href='#'>Live</a>
        </li>
        <li>
          <a href='#'>Push</a>
        </li>
        <li>
          <a href='#'>Link</a>
        </li>
        <li>
          <a href='#'>Shop</a>
        </li>
        <li>
          <a href='#'>Packs</a>
        </li>
        <li>
          <a href='#'>Help</a>
        </li>
        <li>
          <p
            onClick={() => setIsOpen(!isOpen)}
            className={`more_button ${ isOpen ? 'naranja' : '' }`}
          >
            More {isOpen ? <BiMinus /> : <BiPlus />}
          </p>
        </li>
      </ul>

      <ul className='list dos'>
        <li>
          <a href='#'>Try Live for free</a>
        </li>
        <li>
          <a href='#'>Account</a>
        </li>
        <li>
          <a href='#'>Logout</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;