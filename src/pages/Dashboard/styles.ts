import styled from 'styled-components';

interface ProjectsListProps {
  windowHeight: number;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.h1`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

  margin-top: 44px;
`;

export const EditProfile = styled.a`
  font-family: 'Inter';
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #007300;

  margin-bottom: 24px;

  cursor: pointer;
`;

export const ProjectList = styled.div<ProjectsListProps>`
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

export const EmptyProjects = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #007300;

  margin-top: 24px;
  margin-bottom: 32px;
`;
