import React from 'react' ;
import styles from './HomeSection2.module.css';
import PercentageSlider from './PercentageSlider/PercentageSlider';
//import ContactForm from './ContactForm/ContactForm';
import ContactForm from './ContactForm_first/ContactForm';

const HomeSection2 = ({title, graphText, statsArray, formText,
                        formLabels,buttonText }) => {
    return (
        <div>
            <div className={styles.smallTitle}>
                <p>{title} </p>
            </div>
            <div className={styles.Section2Container}>
                <div className={styles.Myborder}>
                    <PercentageSlider graphText={graphText} statsArray={statsArray}  />
                </div>
                <div className={styles.Myborder}>
                    <ContactForm 
                        formText ={formText}
                        formLabels ={formLabels}
                        buttonText={buttonText}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeSection2 ;
