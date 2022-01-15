import { USERS_GET_ALL } from '../../../const'

const initialState = {
  users: null,
  columns: [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
  ]
}

export const allUser = (state = initialState, action) => {
  switch (action.type) {
    case USERS_GET_ALL:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state;
  }
}