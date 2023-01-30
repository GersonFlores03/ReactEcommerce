import React from 'react';
import "../style/isloading.css";

const Loding = () => {
    return (
        <div className='overflow'>
             <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loding;