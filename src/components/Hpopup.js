import React from "react";
import '../index.css'

const Hpopup = ({ feature }) => {

  return (
    <div className='popup'>
      <div className="popupTitle">
        {feature.properties.School_Name}
      </div>
      <div className="popupText">
        {feature.properties.Denomination}
      </div>
    </div>
  );
};

export default Hpopup;
