import React from 'react';
import useServices from './../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services,setServices]=useServices();
    return (
      <div>
          <h3 className='text-primary'>Our Services ({services.length})</h3>
        <div className="services-card-container">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;