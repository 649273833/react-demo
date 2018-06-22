import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
class MyLayout extends React.Component{
    render(){
        return(
            <div>
               <Layout>
                   <Header className='layout-header'>
                       <div className='antd-logo'/>
                       <Menu
                            theme='dark'
                            mode='horizontal'
                            defaultSelectedKeys={['1']}
                            style={{lineHeight:'64px'}}
                       >
                           <Menu.Item key='1'>nav 1</Menu.Item>
                           <Menu.Item key='2'>nav 2</Menu.Item>
                           <Menu.Item key='3'>nav 3</Menu.Item>
                       </Menu>
                   </Header>
                   <Content style={{padding :'0 50px'}}>
                       <Breadcrumb style={{margin :'16px 0',textAlign:'left'}}>
                           <Breadcrumb.Item>home</Breadcrumb.Item>
                           <Breadcrumb.Item>list</Breadcrumb.Item>
                           <Breadcrumb.Item>app</Breadcrumb.Item>
                       </Breadcrumb>
                       <Layout style={{padding :'24px 0',background :'#fff'}}>
                           <Sider width={200} style={{background: '#fff'}}>
                               <Menu
                                   mode='inline'
                                   defaultSelectedKeys={['11']}
                                   defaultOpenKeys={['sub1']}
                                   style={{height : '100%',background: 0}}
                               >
                                   <SubMenu key='sub1' title={<span><Icon type='user'/>subnav 1</span>}>
                                       <Menu.Item key='11'>option1</Menu.Item>
                                       <Menu.Item key='12'>option2</Menu.Item>
                                       <Menu.Item key='13'>option3</Menu.Item>
                                       <Menu.Item key='14'>option4</Menu.Item>
                                   </SubMenu>
                                   <SubMenu key='sub2' title={<span><Icon type='notification'/>subnav 2</span>}>
                                       <Menu.Item key='21'>option1</Menu.Item>
                                       <Menu.Item key='22'>option2</Menu.Item>
                                       <Menu.Item key='23'>option3</Menu.Item>
                                       <Menu.Item key='24'>option4</Menu.Item>
                                   </SubMenu>
                                   <SubMenu key='sub3' title={<span><Icon type='laptop'/>subnav 3</span>}>
                                       <Menu.Item key='31'>option1</Menu.Item>
                                       <Menu.Item key='32'>option2</Menu.Item>
                                       <Menu.Item key='33'>option3</Menu.Item>
                                       <Menu.Item key='34'>option4</Menu.Item>
                                   </SubMenu>
                               </Menu>
                           </Sider>
                           <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                               content
                           </Content>

                       </Layout>
                   </Content>
                   <Footer style={{textAlign :'center'}}>
                       Ant Demo ©2018 Created by xx
                   </Footer>
               </Layout>
                <Layout>

                </Layout>
            </div>
        )
    }
}
export default MyLayout