import React from 'react';
import {Button,Radio,Icon,Menu ,Dropdown} from 'antd';
class ButtonSize extends React.Component{
    componentDidMount(){
        console.log(this.props.storeState)
    }

    render(){
        let {size}=this.props.storeState;
        let {loading}=this.props.storeState;
        let {iconLoading}=this.props.storeState;
        let {num}=this.props.storeState;
        let menu = (
            <Menu onClick={(e)=>this.props.dispatch({type:'MENUCLICK',e:e})}>
                <Menu.Item>1st item</Menu.Item>
                <Menu.Item>2nd item</Menu.Item>
                <Menu.Item>3rd item</Menu.Item>
            </Menu>
        );
        return(
            <div>
                <button onClick={()=>this.props.dispatch({type:'ADD'})}>{num}</button>
                <Radio.Group size={size} value={size}
                             onChange={(e)=>this.props.dispatch({type:'SIZE',size:e.target.value})}>
                    <Radio.Button value='large'>large</Radio.Button>
                    <Radio.Button value='default'>default</Radio.Button>
                    <Radio.Button value='small'>small</Radio.Button>
                </Radio.Group>
                <br/>
                <Button size={size} type='primary'>primary</Button>
                <Button size={size} disabled >default</Button>
                <Button size={size} type='dashed'>dashed</Button>
                <Button size={size} type='danger'>danger</Button>
                <br/>
                <Button size={size} type='primary' shape='circle' icon='search'/>
                <Button size={size} type='primary' icon='search'>search</Button>
                <Button size={size} shape='circle' icon='search'/>
                <Button size={size} icon='search'>search</Button>
                <br/>
                <Button size={size} disabled type='dashed' shape='circle' icon='search'/>
                <Button size={size} type='dashed' icon='search'>search</Button>
                <Button size={size} type='danger' shape='circle' icon='search'/>
                <Button size={size} type='danger' icon='search'>search</Button>
                <br/>
                <Button size={size} type='primary' shape='circle' icon='download'/>
                <Button size={size} type='primary' icon='download'>download</Button>
                <Button.Group size={size} >
                    <Button type='primary'>
                        <Icon type='left'/>
                        上一页
                    </Button>
                    <Button type='primary'>
                        下一页
                        <Icon type='right'/>
                    </Button>
                </Button.Group>

                <br/>
                <Button size={size} type='primary'shape='circle'  loading={loading} onClick={()=>this.props.dispatch({type:'LOAD'})}/>
                <Button size={size} type='dashed' shape='circle' loading={iconLoading} onClick={()=>this.props.dispatch({type:'ICONLOAD'})}/>
                <Button size={size} type='danger' shape='circle' loading/>
                <Button size={size} type='danger' loading>loading</Button>
                <Dropdown size={size} overlay={menu}>
                    <Button type='primary'>
                        Action <Icon type='down'/>
                    </Button>
                </Dropdown>
                <div style={{background:'rgb(190,200,200)',padding:'26px 16px 16px'}}>

                    <Button size={size} ghost>primary</Button>
                    <Button size={size} ghost>primary</Button>
                    <Button size={size} ghost>primary</Button>
                    <Button size={size} ghost>primary</Button>
                    <Button size={size} ghost>primary</Button>

                </div>
                <Button size={size} htmlType='submit'>submit</Button>

                <Button size={size} type='danger' target='_blank' href='http://www.baidu.com/'>go baidu</Button>

                <div>
                    <Icon spin type='instagram' style={{fontSize:'16px',color:'#08c'}}>instagram</Icon>
                    <Icon spin type='left-circle-o' style={{fontSize:'16px',color:'#08c'}}/>
                    <Icon type='logout' style={{fontSize:'16px',color:'#ccc'}}/>
                </div>
            </div>
        )
    }
}


    export default ButtonSize;