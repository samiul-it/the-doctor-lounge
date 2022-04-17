import React from 'react';
import patientCareImg from '../../../Resources/Images/patient-care.jpg';
import './Description.css';

const Description = () => {
    return (
        <div>
            <div className="description-container">
                <div className="description-text">
                    <h1 className='text-primary'>Why us?</h1>
                    <p className='text-description'>Our doctor has specialist degree on Skin care and Ultrasonography.Provides special service to the patients.The Doctor loung is a complete solution for the Dermatology patients.Here you will be able to do all kinds of skin screening.Also provides Ultrasonography with high quality equipments.</p>

                </div>
                <div className="description-image">
                    <img src={patientCareImg} alt="patient-care-show" />

                </div>
            </div>
        </div>
    );
};

export default Description;