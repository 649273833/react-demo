import React from 'react';
import {BackTop} from 'antd'
import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';
import '../../public/css/antd.pcss';
import 'antd/dist/antd.css';
import DatePicker from './DatePicker/Index';
import Button from './Button/Index';
import Antd3 from './antd3/Index';
import Grid from './Grid/Index';
import Layout1 from './Layout1/Index';
import Layout2 from './Layout2/Index';
import Affix from './Affix/Index';
import Pagination from './Pagination/Index';
import Steps from './Steps/Index';
import AutoComplete from './AutoComplete/Index';
import Cascader from './Cascader/Index';
import Checkbox from './Checkbox/Index';
import Form from './Form/Index';
import Form2 from './Form2/Index';
import Form3 from './Form3/Index';
import Form4 from './Form4/Index';
import Input from './Input/Index';
import Mention from './Mention/Index';
import Rate from './Rate/Index';
import Radio from './Radio/Index';
import Select from './Select/Index';
import Slider from './Slider/Index';
import MySwitch from './Switch/Index';
import MyTreeSelect from './TreeSelect/Index';
import MyTimePicker from './TimePicker/Index';
import MyTransfer from './Transfer/Index';
import MyUpload from './Upload/Index';
import MyAvatar from './Avatar/Index';
import MyCalendar from './Calendar/Index';
import MyCard from './Card/Index';
import MyFormDemo from './FormDemo/Index';
import MyCarousel from './Carousel/Index';
import MyCollapse from './Collapse/Index';
import MyPopover from './Popover/Index';
import MyTable from './Table/Index';
import MyTable2 from './Table2/Index';
import MyTabs from './Tabs/Index';
import MyTags from './Tags/Index';
import MyTimeline from './Timeline/Index';
import MyTree from './Tree/Index';
import MyAlert from './Alert/Index';
import MyModal from './Modal/Index';
import MyMessage from './Message/Index';
import MyNotification from './Notification/Index';
import MyProgress from './Progress/Index';
import MyPopconfirm from './Popconfirm/Index';
import MySpin from './Spin/Index';
import MyLocaleProvider from './LocaleProvider/Index';
import MySlick from './react-slick/Index';

import {Layout,Menu,Breadcrumb,Icon,Row,Col,Switch} from 'antd';
const {Header,Content,Footer,Sider} = Layout;
const SubMenu = Menu.SubMenu;
class Index extends React.Component{
    constructor(props){
        super(props)
        this.state={
            openKeys: ['sub1'],
            // openKeys: '',
            theme: false,
            current: '1',
            mode:false
        }
    }
    rootSubmenuKeys = ['sub1', 'sub2', 'sub3','sub4','sub5','sub6','sub7','sub8','sub9','sub10'];

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    changeTheme = () => {
        this.setState({
            theme: !this.state.theme,
        });
    }
    changeMode = () => {
        this.setState({
            mode: !this.state.mode,
        });
    }
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
    render(){
        let theme = this.state.theme
        let mode=this.state.mode
        return(
            <div className='indexRouter'>
                <HashRouter>
                    <Layout>
                        <Sider
                            breakpoint='sm'//什么尺寸会触发侧边菜单最小化 xs,sm,md,lg,xl,xxl
                            collapsedWidth='0'
                            style={{background:theme ? '#fff' : null,position:'fixed',left:0,height:'100vh',zIndex:10 }}
                        >
                            <Switch
                                // checked={theme}
                                onChange={this.changeTheme}
                                checkedChildren="Dark"
                                unCheckedChildren="Light"
                            />
                            <Switch
                                // checked={mode}
                                onChange={this.changeMode}
                                checkedChildren="Inline"
                                unCheckedChildren="Vertical"
                            />
                            <div className="antd-logo" style={{marginLeft:40}}/>
                            <Menu
                                theme={theme ? 'light' : 'dark'}
                                onClick={this.handleClick}
                                mode={mode ? 'vertical' : 'inline'}
                                openKeys={this.state.openKeys} //当前展开的 SubMenu 菜单项 key 数组
                                onOpenChange={this.onOpenChange} //SubMenu 展开/关闭的回调
                                style={{borderRightColor:theme ? '#fff' : null}}
                                // selectedKeys={[this.state.current]}
                            >
                                <SubMenu key={['sub1']}
                                         title={<span><Icon type='team'/><span>Team1</span></span>}
                                >
                                    <Menu.Item key='1'>
                                        <NavLink to='/Antd/DatePicker' >DatePicker</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='2'>
                                        <NavLink to='/Antd/Button' >Button</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='3'>
                                        <NavLink to='/Antd/Antd3' >Antd3</NavLink>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key={['sub2']}
                                    title={<span><Icon type='zhihu'/><span>Team2</span></span>}
                                >
                                    <Menu.Item key='4'>
                                        <NavLink to='/Antd/Grid' >Grid</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='5'>
                                        <NavLink to='/Antd/Layout1' >Layout1</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='6'>
                                        <NavLink to='/Antd/Layout2' >Layout2</NavLink>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu key={['sub3']}
                                         title={<span><Icon type='apple'/><span>Team3</span></span>}
                                >
                                    <Menu.Item key='7'>
                                        <NavLink to='/Antd/Affix' >Affix</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='8'>
                                        <NavLink to='/Antd/Pagination' >Pagination</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='9'>
                                        <NavLink to='/Antd/Steps' >Steps</NavLink>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key={['sub4']}
                                    title={<span><Icon type='smile'/><span>Team4</span></span>}
                                >
                                    <Menu.Item key='10'>
                                        <NavLink to='/Antd/AutoComplete' >AutoComplete</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='11'>
                                        <NavLink to='/Antd/Cascader' >Cascader</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='12'>
                                        <NavLink to='/Antd/Checkbox' >Checkbox</NavLink>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key={['sub5']}
                                    title={<span><Icon type='android-o'/><span>Team5</span></span>}
                                >
                                    <Menu.Item key='13'>
                                        <NavLink to='/Antd/Form' >Form1</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='14'>
                                        <NavLink to='/Antd/Form2' >Form2</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='15'>
                                        <NavLink to='/Antd/Form3' >Form3</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='16'>
                                        <NavLink to='/Antd/Form4' >Form4</NavLink>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key={['sub6']}
                                    title={<span><Icon type='qrcode'/><span>Team6</span></span>}
                                >
                                    <Menu.Item key='17'>
                                        <NavLink to='/Antd/Input'>Input1</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='18'>
                                        <NavLink to='/Antd/Mention'>Mention</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='19'>
                                        <NavLink to='/Antd/Rate'>Rate</NavLink>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key={['sub7']}
                                    title={<span><Icon type='qrcode'/><span>Team7</span></span>}
                                >
                                    <Menu.Item key='20'>
                                        <NavLink to='/Antd/Radio'>Radio</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='21'>
                                        <NavLink to='/Antd/Select'>select</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='22'>
                                        <NavLink to='/Antd/Slider'>slider</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='23'>
                                        <NavLink to='/Antd/MySwitch'>switch</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='24'>
                                        <NavLink to='/Antd/MyTreeSelect'>treeSelect</NavLink>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key={['sub8']}
                                    title={<span><Icon type='dashboard'/><span>Team8</span></span>}
                                >
                                    <Menu.Item key='25'>
                                        <NavLink to='/Antd/MyTimePicker'>timepicker</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='26'>
                                        <NavLink to='/Antd/MyTransfer'>transfer</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='27'>
                                        <NavLink to='/Antd/MyUpload'>upload</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='28'>
                                        <NavLink to='/Antd/MyAvatar'>avatar</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='29'>
                                        <NavLink to='/Antd/MyCalendar'>calendar</NavLink>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key={['sub9']}
                                    title={<span><Icon type='user'/><span>Team9</span></span>}
                                >
                                    <Menu.Item key='29'>
                                        <NavLink to='/Antd/MyCard'>card</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='30'>
                                        <NavLink to='/Antd/MyFormDemo'>formdemo</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='31'>
                                        <NavLink to='/Antd/MyCarousel'>carousel</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='32'>
                                        <NavLink to='/Antd/MyCollapse'>collapse</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='33'>
                                        <NavLink to='/Antd/MyPopover'>popover</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='34'>
                                        <NavLink to='/Antd/MyTable'>table</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='35'>
                                        <NavLink to='/Antd/MyTable2'>table2</NavLink>
                                    </Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key={['sub10']}
                                    title={<span><Icon type='laptop'/><span>Team10</span></span>}
                                >
                                    <Menu.Item key='36'>
                                        <NavLink to='/Antd/MyTabs'>tabs</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='37'>
                                        <NavLink to='/Antd/MyTags'>tags</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='38'>
                                        <NavLink to='/Antd/MyTimeline'>Timeline</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='39'>
                                        <NavLink to='/Antd/MyTree'>tree</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='40'>
                                        <NavLink to='/Antd/MyAlert'>Alert</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='41'>
                                        <NavLink to='/Antd/MyModal'>Modal</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='42'>
                                        <NavLink to='/Antd/MyMessage'>Message</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='43'>
                                        <NavLink to='/Antd/Notification'>Notification</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='44'>
                                        <NavLink to='/Antd/Progress'>Progress</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='45'>
                                        <NavLink to='/Antd/Popconfirm'>Popconfirm</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='46'>
                                        <NavLink to='/Antd/Spin'>Spin</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='47'>
                                        <NavLink to='/Antd/LocaleProvider'>LocaleProvider</NavLink>
                                    </Menu.Item>
                                    <Menu.Item key='48'>
                                        <NavLink to='/Antd/Slick'>react-slick</NavLink>
                                    </Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout className='mycontent' id='mycontent'>
                            <Header className='layout-header' style={{ padding: '0' ,background:theme ? '#fff' : null}}>
                                <Menu
                                    theme='dark'
                                    mode='horizontal'
                                    defaultSelectedKeys={['m-1']}
                                    style={{lineHeight:'64px',
                                        background:theme ? '#fff' : null,
                                        borderBottomColor:theme ? '#fff' : null}}
                                >
                                    <Menu.Item key='1'>
                                        <Row>
                                            <Col xs={0} sm={2} >
                                                <a href="/index.html">首页</a>
                                            </Col>
                                        </Row>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Row>
                                            <Col xs={0} sm={2}>
                                                <a href="/shop.html">商城</a>
                                            </Col>
                                        </Row>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Row>
                                            <Col xs={0} sm={2}>
                                                <a href="/demo.html">案例</a>
                                            </Col>
                                        </Row>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Row>
                                            <Col xs={0} sm={2}>
                                                <a href="/antd.html">antd</a>
                                            </Col>
                                        </Row>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Row>
                                            <Col xs={0} sm={2}>
                                                <a href="/mail.html">mail</a>
                                            </Col>
                                        </Row>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Row>
                                            <Col xs={0} sm={2}>
                                                <a href="/center.html">个人中心</a>
                                            </Col>
                                        </Row>
                                    </Menu.Item>
                                </Menu>
                            </Header>
                            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', }}>
                                <Route exact path='/'
                                       render={() => (<Redirect to='/Antd/DatePicker'/>)}/>
                                <Route path='/Antd/DatePicker' component={DatePicker}/>
                                <Route path='/Antd/Button' component={Button}/>
                                <Route path='/Antd/Antd3' component={Antd3}/>
                                <Route path='/Antd/Grid' component={Grid}/>
                                <Route path='/Antd/Layout1' component={Layout1}/>
                                <Route path='/Antd/Layout2' component={Layout2}/>
                                <Route path='/Antd/Affix' component={Affix}/>
                                <Route path='/Antd/Pagination' component={Pagination}/>
                                <Route path='/Antd/Steps' component={Steps}/>
                                <Route path='/Antd/AutoComplete' component={AutoComplete}/>
                                <Route path='/Antd/Cascader' component={Cascader}/>
                                <Route path='/Antd/Checkbox' component={Checkbox}/>
                                <Route path='/Antd/Form' component={Form}/>
                                <Route path='/Antd/Form2' component={Form2}/>
                                <Route path='/Antd/Form3' component={Form3}/>
                                <Route path='/Antd/Form4' component={Form4}/>
                                <Route path='/Antd/Input' component={Input}/>
                                <Route path='/Antd/Mention' component={Mention}/>
                                <Route path='/Antd/Rate' component={Rate}/>
                                <Route path='/Antd/Radio' component={Radio}/>
                                <Route path='/Antd/Select' component={Select}/>
                                <Route path='/Antd/Slider' component={Slider}/>
                                <Route path='/Antd/MySwitch' component={MySwitch}/>
                                <Route path='/Antd/MyTreeSelect' component={MyTreeSelect}/>
                                <Route path='/Antd/MyTimePicker' component={MyTimePicker}/>
                                <Route path='/Antd/MyTransfer' component={MyTransfer}/>
                                <Route path='/Antd/MyUpload' component={MyUpload}/>
                                <Route path='/Antd/MyAvatar' component={MyAvatar}/>
                                <Route path='/Antd/MyCalendar' component={MyCalendar}/>
                                <Route path='/Antd/MyCard' component={MyCard}/>
                                <Route path='/Antd/MyFormDemo' component={MyFormDemo}/>
                                <Route path='/Antd/MyCarousel' component={MyCarousel}/>
                                <Route path='/Antd/MyCollapse' component={MyCollapse}/>
                                <Route path='/Antd/MyPopover' component={MyPopover}/>
                                <Route path='/Antd/MyTable' component={MyTable}/>
                                <Route path='/Antd/MyTable2' component={MyTable2}/>
                                <Route path='/Antd/MyTabs' component={MyTabs}/>
                                <Route path='/Antd/MyTags' component={MyTags}/>
                                <Route path='/Antd/MyTimeline' component={MyTimeline}/>
                                <Route path='/Antd/MyTree' component={MyTree}/>
                                <Route path='/Antd/MyAlert' component={MyAlert}/>
                                <Route path='/Antd/MyModal' component={MyModal}/>
                                <Route path='/Antd/MyMessage' component={MyMessage}/>
                                <Route path='/Antd/Notification' component={MyNotification}/>
                                <Route path='/Antd/Progress' component={MyProgress}/>
                                <Route path='/Antd/Popconfirm' component={MyPopconfirm}/>
                                <Route path='/Antd/Spin' component={MySpin}/>
                                <Route path='/Antd/LocaleProvider' component={MyLocaleProvider}/>
                                <Route path='/Antd/Slick' component={MySlick}/>
                            </Content>
                            <Footer style={{textAlign:'center'}}>
                                这是footer
                                <BackTop
                                    visibilityHeight={10}
                                    target={()=>document.getElementById('mycontent')}
                                />
                            </Footer>
                        </Layout>
                    </Layout>
                </HashRouter>
            </div>
        )
    }
}


export default Index;