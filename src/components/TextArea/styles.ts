import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  hasMaxLength: boolean;
}

export const Label = styled.label`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #007300;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  flex-direction: row;
  position: relative;

  border: 1px solid #aab0b7;
  border-radius: 8px;

  ${props => props.hasMaxLength && 'margin-bottom: 24px;'}

  transition: 0.35s;

  ${props =>
    props.isFocused &&
    css`
      transition: 0.35s;
      border: 3px solid #007300;
    `}
`;

export const TextAreaInput = styled.textarea`
  display: flex;
  flex: 1;
  width: 100%;
  background: transparent;
  border: 0;
  box-sizing: border-box;

  color: black;

  padding: 8px 8px 8px 16px;

  font-size: 16px;
`;

export const IconInputContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const IconInput = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 16px;
`;

export const Length = styled.span`
  position: absolute;
  right: 8px;
  bottom: -24px;
  font-size: 14px;
  color: black;
`;
