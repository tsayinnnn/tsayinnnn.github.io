
import React from 'react';
import './Proj2.css'; 

import img4 from '/src/assets/apps/4.png';
import img5 from '/src/assets/apps/5.png';
import img6 from '/src/assets/apps/6.png';
import img7 from '/src/assets/apps/7.png';

const cardData = [
  { id: 'c1', image: img4 },
  { id: 'c2', image: img5 },
  { id: 'c3', image: img6 },
  { id: 'c4', image: img7 },
];

function ProjectSlider() {
  return (
    <section id="projects" className="slider-section">
      <div className="container">
        {cardData.map((card, index) => (
          <React.Fragment key={card.id}>
            <input
              type="radio"
              name="slide"
              id={card.id}
              defaultChecked={index === 0}
            />
            <label
              htmlFor={card.id}
              className="card"
              style={{ backgroundImage: `url(${card.image})` }}
            ></label>
          </React.Fragment>
        ))}
      </div>
      <div className="text-container">
        <h3 className="branding-title">BRANDING DESIGNS</h3>
        <p className="branding-description">
          A company is what it does. A brand is who it is. These are the
          identities I've helped build from the ground up.
        </p>
      </div>
    </section>
  );
}

export default ProjectSlider;