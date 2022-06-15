import React, { useState } from 'react';

export const DescriptionCardsOilGas = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
        <br />
        <br />
            <div className="container">
                <div className='section-title gallery'>
                    <h2>WE PROVIDE VARIOUS TRAINING COURSES</h2>
                    <p>
                    Technical education and the improved performance of technicians requires a process <br /> of formal and structured education. Through IESAWs programs new competencies<br />  will be acquired by the trainees and existing abilities and expertise will <br />be enhanced. The levels of skill, knowledge, and competence of students <br /> after they graduate and work in oil industries as technicians is directly<br /> associated with the quality of their educational development program.
                    </p>
                </div>
            </div>
        </>
    );
}
