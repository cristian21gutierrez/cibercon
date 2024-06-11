// Acordeon.js
import React, { useState } from 'react';
import AcordeonItem from './AcordeonItem';

const Acordeon = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleItemClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {data.map((item, index) => (
                <AcordeonItem
                    key={index}
                    index={index}
                    isOpen={openIndex === index}
                    onClick={handleItemClick}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    );
};

export default Acordeon;
