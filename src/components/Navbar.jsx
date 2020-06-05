import React from 'react';


   export default () => (
    <div id="nav">
    <nav className="navbar navbar-new" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mobilemenu">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="#" className="navbar-brand">Kovasznai Photo</a>
        </div>
        <div className="collapse navbar-collapse" id="mobilemenu">
          <ol className="nav navbar-nav navbar-right text-center">
            <li><a href="#about"><i className="service-icon fa fa-info" />&nbsp;About me</a></li>
            <li><a href="#services"><i className="fas fa-briefcase" />&nbsp;What I do</a></li>
            <li><a href="#portfolio"><i className="service-icon fa fa-camera" />&nbsp;Portfolio</a></li>
          </ol>
        </div>
      </div>
    </nav>
  </div>	
  )
  