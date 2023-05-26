import React from 'react'
import { Button } from './reusable/Button';
import { StyledHeader } from './styled/Header.styled';

export const Header = () => {
  const handelClick = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <StyledHeader>
      <Button text="Logout" handelClick={handelClick} mt="2rem" color="bg" bg="primary" />
    </StyledHeader>
  )
}
