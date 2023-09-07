import {    
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import {
    BrowserRouter as Router,
  Route, 
  Routes,
  Redirect
} from "react-router-dom";
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';

import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';


export const RouterPage = () => {
  const {  Sider, Content } = Layout;
  const [collapsed ] = useState(false);

 return (
      <Router>
            <Layout style={{ height: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']} // <--- Numero a Key seleccionado por default
                    items={[
                        
                    { 
                        key: '1',
                        icon: <UserOutlined />,
                        label: (<a href="/Ingresar" rel="noopener noreferrer">
                           Ingresar  </a>),
                        // label: 'Ingresar'  ,
                        
                    } ,
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: (<a href="/Cola" rel="noopener noreferrer">
                        Cola  </a>),
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: (<a href="/CrearTicket" rel="noopener noreferrer">
                        Crear Ticket  </a>),
                    },
                    ]}
                
                >
{/*                     
                    <Menu.Item key="1" icon={<UserOutlined/>}>
                        <Link to={'/Ingresar'}>
                            Ingresar
                        </Link>

                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                        <Link to={'/Cola'}>
                            Cola
                        </Link>

                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined/>}>
                        <Link to={'/CrearTicket'}>
                            Crear Ticket
                        </Link>

                    </Menu.Item> */}






                </Menu>


                </Sider>
            <Layout className="site-layout">
            
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    }}
                >

                    <Routes>
                        <Route path='/Ingresar' Component={ Ingresar} />
                        <Route path='/Cola' Component={ Cola } />
                        <Route path='/CrearTicket' Component={ CrearTicket} />
                        <Route path='/Escritorio' Component={ Escritorio} />

                        {/* <Redirect to='/Ingresar' /> */}

                    </Routes>

                    



                </Content>
            </Layout>
        </Layout>
      </Router>
    );

}
  
  export default RouterPage;