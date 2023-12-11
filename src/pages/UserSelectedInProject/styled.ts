import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Logo = styled.img`
  width: 184px;
  height: 184px;
  border-radius: 50%;

  margin-top: 32px;
`;

export const Info = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #007300;
`;
