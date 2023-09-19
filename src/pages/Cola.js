import React from 'react';
import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';


const {Text, Title} = Typography;

const data=[
  {
    ticketNo:31,
    escritorio:11,
    agente:'Jose'  
  },
  {
    ticketNo:32,
    escritorio:43,
    agente:'Jose'  
  },
  {
    ticketNo:33,
    escritorio:55,
    agente:'Jose'  
  },
  {
    ticketNo:34,
    escritorio:35,
    agente:'Jose'  
  },
  {
    ticketNo:35,
    escritorio:1,
    agente:'Jose'  
  },
  {
    ticketNo:34,
    escritorio:35,
    agente:'Jose'  
  },
  {
    ticketNo:35,
    escritorio:1,
    agente:'Jose'  
  },
  {
    ticketNo:34,
    escritorio:35,
    agente:'Jose'  
  },
  {
    ticketNo:35,
    escritorio:1,
    agente:'Jose'  
  }
]

export const Cola = () => {
  useHideMenu(true);
  return (
    <>
      <Title
      level={1}>
       Atendiendo al cliente
        
      </Title>
                <div >
                  Hello World
                </div>  

       <Row>
        <Col span={24}>
              <Divider> asdasdfgds </Divider>              
        </Col>
       </Row>


       
       
      
       
       

       <Row >
          <Col span={12}>
            <List 
              dataSource={data.slice(0,3)}
              renderItem={ item => (
                  <List.Item>
                    <Card
                      style={{width:300, marginTop:16}}
                      actions={[
                        <Tag color='volcano' >{item.agente}</Tag>,
                        <Tag color='magenta' >Escritorio: {item.escritorio}</Tag>                        
                      ]}
                      >
                        <Title>No. {item.ticketNo} </Title>
                    </Card>
                   

                  </List.Item>
                )
              }
            
            />          
          </Col>
          <Col span={12}>
            <Divider> Historial </Divider>
            <List
              dataSource={data.slice(3)}
              renderItem={item=> (
                <List.Item>
                  <List.Item.Meta
                    title= { `Ticket No. ${item.ticketNo}`}
                    description={
                      <>
                      
                        <Text type='secondary'>En el escritorio: </Text>
                        <Tag color='magenta' >{item.escritorio }</Tag>
                        <Text type='secondary'>Agente </Text>
                        <Tag color='volcano' >{item.agente }</Tag>
                      </>

                  }
                  />
                  {/* <Card
                      style={{width:300, marginTop:16}}
                      actions={[
                        <Tag color='volcano' >{item.agente}</Tag>,
                        <Tag color='magenta' >Escritorio: {item.escritorio}</Tag>                        
                      ]}
                      >
                        <Title>No. {item.ticketNo} </Title>
                    </Card> */}

                </List.Item>
                
                )}
              
              />              
          </Col>
        
       </Row>
    
    
    </>
  )
}
