import React from 'react';
import  s from './Loader.module.css'

const Loader = () => {
    return (
        <div className={s.loader_element}>
            <span className={s.loader}></span>
        </div>
    );
};

export default Loader;