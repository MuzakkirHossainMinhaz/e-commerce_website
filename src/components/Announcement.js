import React, { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Announcement = () => {
    const [visibility, setVisibility] = useState("");

    const handleClose = () => {
        setVisibility("hidden");
    }

    return (
        <div className={`bg-[#8a4af3] text-white ${visibility} font-semibold text-xl flex justify-center items-center gap-3`}>
            <h1>Hurry up! <span className='font-bold text-2xl'>40%</span> off now...</h1>
            <CloseRoundedIcon className='cursor-pointer font-bold' onClick={handleClose}/>
        </div>
    );
};

export default Announcement;