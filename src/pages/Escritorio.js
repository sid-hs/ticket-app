import React, { useState } from 'react'
import { Row, Col, Typography, Button, Divider } from 'antd'
import { CaretRightOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { useHideMenu } from '../hooks/useHideMenu'
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { useNavigate } from 'react-router-dom';

const {Title, Text } = Typography

export const Escritorio = () => {


  useHideMenu(false);
  const[usuario] = useState(getUsuarioStorage);
  
  const navigate = useNavigate(); 
  

// Constante que se coloca en el boton para ejecutar socket
const siguienteTicket = () => {
  console.log('SiguienteTicket');
}

const salir = () => {
  localStorage.clear();
  navigate('/ingresar');
  
}


  return (

    <>
      <Row>
        <Col span={20}>
          <Title level={2}> {usuario.agente} </Title>
          <Text> usted esta en el escritorio</Text>
          <Text type='success'> {usuario.escritorio}</Text>        
        </Col>

        <Col span={4} align='right'>
          {/* /Boton para salir de la pagina y regresar / */}
          <Button 
            type='primary' danger
            shape='round'            
            onClick={ salir }            
          >
            <CloseCircleOutlined            
            />            
            Salir
          </Button>

         
        </Col>


      </Row>
      <Divider/>

      <Row>
        <Col>
          <Text>Esta atendiendo ticket numero : </Text>
          <Text
            style={{fontSize: 30}}
            type='danger'
          
          >

            55
          </Text>
        
        </Col>
      </Row>

      <Row>
        <Col 
        offset={18}
        span={6}
        align="right"        
        >
          {/* /Boton para generar tickets, se hace constante/ */}
          <Button
            onClick={siguienteTicket}
            shape='round'
            type='primary'
          >
            Siguiente
            <CaretRightOutlined />

            
          </Button>
        
        </Col>


      </Row>
  

    
    </>
    
    
  )
}
