import React, { useState, useEffect } from 'react';
import styles from './MySlider.module.css';
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";


const MySlider = ({PercentageValue}) => {

    const sliderStyle = {  // Give the slider some width
        position: 'relative',
        width: '100%',
        height: 80,
        border: '1px solid steelblue',
    }

    const railStyle = {
        position: 'absolute',
        width: '100%',
        height: 10,
        marginTop: 35,
        borderRadius: 5,
        backgroundColor: '#8B9CB6',

    }

    const Handle = ({ handle: { id, value, percent }, getHandleProps }) => {

        return (
            <div style={{
                left: `${percent}%`,
                position: 'absolute',
                marginLeft: -15,
                marginTop: 25,
                zIndex: 2,
                width: 30,
                height: 30,
                border: 0,
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '50%',
                backgroundColor: '#2C4870',
                color: '#333',
            }}
                {...getHandleProps(id)}
            >
                <div style={{ fontFamily: 'Roboto', fontSize: 11, marginTop: -35 }}>
                    {value}
                </div>
            </div>
        )
    }


    return (
        <div>
            <Slider
                rootStyle={sliderStyle /* inline styles for the outer div. Can also use className prop. */}
                domain={[0, 100]}
                step={1}
                mode={2}
                values={[35]} //must change !
                //values={PercentageValue}
            >
                <div style={railStyle /* Add a rail as a child.  Later we'll make it interactive. */} />
                <Handles>
                    {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                            {handles.map(handle => (
                                <Handle
                                    key={handle.id}
                                    handle={handle}
                                    getHandleProps={getHandleProps}
                                />
                            ))}
                        </div>
                    )}
                 </Handles>
            </Slider>
        </div>
    )
}

export default MySlider ;
