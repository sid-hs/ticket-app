import React, { useState } from 'react'
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';

// seccion para importar iconos de la pagina de antDesign
import {SaveOutlined} from '@ant-design/icons';
import { useNavigate} from 'react-router-dom';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';

export const Ingresar = () => {

  // //Uso de history es deprecated
  // const history = useHistory();
  const {Title, Text } = Typography;

  const navigate = useNavigate();
  
  const [usuario] = useState(getUsuarioStorage);

  useHideMenu(false);


// En caso de ser exitoso el registro arroja 
  const onFinish = ({agente, escritorio}) => {
  // console.log('Success:', usuario);
  localStorage.setItem('agente', agente,);
  localStorage.setItem('escritorio', escritorio,);
  navigate('/escritorio')
};


  // En caso de dejar vacío arrojará el error
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  //queda pendiente su arreglo para poder continuar
  // tiene conflicto para que pueda operar 
  // if (usuario.agente && usuario.escritorio){
  //   return <navigate to="/escritorio" />
  // }


  return (
    <>
        <Title level={2}>Ingresar</Title>
        <Text> Ingrese su nombre y Excritorio</Text>
        <Divider />
          <Form
              name="basic"
              labelCol={{
                span: 8, //es la distancia hacia la izquierda
              }}
              wrapperCol={{
                span: 14, // es la longitud de los campos para realizar anotaciones
              }}
              style={{
                maxWidth: 600, //Es longitud de las letras
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Nombre a mostrar"
                name="agente"
                rules={[
                  {
                    required: true,
                    message: 'Por favor coloca tu nombre',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Escritorio"
                name="escritorio"
                rules={[
                  {
                    required: true,
                    message: 'Ingrese el numero de escritorio',
                  },
                ]}
              >
                <InputNumber min={1} max={99} />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 4,
                  span: 14,
                }}
              >
                
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" shape='round'>
                {/* Icono copiado de la pagina antDesign, se debe hacer importacion */}
                <SaveOutlined />
                  Aceptar

                </Button>
              </Form.Item>
            </Form>



    </>
  )
}
