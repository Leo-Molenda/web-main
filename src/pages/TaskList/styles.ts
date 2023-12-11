import styled from 'styled-components';

interface TaskCardsListProps {
  windowHeight: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: 100vh;

  padding-bottom: 32px;
`;

export const Logo = styled.img`
  width: 184px;
  height: 184px;
  border-radius: 50%;

  margin-top: 32px;
`;

export const TaskCardsList = styled.div<TaskCardsListProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  max-height: ${props => props.windowHeight * 0.6}px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
