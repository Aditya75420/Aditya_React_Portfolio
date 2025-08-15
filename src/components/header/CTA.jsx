import React from 'react';
// import CV from '../../assets/aditya_cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={"/aditya_cv.pdf"} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
