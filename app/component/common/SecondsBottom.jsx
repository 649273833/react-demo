import React from 'react';
const SecondsBottom = ({seconds})=>{
    if(seconds<5){
        return(
            <div className='bottom'>
                小于5的Seconds:{seconds}
            </div>
        )
    }else {
        return(
            <div className='bottom'>
                大于5的Seconds:{seconds}
            </div>
        )
    }
};
export default SecondsBottom;