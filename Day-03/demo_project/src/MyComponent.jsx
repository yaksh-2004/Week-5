import React from 'react';

const MyComponent = React.memo(({ prop1, prop2 }) => {
    return (
        <div>
            <p>Prop1: {prop1}</p>
            <p>Prop2: {prop2}</p>
        </div>
    );
});

export default MyComponent;
