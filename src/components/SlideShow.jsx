import React, {useState} from 'react';
import './SlideShow.scss';
import arrowRight from '../assets/icons/arrow-right.svg';

function SlideShow() {
    const [pointSelected, setPointSelected] = useState(0);

    return (
        <div className='SlideShow'>
            <div className='SlideShow__center-text'>
                Live Better And Healthier
            </div>

            <div className='SlideShow__learn-more'>
                <span className='SlideShow__learn-more-text'>
                    Learn more
                </span>
                <img className='SlideShow__learn-more-icon' src={arrowRight} alt='arrowRight'/>
            </div>

            <div className='SlideShow__points-list'>
                {Array(4).fill("").map((item, index) => (
                    <button
                        key={`${item}_${index}`}
                        className={`SlideShow__point ${pointSelected === index ? 'SlideShow__point--active' : ''}`}
                        onClick={() => setPointSelected(index)}
                    >
                    </button>
                ))}
            </div>

            <div>
                scroll down
            </div>
        </div>
    );
}

export default SlideShow;