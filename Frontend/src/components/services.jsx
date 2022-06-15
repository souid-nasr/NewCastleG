export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>We provide various training courses?</h2>
          <p>
          Technical education and the improved performance of technicians requires a process of formal and structured education. Through IESAW programs the trainees will acquire new competencies that enhances their level expertise and abilities to achieve higher level of performance. The levels of skill, knowledge, and competence of students after they graduate and work in oil industries as technicians is directly associated with the quality of their educational development program.
          </p>
          <br />
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
