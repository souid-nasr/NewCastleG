import { useTranslation } from 'react-i18next';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export const Features = (props) => {

  const { t } = useTranslation()

  return (
    <>
      <div id='features' className='text-center'>
        <div className='container'>
          <div className='col-md-10  col-md-offset-1 section-title'>
            {/* <h2>{t('parag.description4')}</h2> */}
            <h2>TRAINING SERVICES</h2>
            {/* <p>{t('parag.description5')}</p> */}
            <p>We offer you a unique training opportunity</p>
            <br />
          </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text} <KeyboardArrowRightIcon className="icons-page" /> </p>
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </>
  )
}
