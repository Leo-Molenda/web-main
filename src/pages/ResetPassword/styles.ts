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
  padding: 24px;
`;

export const Logo = styled.img`
  width: 256px;
  height: 256px;
`;

export const ResetPasswordText = styled.h1`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;

  color: #007300;
`;

export const Success = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SuccessIcon = styled.img`
  width: 86px;
  height: 86px;

  margin-top: 8px;
  margin-bottom: 16px;
`;

export const SuccessText = styled.p`
  font-family: 'Inter';
  font-weight: 900;
  font-size: 36px;
  line-height: 44px;
  text-align: center;

  color: #007300;
`;
