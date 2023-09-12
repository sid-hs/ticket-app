import {    
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import {
    BrowserRouter as Router,
  Route, 
  Routes,
  Navigate
} from "react-router-dom";
import { Layout, Menu } from 'antd';
import React, { useContext, useState } from 'react';

import { Ingresar } from './Ingresar';
import { Cola } from './Cola';
import { CrearTicket } from './CrearTicket';
import { Escritorio } from './Escritorio';

import { UiContext } from '../context/UIContext';
  const {  Sider, Content } = Layout;


export const RouterPage = () => {
  const {ocultarMenu } = useContext(UiContext)

 return (
    
      <Router>
            <Layout style={{ height: '100vh' }}>
                <Sider 
                // opciones para que al medir poco el ancho de pantalla, la parte izquierda 
                //se contrae y aparece un pequeño menu 
                collapsedWidth={0}
                breakpoint='md'
                hidden={ocultarMenu}
                > 
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
                        // Por modificaciones en versiones se removió child y ahora no sed utiliza Link, se utiliza href dentro del texto ,                        
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
                
                >,

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
                         {/* Se dejó de utilizar Switch y en su ligar Routes

                         Las rutas permite colocar las ligas al presionar 
                         
                         */}
                    <Routes> 
                        <Route path='/Ingresar' Component={ Ingresar} />
                        <Route path='/Cola' Component={ Cola } />
                        <Route path='/CrearTicket' Component={ CrearTicket} />
                        <Route path='/Escritorio' Component={ Escritorio} />
                        
                        
                        {/* <Navigate to= "/Ingresar"/> */}
                        {/* se redirige de manera automatica */}
                        <Route 
                            path="/redirect"
                            element={ <Navigate to="/Ingresar" /> }
                        />

                    </Routes>

                    



                </Content>
            </Layout>
        </Layout>
      </Router>
    );

}
  
  export default RouterPage;