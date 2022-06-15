import React, { useState } from 'react';

export const ContactInstitution = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
        <br />
        <br />
            <div className="container">
                <div className='section-title gallery'>
                    <h2>CONTACT US</h2>
                    <p>It would be great to hear from you! Just drop us a line and ask  for anything <br /> with which you think we could be helpful. We are looking forward<br /> to hearing from you! .</p>
                </div>
            </div>
        </>
    );
}

