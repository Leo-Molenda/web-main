import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  color: white;
  background-color: #007300;

  border-radius: 10px;
  border: none;

  transition: 0.5s;

  &:hover {
    background: ${shade(0.2, '#007300')};
    text-decoration: none;
  }

  &:active {
    background-position: left center;
  }

  .loading {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonText = styled.span`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #ffffff;
`;

export const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;

  margin-left: 8px;
`;
