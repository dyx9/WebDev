import './NavBar.css';
import { MdClose, MdMenu } from 'react-icons/md';
import { useState, useRef } from 'react';

const NavBar = () => {
    const menuRef = useRef(null)
    const [openMenu, setOpenMenu] = useState(false)

    const toggle = () => {
        setOpenMenu(pre => !pre)
        updateClassName()
    }

    const updateClassName = () => {
        if (menuRef.current.className == "menu") {
            menuRef.current.className = 'menu active'
        }
        else{
            menuRef.current.className = 'menu'
        }

    }

  return (
    <nav>
        <ul className="menu" ref={menuRef}>
            <li className="logo"><a href="#">Yixuan's Website</a></li>
            <li className="item"><a href="#">Home</a></li>
            <li className="item"><a href="#">About</a></li>
            <li className="item"><a href="#">Blog</a></li>
            <li className="item"><a href="#">Contact</a></li>
            <li className="item"><a href="#">Log In</a></li>
            <li className="item"><a href="#">Sign Up</a></li>

            <li className="toggle" onClick={toggle}>
                {!openMenu && <a href="#"><MdMenu /></a>}
                {openMenu && <a href="#"><MdClose /></a>}
            </li>

        </ul>
    </nav>
  )
}

export default NavBar