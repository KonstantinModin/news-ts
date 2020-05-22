import React from 'react';

const ErrorIndicator = ({ error }: { error: { message?: string, stack?: string } }) => {
    console.log('ind', error.message)
    return (
        <div>
            <h1>Error happend</h1>
            <h3>{error.message}</h3>
            <h6>{error.stack}</h6>
        </div>
    )
}

export default ErrorIndicator;
