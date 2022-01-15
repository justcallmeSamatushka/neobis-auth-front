import { Row } from 'antd';
import Layout from 'antd/lib/layout/layout';
import React, { useState } from 'react'
// import { Input, Button } from 'antd';
// import { Link } from 'react-router-dom';
// import { signupAsync } from '../store/asyncActions/signupAsync'
import {RegistForm} from '../components/forms/RegistForm';

export const Registration = () => {
  return (
    <Layout>
      <Row justify='center' align='center'>
        <RegistForm/>
      </Row>
    </Layout>
  )
}
