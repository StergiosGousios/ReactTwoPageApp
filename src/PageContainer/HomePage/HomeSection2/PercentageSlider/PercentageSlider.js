import React from 'react' ;
import styles from './PercentageSlider.module.css';
//import Slider, { Range,createSliderWithTooltip } from 'rc-slider';
import MySlider from './MySlider/MySlider';

const PercentageSlider = ({graphText, statsArray}) => {
    // const { createSliderWithTooltip } = Slider;
    // const Range = createSliderWithTooltip(Slider.Range);
    // const { Handle } = Slider;
    //const SliderWithTooltip = createSliderWithTooltip(Slider);

    return (
        <div className={styles.PercentageSliderContainer}>
            <div className={styles.smallTitle}>
                {/* <h2>{graphText}</h2> */}
                <p><strong>{graphText}</strong></p>
            </div>
            {/* <MySlider PercentageValue={40} /> */}
            <div>
                {statsArray.map( (element, index) =>(
                    <div key={index} className={styles.row} >
                        <div>   
                            {/* <SliderWithTooltip /> */}
                                
                                {/* <Slider >
                                    <Range />
                                </Slider> */}
                            {/* <Slider
                                value={element.amount}
                                // onChange={this.onSliderChange}
                                // onAfterChange={this.onAfterChange}
                            /> */}
                        </div>
                        <p> {element.title}</p> 
                        <p> {element.amount * 0.1}%</p>  
                    </div>
                ))} 
            </div>
        </div>
    )
}

export default PercentageSlider ;
