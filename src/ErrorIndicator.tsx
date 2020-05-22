import React from 'react';
import './ErrorIndicator.css';

type ErrorIndicatorProps = { error: { message?: string, stack?: string, config?: {} } };

const ErrorIndicator: React.FC<ErrorIndicatorProps> = ({ error: { message, stack, config } }) => {
    return (
        <div className="ErrorIndicator">
            <h1>Error happend</h1>
            <h3>{message}</h3>
            <h6>{stack}</h6>
            <p>{JSON.stringify(config, null, 2).slice(1, -1)}</p>
        </div>
    )
}

export default ErrorIndicator;
