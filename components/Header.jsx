import { useState, useEffect } from 'react';
import '../src/Header.css'

import { ReactComponent as Iconmenu } from '../public/assets/images/Iconmenu.svg';
import { ReactComponent as Iconclose } from '../public/assets/images/Iconclose.svg';
import { ReactComponent as Logo } from '../public/assets/images/logo.svg';

export default function Header() {

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };


  useEffect(() => {
    if (!click) {
        return
    }

    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY  = 'scroll'
    }
}, [click])



  return (
    <header>
        <div className="container">
        <div className="header-logo">
        <Logo/>
        </div>


        <nav className='main-nav'>
          <div className={click ? "bg" : ''}/>
            <ul  className={
              click ? 'navbar_container_menu active ' : 'navbar_container_menu'
            } >
                <li>Home</li>
                <li>News</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
        <button className="navicon" onClick={handleClick}>
            {click ? <Iconclose /> : <Iconmenu />}
          </button>
        </div>
    </header>
  )
}
