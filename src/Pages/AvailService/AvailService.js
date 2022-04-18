import React from 'react';
import { useParams } from 'react-router-dom';

const AvailService = () => {
    const {serviceName}=useParams();
    return (
        <div>
            <h1>Welcome to {serviceName}</h1>
        </div>
    );
};

export default AvailService;