import React from 'react';

export default ({icon, title, details}) => {
  const detailsHTML = details.map(
    detail => <div>{detail}</div>
  );

  return (
    <div className="col-md-4 text-center">
      <div className="service-item">
        <i className={`service-icon fa fa-${icon} fa-3x`} />
        <h3>{title}</h3>
        <hr />
        {detailsHTML}
        <p />
      </div>
    </div>
  )
}
