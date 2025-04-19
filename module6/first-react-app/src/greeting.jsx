import React from "react";

const Greeting = ({name, children }) => {
    const greetingMessage = name ? `Hello ${name}` : 'Hello World';

    return (
        <div>
            {children ? children : greetingMessage}
        </div>
    );
};

export default Greeting;