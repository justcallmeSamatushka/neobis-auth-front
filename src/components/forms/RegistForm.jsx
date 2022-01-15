import { Button, Input, InputNumber } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import React, { useCallback, useEffect, useState } from 'react'
import { SignupRules } from '../formRules';
import { useDispatch, useSelector } from 'react-redux';
import { signupAsync } from '../../store/asyncActions/signupAsync';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export const RegistForm = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.signupReducer)
  const [isErrors, setIsErrors] = useState(false)
  const [errorsMsg, setErrorsMsg] = useState({
    name: '',
    age: '',
    password: '',
    email: '',
  })

  const onFinish = (values) => {
    const form = {
      ...values,
      age: +values.age
    }

    dispatch(signupAsync(form))
    const  { errors } = state;
    if (errors) {
      setIsErrors(true)
      setErrorsMsg({
        ...errorsMsg,
        ...errors,
      })
    } else {
      setIsErrors(false)
      setIsErrors({
        ...errorsMsg
      })
    }
  } 

  const onFinishFailed = ({errorFields}) => {
    console.error('ERROR: ',errorFields);
  }

  

  return (
    <div className='form_auth'>
      <h3>Регистрация</h3>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout='vertical'
        autoComplete="off"
        justify='center'
        align='center'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <FormItem
          label="Имя"
          name="name"
          rules={[SignupRules(errorsMsg.name ||'Не должен быть пустым')]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Email"
          name="email"
          rules={[{ type: 'email', message: 'Не валидная почта', required: true }]}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Пароль"
          name="password"
          rules={[SignupRules(errorsMsg.password || 'Не должен быть пустым')]}
        >
          <Input.Password iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
        </FormItem>
        <FormItem
          label="Возраст"
          name="age"
          rules={[SignupRules(errorsMsg.age || 'Не должен быть пустым')]}
        >
          <Input />
        </FormItem>
        <Button 
          type="primary" 
          htmlType="submit"
        >
            Submit
        </Button>
      </Form>
    </div>
  )
}
