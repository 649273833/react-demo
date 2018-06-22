import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import ImgCard from '../../common/ImgCard'
class Index extends React.Component{
    render(){
        let setting = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return(
            <div>
                <Slider {...setting}>
                    <div>
                        <img src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png" alt=""/>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <img src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png" alt=""/>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Slider>
                <div>
                    <ImgCard
                        src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png"
                        desc="示意图"
                    />
                </div>
            </div>
        )
    }
}
export default Index