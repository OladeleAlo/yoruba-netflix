import "./navbar.css"
import {useState} from 'react';
import {BsSearch} from "react-icons/bs";
import {IoIosNotifications} from "react-icons/io";
import {BsFillCaretDownFill} from "react-icons/bs";

const NavBar = () => {
  const [isScrolled,setIsScrolled]  = useState(false);
  window.onscroll = ()=> {
    setIsScrolled(window.pageYOffset === 0 ? false :true);
    return ()=> (window.onscroll = null);
  }
  return (
    <div className={isScrolled ? "navbar scrolled": "navbar"}>
        <div className="containers">
            <div className="left">
              <img className="pimag" src="https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm" alt=""/>
              <span>Homepage</span>
              <span>Series</span>
              <span>Movies</span>
              <span>New and Popular</span>
              <span>My List</span>
            </div>
            <div className="right">
              <BsSearch className="icon"/>
              <span>KIDS</span>
              <IoIosNotifications className="icon"/>
              <img className="pimag" src="https://i.ytimg.com/vi/YjBiwXBNfwQ/maxresdefault.jpg" alt="" />
              <div className="profile">
                <BsFillCaretDownFill className="icon"/>             
                <div className="options">                
                  <span>Settings</span>
                  <span>Logout</span>            
                </div>
              </div>           
            </div>
        </div>
    </div>
    
  )
}

export default NavBar;