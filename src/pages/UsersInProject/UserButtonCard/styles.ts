import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;

  margin: 8px;
`;

export const InfoContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 16px;

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

export const CloseButton = styled.button`
  position: absolute;
  right: calc(50% - 243px);

  width: 24px;
  height: 24px;

  border: none;
  cursor: pointer;
  background: transparent;

  margin-left: 16px;

  img {
    width: 24px;
    height: 24px;
  }
`;
