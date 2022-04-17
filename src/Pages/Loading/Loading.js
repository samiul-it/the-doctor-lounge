import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
      <div>
        <Spinner animation="border" size="lg" />
      </div>
    );
};

export default Loading;