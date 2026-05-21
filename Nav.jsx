import { useState, useEffect } from 'react'
import hamburger from './assets/hamburger.png'
import close from './assets/close.png'

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const openMenu  = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className={`navigation-bar ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navi">
          <div className="logo">Simo RadicaL Engineer</div>

          {/* Desktop links */}
          <div className="link-wrapper">
            <ul className="links">
              <li><a href="#" className="link-anim" data-text="about"   ><span>about</span></a></li>
              <li><a href="#" className="link-anim" data-text="projects"><span>projects</span></a></li>
              <li><a href="#" className="link-anim" data-text="work"    ><span>work</span></a></li>
              <li><a href="#" className="link-anim" data-text="contact" ><span>contact</span></a></li>
              <li><a href="#" className="link-anim" data-text="menu"    ><span>menu</span></a></li>
            </ul>
          </div>

          {/* Close button — hidden until menu is open */}
          <div
            className={`closebuttn ${menuOpen ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <div className="close">
              <img src={close} alt="close menu" />
            </div>
          </div>

          {/* Hamburger — hidden when menu is open */}
          <div
            className={`nav-action ${menuOpen ? 'hidden' : ''}`}
            onClick={openMenu}
          >
            <div className="menu_line">
              <img src={hamburger} alt="open menu" />
            </div>
          </div>

        </nav>
      </div>

      {/* Mobile slide-in drawer */}
      <div className={`nav-drawer ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li><a href="#" onClick={closeMenu}>about</a></li>
          <li><a href="#" onClick={closeMenu}>projects</a></li>
          <li><a href="#" onClick={closeMenu}>work</a></li>
          <li><a href="#" onClick={closeMenu}>contact</a></li>
          <li><a href="#" onClick={closeMenu}>menu</a></li>
        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`nav-overlay ${menuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />
    </>
  )
}

export default Nav
