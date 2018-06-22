import React from 'react';
import {Affix,Button,Breadcrumb,Icon,Dropdown,Menu} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class MyAffix extends React.Component{
    render(){
        let {collapsed} = this.props.storeState;
        const menu=(
            <Menu>
                <Menu.Item>
                    <a href='http://www.alipay.com/' target='_blank' ref='noopener noreferrer'>支付宝</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="http://www.taobao.com/" target='_blank' ref='noopener noreferrer'>淘宝</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="http://www.tmall.com/" target='_blank' ref='noopener noerferrer'>天猫</a>
                </Menu.Item>
            </Menu>
        )
        return(
            <div>
                <Dropdown overlay={menu} placement='bottomLeft'>
                    <Button>bottemLeft <Icon type='down'/></Button>
                </Dropdown>
                <Dropdown overlay={menu} placement='bottomCenter'>
                    <Button>bottemCenter <Icon type='down'/></Button>
                </Dropdown>
                <Dropdown overlay={menu} placement='bottomRight'>
                    <Button>bottemRight <Icon type='down'/></Button>
                </Dropdown>
                <Dropdown overlay={menu} placement='topLeft'>
                    <Button>topLeft <Icon type='up'/></Button>
                </Dropdown>
                <Dropdown overlay={menu} placement='topCenter'>
                    <Button>topCenter <Icon type='up'/></Button>
                </Dropdown>
                <Dropdown overlay={menu} placement='topRight'>
                    <Button>topRight <Icon type='up'/></Button>
                </Dropdown>
                <Dropdown overlay={menu} trigger={['contextMenu']}>
                    {/*trigger触发条件 click hover contextMenu(右键点击)*/}
                    <Button type='danger'>action dropdown <Icon type='down'/></Button>
                </Dropdown>

                <div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        // mode='horizontal'   横向排列
                        mode='inline' //竖着排列
                        style={{width:256}}
                    >
                        <SubMenu key='sub1'
                            title={<span><Icon type='mail'/>mail</span>}
                        >
                            <Menu.Item key='1'>mail1</Menu.Item>
                            <Menu.Item key='2'>mail2</Menu.Item>
                        </SubMenu>
                        <SubMenu key={['sub2']}
                            title={<span><Icon type='appstore'/><span>app store</span></span>}
                        >
                            <MenuItemGroup key='store1'
                                title={<span><Icon type='android'/><span>andriod</span></span>}
                            >
                                <Menu.Item key='3'>game1</Menu.Item>
                                <Menu.Item key='4'>game2</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup key={['store2']}
                                title={<span><Icon type='apple'/><span>apple</span></span>}
                            >
                                <Menu.Item key='5'>app1</Menu.Item>
                                <Menu.Item key='6'>app2</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                        <SubMenu key={['sub3']}
                            title={<span><Icon type='setting'/><span>setting</span></span>}
                        >
                            <Menu.Item key='7'>setting1</Menu.Item>
                            <Menu.Item key='8'>setting2</Menu.Item>
                            <SubMenu key={['sub4']}
                                title={<span><Icon type='setting'/><span>new setting</span></span>}
                            >
                                <Menu.Item key='9'>new setting3</Menu.Item>
                                <Menu.Item key='10'>new setting4</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </div>
                <div style={{marginTop:50,width:256}}>
                    <Button type='primary'
                            onClick={()=>this.props.
                            dispatch({type:'COLLAPSED'})}
                            style={{marginBottom:16}}>
                        <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'}/>
                    </Button>
                    <Menu
                        theme='dark'
                        mode='inline'
                        defaultSelectedKeys={['11']}
                        defaultOpenKeys={['sub5']}
                        inlineCollapsed={collapsed}
                    >
                        <Menu.Item key='11'>
                            <Icon type='pie-chart'/>
                            <span>option1</span>
                        </Menu.Item>
                        <SubMenu key={['sub5']}
                            title={<span><Icon type='appstore'/><span>app store</span></span>}
                        >
                            <Menu.Item key='12'>
                                option2
                            </Menu.Item>
                            <Menu.Item key='13'>
                                option2
                            </Menu.Item>
                            <Menu.Item key='14'>
                                option2
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <Affix offsetTop={0}>
                    <Button type='dashed'>affix top <Icon type='down'/></Button>
                </Affix>

                <div style={{height:800}}></div>
                <div className='scrollable-container' ref={(node)=>{this.container = node}}>
                    <div className='background'>
                        <Affix target={()=>this.container}>
                            <Button type='primary'>
                                Fixed at the top of container
                            </Button>
                        </Affix>
                    </div>
                </div>
                <Affix offsetTop={220} onChange={affixed =>console.log(affixed)}>
                    <Button>触发时一直距离顶部120px，触发时返回函数</Button>
                </Affix>
                <Affix>
                    <Button type='primary'>affix</Button>
                </Affix>
                <div style={{height:800}}></div>
                <Affix offsetBottom={0}>
                    <Button type='danger'>affix bottom</Button>
                </Affix>
            </div>
        )
    }
}
export default MyAffix