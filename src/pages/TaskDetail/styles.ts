import styled from 'styled-components';

interface TasksListProps {
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
  margin-bottom: 24px;
`;

export const TasksList = styled.div<TasksListProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  max-height: ${props => props.windowHeight * 0.6}px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AdditionalTaskImage = styled.img`
  width: 171.5px;
  height: 171.5px;

  object-fit: cover;

  border-radius: 12px;
  border: 1px solid #e6e6f0;

  margin-top: 8px;
  margin-bottom: 16px;
`;

export const DetailButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  label {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #007300;

    margin-bottom: -8px;
  }
`;
