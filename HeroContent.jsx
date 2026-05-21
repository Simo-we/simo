
function HeroContent() {
  return (
    <div className="Hero-content">

      <div className="title-block">
        <span className="word-visionary">Visionary</span>
        <span className="word-electromechanical">Electromechanical</span>
        <span className="word-engineer">Engineer</span>
        <span className="word-simo">— Simo</span>
      </div>

      <div className="divider-line"></div>

      <p className="paragraph">
        There are engineers, and then there are architects of possibility.
        Simon belongs unmistakably to the latter — walking the threshold
        where electrons meet gears, and circuits meet motion.
      </p>

      <button className="buttn">
        <span className="spn">View my work</span>
        <span className="btn-arrow">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
            stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4"/>
          </svg>
        </span>
      </button>

    </div>
  );
}

export default HeroContent;