import React from 'react' ;
import styles from './PercentageSlider.module.css';
import ReactSlider from 'react-slider';
const PercentageSlider = ({graphText, statsArray}) => {

    return (
        <div className={styles.PercentageSliderContainer}>
            <div className={styles.smallTitle}>
                <h4>{graphText}</h4>
            </div>
            <div>
                {statsArray.map( (element, index) =>(
                    <div>
                        <div key={index} className={styles.row} >
                            <div className={styles.PercentageTitle}>{element.title.toLocaleUpperCase()}</div> 
                            <div> {element.amount * 0.1}%</div>  
                        </div>
                        <ReactSlider 
                            disabled={true}
                            className={styles.MySlider}
                            thumbClassName={styles.MyThumb}
                            trackClassName={styles.MyTrack}
                            defaultValue={element.amount * 0.1}
                            min={0}
                            max={100}
                            renderThumb={(props, state) => 
                                <div {...props}>{state.valueNow}</div>
                            }
                        />
                    </div>                         
                ))} 
            </div>
        </div>
    )
}

export default PercentageSlider ;
