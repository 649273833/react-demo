import React from 'react';
import {Input,Button,Radio,InputNumber} from 'antd';
const RadioGroup = Radio.Group;
let timer = '';
class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      InputValue : '',
      RadioValue : 0,
      fontColor: '#333',
      fontSize: 16,
      left:0,
      top:0,
      width:0,
      height:0,
      swiper:[]
    };
    this.refs = '';
  }
  componentDidMount(){
    let swiper = [{
      id:1,
      title:'1',
      active:false
    },{
      id:2,
      title:'2',
      active:true
    },{
      id:3,
      title:'3',
      active:false
    },{
      id:4,
      title:'4',
      active:false
    },{
      id:5,
      title:'5',
      active:false
    }]
    this.setState({swiper})
  }
  handleChangeInput = (e) =>{
    let InputValue = e.target.value;
    this.setState({InputValue,width:this.refs.offsetWidth,height:this.refs.offsetHeight})
  };
  handleChangeRadio = (e) =>{
    console.log(e.target.value)
    clearInterval(timer)
    this.setState({top:0,left:0})
    let RadioValue = e.target.value;
    if(RadioValue){
      // this.handleY()
    }else {
      // this.handleX()
    }
    this.setState({RadioValue})
  };
  handleSubmit = () =>{
    let {RadioValue} = this.state;
    if(RadioValue){
      this.handleY()
    }else {
      this.handleX()
    }
  };
  handleX = ()=>{
    let {left} = this.state;
    clearInterval(timer)
    this.setState({top:0})
    timer = setInterval(()=>{
      left -= 1;
      if(left < -this.refs.offsetWidth){
        left = 400
      }
      this.setState({left})
    },10)
  };
  handleY = ()=>{
    let {top} = this.state;
    clearInterval(timer)
    this.setState({left:0})
    timer = setInterval(()=>{
      top -= 1;
      if(top < -this.refs.offsetHeight){
        top = 280
      }
      this.setState({top})
    },10)
  }
  handleReset = () =>{
    clearInterval(timer)
    this.setState({InputValue:'',RadioValue:0,fontColor:'#333',fontSize:16})
  };
  handleFontColor = (e) =>{
    this.setState({fontColor:e.target.value})
  };
  handleFontSize = (fontSize) =>{
    this.setState({fontSize})
  };
  handleSwiper = (type) =>{
    let swiper = this.state.swiper;
    let length = swiper.length;
    let prev = swiper.filter((data)=> data.active === true)[0].id + 1;
    prev = prev > length ? (prev - length) : prev;
    let next = swiper.filter((data)=> data.active === true)[0].id - 1;
    next = next < 1 ? (next = swiper.length) : next;
    if(type === 'next'){
      swiper.filter((data)=> data.id !== next).map((data)=>data.active = false );
      swiper.find((data)=> data.id === next).active = true;
      let lastData = swiper[swiper.length - 1];
      swiper.pop();
      swiper.unshift(lastData)
    }else if(type === 'prev') {
      swiper.filter((data)=> data.id !== next).map((data)=>data.active = false );
      swiper.find((data)=> data.id === prev).active = true;
      let firstData = swiper[0];
      swiper.shift();
      swiper.push(firstData)
    }
    this.setState({swiper})
  };
  render(){
    let {InputValue,RadioValue,fontColor,fontSize,left,top,swiper} = this.state;
    let zxWidth = RadioValue ? (fontSize + 34) : 400;
    return(
      <div className='gundong'>
        <div>
          输入文字：
          <Input
            className='text'
            placeholder='输入文字'
            value={InputValue}
            onChange={this.handleChangeInput}
          />
        </div>
        <br/>
       <RadioGroup onChange={this.handleChangeRadio} value={RadioValue}>
         <Radio value={0}>横向</Radio>
         <Radio value={1}>纵向</Radio>
       </RadioGroup>
        <br/>
        <div style={{marginBottom:10}}>
          字体颜色：
          <Input
            className='fontcolor'
            type='color'
            placeholder='字体颜色'
            onChange={this.handleFontColor}
          />
        </div>
        <div style={{marginBottom:10}}>
          字体大小：
          <InputNumber
            placeholder='字体大小'
            min={12}
            max={100}
            defaultValue={16}
            onChange={(value)=>this.handleFontSize(value)}
          />
        </div>
        <div className={RadioValue ? 'gdBox zx' : 'gdBox hx'}
             style={{width:zxWidth}}
          >
          <div style={{fontSize:fontSize,color:fontColor}} >
            <span style={{left:left,top:top}} ref={(ref)=>this.refs = ref}>
              {RadioValue ? (InputValue.split('').map((i)=> i + ' \n ').toString().replace(/,/g,'')
            ) : InputValue}
            </span>
          </div>
        </div>
        <br/>
        <Button onClick={this.handleSubmit}>确定</Button>
        <Button onClick={this.handleReset}>重置</Button>

        <div className='huadong'>
          <div
            className='prev'
            onClick={(type)=>this.handleSwiper('prev')}
          > &lt; </div>
          <div className='box'>
            {
              swiper && swiper.map((data)=>
                <div
                  className={data.active ? 'item active' : 'item'}
                  key={data.id}
                >
                  {data.title}
                </div>
              )
            }
          </div>
          <div
            className='next'
            onClick={(type)=>this.handleSwiper('next')}
          > &gt; </div>
        </div>
      </div>
    )
  }
}
export default Index