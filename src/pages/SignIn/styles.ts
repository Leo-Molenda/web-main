import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 330px;
  padding: 24px;
`;

export const Logo = styled.img`
  width: 256px;
  height: 256px;
`;

export const LoginText = styled.h1`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;

  color: #007300;
`;

export const ForgotPasswordButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: transparent;
`;

export const ForgotPasswordText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #007300;
`;
