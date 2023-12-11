import styled from 'styled-components';

export const Container = styled.button`
  position: absolute;
  top: 24px;
  left: 25%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
`;

export const Text = styled.span`
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

export const Icon = styled.img`
  width: 32px;
  height: 32px;
`;
