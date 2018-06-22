import React from 'react';
import {Carousel} from 'antd';
class MyCarousel extends React.Component{
    render(){
        return(
            <div>
                <Carousel afterChange={(a,b,c)=>console.log(a,b,c)}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <Carousel vertical>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
                <Carousel effect='fade' autoplay >
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
        )
    }
}
export default MyCarousel;