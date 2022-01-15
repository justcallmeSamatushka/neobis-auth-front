import { Table } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userMe } from '../store/asyncActions/usersMe';
import { asyncAllUsers } from '../store/reducers/ALL_USERS/asyncAction';

export const HomePage = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const {aboutMe} = useSelector(state => state.usersMe)
  // console.log(hasToken)
  const { users, columns } = useSelector(state => state.allUser)

  useEffect(() => {
    dispatch(userMe())
    dispatch(asyncAllUsers()) 
  }, [])


  return (
    <Table
      columns={columns}
      dataSource={users}
    >
      
    </Table>
  )
}
