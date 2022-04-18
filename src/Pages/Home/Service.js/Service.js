import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {serviceName,img,description,fees}=service;
    const navigate=useNavigate();

    const navigateToAvailService=(serviceName)=>{
        navigate(`/services/${serviceName}`);

    }

    return (
        <div>
            <div className="service-container">
                <div className="service-img">
                    <img src={img} alt="service-img" />

                </div>
                <div className="service-description">
                    <h3>{serviceName}</h3>
                    <p><small>{description}</small></p>
                    <h4>${fees}</h4>
                    
                    <button onClick={()=>navigateToAvailService(serviceName)} className='btn btn-danger'>Avail this Service</button>
                </div>
            </div>

            
        </div>
    );
};

export default Service;