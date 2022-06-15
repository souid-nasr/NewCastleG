import React, { useState } from 'react';

export const DescriptionCardsBlogs = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
        <br />
        <br />
            <div className="container">
                <div className='section-title gallery'>
                    <h2>CHOESE YOUR PLACE TO STUDY</h2>
                    <p>We offer you academic admission and acceptance of language institutes in the best universities.</p>
                </div>
            </div>
        </>
    );
}
