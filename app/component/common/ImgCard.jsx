import React from 'react';
import styles from '../../public/css/imgCard.pcss';
const ImgCard = ({src,style,desc}) =>
    <div style={style} className='imgCard'>
        <img src={src} alt={desc} className='img'/>
        {desc && <div className='desc'>{desc}</div>}
    </div>;
        export default ImgCard
