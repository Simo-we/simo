import { useState, useEffect } from 'react'

function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

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

  // Lock body scroll when menu is open (replaces body.classList.add('menu-open'))
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
            <ul className="links" id="nav-menu">
              <li><a href="#" className="link-anim" data-text="about"    onClick={closeMenu}><span>about</span></a></li>
              <li><a href="#" className="link-anim" data-text="projects" onClick={closeMenu}><span>projects</span></a></li>
              <li><a href="#" className="link-anim" data-text="work"     onClick={closeMenu}><span>work</span></a></li>
              <li><a href="#" className="link-anim" data-text="contact"  onClick={closeMenu}><span>contact</span></a></li>
              <li><a href="#" className="link-anim" data-text="menu"     onClick={closeMenu}><span>menu</span></a></li>
            </ul>
          </div>

          {/* Hamburger button — only visible on mobile via CSS */}
          <button
            id="menu-line"
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={openMenu}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${menuOpen ? 'active' : ''}`} id="nav-menu-mobile">
        <button id="close-btn" className="close-btn" onClick={closeMenu} aria-label="Close menu">
          ✕
        </button>
        <ul className="nav-list">
          <li><a href="#" className="link-anim" data-text="about"    onClick={closeMenu}><span>about</span></a></li>
          <li><a href="#" className="link-anim" data-text="projects" onClick={closeMenu}><span>projects</span></a></li>
          <li><a href="#" className="link-anim" data-text="work"     onClick={closeMenu}><span>work</span></a></li>
          <li><a href="#" className="link-anim" data-text="contact"  onClick={closeMenu}><span>contact</span></a></li>
          <li><a href="#" className="link-anim" data-text="menu"     onClick={closeMenu}><span>menu</span></a></li>
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