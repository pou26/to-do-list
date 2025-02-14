
function CrayonEffectSVG() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <filter id="crayon-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    );
  }
  
  export default CrayonEffectSVG;
  