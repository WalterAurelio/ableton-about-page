import ableton_logo from '../assets/img/ableton-logo.png';
import { useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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

      {
        isOpen &&
        <div className='mega_menu'>
          <div className='more_on'>
            <h3>More on Ableton.com:</h3>
            <a href="#">Blog</a>
            <a href="#">Ableton for the Classroom</a>
            <a href="#">Ableoton for Colleges and Universities</a>
            <a href="#">Certified Training</a>
            <a href="#">About Ableton</a>
            <a href="#">Jobs</a>
            <a href="#">Apprenticeships</a>
          </div>
          <div className='more_from'>
            <h3>More from Ableton:</h3>
            <div>
              <h4>Loop</h4>
              <p>Watch Talks, Performances and Features from Ableton&apos;s Summit for Music Makers.</p>
            </div>
            <div>
              <h4>Learning Music</h4>
              <p>Learn the fundamentals of music making right in your browser.</p>
            </div>
            <div>
              <h4>Learning Synths</h4>
              <p>Get started with synthesis using a web-based synth and accompanying lessons.</p>
            </div>
            <div>
              <h4>Making Music</h4>
              <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Navbar;