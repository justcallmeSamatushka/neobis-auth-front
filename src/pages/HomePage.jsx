import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate()
  const { hasToken } = useSelector(state => state.usersReducer)

  useEffect(() => {
    if (!hasToken) {
      navigate('/signin')
    }
  }, [hasToken])

  return (
    <div>
      HOMEPAGE
    </div>
  )
}
