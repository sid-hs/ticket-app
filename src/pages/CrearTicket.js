import { Button, Col, Row, Typography } from 'antd';
import React from 'react';
import {DownOutlined} from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const CrearTicket = () => { 
  useHideMenu(true);


   const nuevoTicket =() =>{
    console.log('Nice');
   }
    
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}> 
              Presione para un nuevo turno
          </Title>

          <Button
            type='primary'
            shape='round'
            icon={<DownOutlined />}
            size='large'
            onClick={nuevoTicket}
          
          >
            Nuevo ticket

          </Button>
        
        </Col>
      </Row>


      <Row 
      style={{marginTop:100}}>
        <Col
        span={14}
        offset={6}
        align='center'>
          <Text level={2}>
            su número

          </Text>
          <br>
          </br>
          <Text type='success' level={14} style={{fontSize:55}}>
            55
            
          </Text>

        </Col>


      </Row>
    
    
    </>
  )
}
