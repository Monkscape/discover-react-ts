import React from 'react';

// Doesn't need a specific name
interface GreeterFunctionalProps {
    company: string
}

const GreeterFunctional = ({company}: GreeterFunctionalProps) => {
    return (
        <p>Greetings from {company}</p>
    )
}

// const GreeterFunctional = () => <>Greet!</>

export default GreeterFunctional;