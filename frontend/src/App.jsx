import React, { useState } from 'react';
import styled from 'styled-components';
import { login } from './Auth';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #758c8d 50%, #8d5a42 50%);
  position: relative;
`;

const LoginCard = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Header = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #4b5563;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #374151;
  }
`;

const CancelButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #d1d5db;
  color: #333;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 0.5rem;
  &:hover {
    background-color: #c1c7d0;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #4b5563;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, token } = await login(username, password);
      console.log('Logged in user:', user);
      console.log('Received token:', token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };


  return (
    <Container>
      <HeaderContainer>
        <Logo>MyApp</Logo>
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Login</NavLink>
        </NavLinks>
      </HeaderContainer>
      <LoginCard>
        <Header>Login</Header>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
          <CancelButton type="button">Cancel</CancelButton>
        </form>
      </LoginCard>
    </Container>
  );
};

export default AuthForm;
