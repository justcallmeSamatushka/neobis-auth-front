import React, { useState } from 'react'
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupAsync } from '../store/asyncActions/signupAsync'

export const Registration = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.signupReducer)

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    age: null
  })

  const onChange = (e, type) => {
    switch (type) {
      case 'name':
        setForm({...form, name: e.target.value})
        break;
      case 'email':
        setForm({...form, email: e.target.value})
        break;
      case 'pass':
        setForm({...form, password: e.target.value})
        break;
      case 'age':
        setForm({...form, age: +e.target.value})
        break
      default:
        break;
    }
  }

  const onSubmit = () => {
    dispatch(signupAsync(form))
    console.log(state);
  }

  return (
    <div className='form_auth'>
      <h3>Регистрация</h3>
      <div className='auth_inner_block'>
        <span className='onError'>Имя</span>
        <Input placeholder='Введите имя' onChange={e => onChange(e, 'name')}/>
      </div>
      <div className='auth_inner_block'>
        <span className='onError'>Email</span>
        <Input placeholder='Введите почту' onChange={e => onChange(e, 'email')}/>
      </div>
      <div className='auth_inner_block'>
        <span className='onError'>Пароль</span>
        <Input placeholder='Введите пароль' type="password" onChange={e => onChange(e, 'pass')}/>
      </div>
      <div className='auth_inner_block'>
        <span className='onError'>Возраст</span>
        <Input placeholder='Введите возраст'type="number" onChange={e => onChange(e, 'age')}/>
      </div>
      <div className='auth_btns'>
        <Button type='primary' onClick={() => onSubmit()}>Регистрация</Button>
        <Link to={'/signin'}>Есть аккаунт? Авторизуйтесь!</Link>
      </div>
    </div>
  )
}
