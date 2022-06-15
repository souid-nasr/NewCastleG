import React, { useState } from 'react';

export const DescriptionCards = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
        <br />
        <br />
            <div className="container">
                <div className='section-title gallery'>
                    <h2>CHOESE YOUR PLACE TO STUDY</h2>
                    <p>
                        We offer you academic admission and acceptance of language <br /> institutes in the best universities.
                    </p>
                </div>
            </div>
        </>
    );
}





