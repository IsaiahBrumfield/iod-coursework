import React, { useState } from 'react';

const Emoji = () => {
    const [mood, setMood] = useState(happy);

    const toggleMood = () => {
        setMood(!mood);
    };

    return (
        <div>
            <div style={{ fontSize: '50px' }}>
                {mood ? 'happy' : 'sad'}
            </div>

            <button onclick={toggleMood}>
                Change Mood
            </button>
        </div>
    );
};

export default Emoji;