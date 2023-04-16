// Write your code here
import './index.css'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

const Header = () => (
  <>
    <nav className="nav-container">
      <Link to="/">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        trigger={
          <button
            data-testid="hamburgerIconButton"
            className="trigger-button"
            type="button"
          >
            <GiHamburgerMenu className="button">
              <IoMdClose className="button" />
            </GiHamburgerMenu>
          </button>
        }
      >
        <div className="popup-container">
          <ul>
            <Link className="elements" to="/">
              <AiFillHome />
              <li>Home</li>
            </Link>
            <Link className="elements" to="/about">
              <BsInfoCircleFill />
              <li>About</li>
            </Link>
          </ul>
        </div>
      </Popup>
    </nav>
  </>
)

export default Header
