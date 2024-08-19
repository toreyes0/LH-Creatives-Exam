import { useState } from 'react';
import './Header.css';
import logo from './assets/logo.svg'
import iconExternal from './assets/icon-external.svg'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Desktop Layout */}
      <div className='header-desktop'>
        <div className='logo'>
            <img id='logo' src={logo} />
        </div>
        <div className='header-btns'>
          <nav>
            <ul>
              <li><a href='#about'>ABOUT</a></li>
              <li><a href='#service'>SERVICE</a></li>
              <li><a href='#access'>ACCESS</a></li>
              <li>
                <a href='#recruit'>RECRUIT</a>
                <img id='icon-external' src={iconExternal} />
              </li>
            </ul>
          </nav>
          <div className='contact-button'>
            <a href='#contact'>CONTACT</a>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className='header-mobile'>
        <div className='mobile-header'>
          <div className='logo'>
            <img id='logo' src={logo} />
          </div>
          <div className='menu-icon' onClick={toggleMenu}>
              {isMenuOpen ? (
                <span className='material-symbols-outlined close'>close</span>
              ) : (
                <span className='material-symbols-outlined menu'>menu</span>
              )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className='mobile-menu'>
            <ul>
              <li><a href='#about'>ABOUT</a></li>
              <li><a href='#service'>SERVICE</a></li>
              <li><a href='#access'>ACCESS</a></li>
              <li>
                <a href='#recruit'>RECRUIT</a>
                <img id='icon-external' src={iconExternal} />
              </li>
            </ul>
            <div className='contact-button'>
              <a href='#contact'>CONTACT</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
