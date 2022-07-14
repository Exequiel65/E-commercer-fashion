import React from 'react';
import '../../styles/loader.css'
const Loader = ({style}) => {
    return (
        <div className='loader-container' style={style}>
            <div className="preloader"></div>
        </div>
        
    );
}

export default Loader;
