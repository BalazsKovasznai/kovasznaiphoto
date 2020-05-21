import React from 'react';
import ServiceCard from "./ServiceCard";

export default () => (
  <div id="services" className="services">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-md-offset-4 text-center">
          <h2>What I do</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <ServiceCard 
          icon="camera-retro"
          title="Portrait"
          details={["Portrait", "Glamour", "Nude", "Fashion"]}
        />
        <ServiceCard 
          icon="camera"
          title="Sport"
          details={["Action", "Motorsports", "Teamsports", "Individual Sports"]}
        />
        <ServiceCard 
          icon="globe"
          title="Event"
          details={["Concerts", "Teambuildings", "Sport events", "Family events"]}
        />
      </div>
    </div>
  </div>
)
