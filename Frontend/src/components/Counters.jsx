import CountUp from 'react-countup';

export const Counters = (props) => {
  return (
      <>
      <div className="counters">
       <div className="container counter-section">
           <div className="row text-center counters-side">
             
               <div className="col-md-3 counter-box">
                <div className="icon-box">
                <i className="fa fa-university" aria-hidden="true"></i>
                 </div>
                   <p className="counter" ><CountUp start={0} end={80} duration={10} className="counter"  /></p>
                   <p>Universites</p>
               </div>

               <div className="col-md-3 counter-box">
                <div className="icon-box">
                <i className="fa fa-language" aria-hidden="true"></i>
                 </div>
                   <p className="counter"><CountUp start={0} end={120} duration={10} className="counter" /></p>
                   <p>Language institution</p>
               </div> 

               <div className="col-md-3 counter-box">
                <div className="icon-box">
                <i className="fa fa-users" aria-hidden="true"></i>
                 </div>
                   <p className="counter"><CountUp start={0} end={100} duration={10} className="counter" /></p>
                   <p>Student</p>
               </div>

               
               <div className="col-md-3 counter-box">
                <div className="icon-box">
                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                 </div>
                   <p className="counter"><CountUp start={0} end={150} duration={10} className="counter" /></p>
                   <p>Graduates</p>
               </div>

           </div>
       </div>
       </div>
      </>
  );
};
