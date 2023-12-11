import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 328px;
  height: 51px;

  background: #e8e8e8;
  border-radius: 14px;

  border: none;
  outline: none;
  cursor: pointer;
`;

export const InfoText = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #007300;
`;
