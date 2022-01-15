import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { signinAsync } from '../store/asyncActions/signinAsync';

export const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChange = (type, value) => {
    switch (type) {
      case 'email':
        setForm({
          ...form,
          email: value
        })
        break;
      case 'password':
        setForm({
          ...form,
          password: value
        })
        break;
      default:
        break;
    }
  }

  const onSubmit = () => {
    console.log('signin', form)
    dispatch(signinAsync(form))
    navigate('/')
  }

  return (
    <div className='form_auth'>
      <h3>ЛОГИН</h3>
      <div className='auth_inner_block'>
        <span>Email</span>
        <Input placeholder='Введите email' onChange={(e) => onChange('email', e.target.value)}/>
      </div>
      <div className='auth_inner_block'>
        <span>Пароль</span>
        <Input placeholder='Введите пароль' type='password' onChange={(e) => onChange('password', e.target.value)}/>
      </div>
      <div className='auth_btns'>
        <Button type='primary' onClick={() => onSubmit()}>Войти</Button>
        <Link to={'/signup'}>Нет аккаунта? Зарегистрируйтесь!</Link>
      </div>
    </div>
  )
}
