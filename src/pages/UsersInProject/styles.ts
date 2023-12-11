import styled from 'styled-components';

interface UsersListProps {
  windowHeight: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: 100vh;
`;

export const Logo = styled.img`
  width: 184px;
  height: 184px;
  border-radius: 50%;

  margin-top: 32px;
`;

export const UsersList = styled.div<UsersListProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  max-height: ${props => props.windowHeight * 0.6}px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ChooseDateRangeTitle = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 44px;
  text-align: center;
  color: #007300;

  margin-bottom: 16px;
`;
