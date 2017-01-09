import React, { PropTypes } from 'react';

const MainViewMarkup = ({ text, addBodyText, removeBodyText }) => (
  <div className="main">
    <h1>Application</h1>
    <section className="text">
      {text.map((text, index) => <p key={index}>{text}</p>)}
    </section>
    <button className="add-text" onClick={addBodyText}>
      Do The Thing
    </button>
    <button className="add-text" onClick={removeBodyText}>
      Undo The Thing
    </button>
  </div>
);

export default MainViewMarkup;
