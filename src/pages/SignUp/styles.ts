import styled from 'styled-components';
import { CSSProperties } from 'react';

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

export const RegisterNewAccountText = styled.h1`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;

  color: #007300;
`;

export const inputContainer: CSSProperties = {
  maxWidth: 343,
  marginTop: 8,
  marginBottom: 8,
};
