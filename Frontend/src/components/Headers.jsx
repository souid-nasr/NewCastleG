
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

export const Headers = (props) => {
    const { t } = useTranslation()

    return (
        <>
            <div className='overlay'>
                <section className="home" id="home">
                    <div className="text">
                        <h1 className="text-home"><sapn>{t('page.welcome.home')}</sapn><br />{t('page.welcome.home1')}</h1>
                        <p className="paragraphe-home">{t('parag.description')} <br /> {t('parag.description1')} <br /> {t('parag.description2')}</p>
                        <button className="btn-apply"><Link to='apply-student'><SupervisedUserCircleIcon /> {t('parag.description3')}</Link></button>
                    </div>
                </section>
            </div>
        </>
    )
}
