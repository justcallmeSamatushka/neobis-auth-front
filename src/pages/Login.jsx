import React from 'react'
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className='form_auth'>
      <h3>ЛОГИН</h3>
      <div className='auth_inner_block'>
        <span>Email</span>
        <Input placeholder='Введите имя' />
      </div>
      <div className='auth_inner_block'>
        <span>Пароль</span>
        <Input placeholder='Введите пароль' />
      </div>
      <div className='auth_btns'>
        <Button type='primary'>Войти</Button>
        <Link to={'/signup'}>Нет аккаунта? Зарегистрируйтесь!</Link>
      </div>
    </div>
  )
}
