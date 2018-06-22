import React from 'react';
import {Layout,Menu,Breadcrumb,Icon,Row,Col} from 'antd';
const {Header,Content,Footer,Sider} = Layout;
const SubMenu = Menu.SubMenu;
class Siderdemo extends React.Component{
    render(){
        let {collapsed} = this.props.storeState;
        return(
            <div className='layout-header'>
                <Layout>
                    <Sider
                        // trigger={null}
                        // collapsible
                        // collapsed={collapsed}
                        breakpoint='sm'
                        collapsedWidth='0'
                    >
                        <div className="antd-logo" />
                        <Menu theme="dark"
                              mode="inline"
                              defaultSelectedKeys={['1']}
                              defaultOpenKeys={['sub1']}
                        >
                            <Menu.Item key="1">
                                <Icon type="user" />
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>nav 3</span>
                            </Menu.Item>
                            <SubMenu key={['sub1']}
                                title={<span><Icon type='team'/><span>Team</span></span>}
                            >
                                <Menu.Item key='4'>item1</Menu.Item>
                                <Menu.Item key='5'>item2</Menu.Item>
                                <Menu.Item key='6'>item3</Menu.Item>
                            </SubMenu>
                            <SubMenu key={['sub2']}
                                title={<span><Icon type='user'/><span>User</span></span>}
                            >
                                <Menu.Item key='7'>item4</Menu.Item>
                                <Menu.Item key='8'>item5</Menu.Item>
                                <Menu.Item key='9'>item6</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: '0 16px',position:'fixed' }}>
                            {/*<Row>*/}
                                {/*<Col xs={0} sm={2}>*/}
                                    {/*<Icon*/}
                                        {/*className="trigger"*/}
                                        {/*type={collapsed ? 'menu-unfold' : 'menu-fold'}*/}
                                        {/*onClick={()=>this.props.dispatch({type:'COLLAPSED'})}*/}
                                    {/*/>*/}
                                {/*</Col>*/}
                            {/*</Row>*/}
                            <Menu
                                theme='dark'
                                mode='horizontal'
                                defaultSelectedKeys={['m-1']}
                                style={{lineHeight:'64px'}}
                            >

                            </Menu>
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            Content
                        </Content>
                        <Footer style={{textAlign:'center'}}>
                            这是footer
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export default Siderdemo