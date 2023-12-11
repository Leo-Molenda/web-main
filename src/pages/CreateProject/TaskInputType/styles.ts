import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 344px;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: calc(50% - 172px - 32px);

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
