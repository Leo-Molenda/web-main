import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  padding: 24px;
  background-color: #e8e8e8;
  border: none;
  border-radius: 14px;

  min-width: 328px;
  height: 90px;

  margin-bottom: 16px;
`;

export const ProjectName = styled.span`
  font-family: 'Inter';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;

  margin-left: auto;
  margin-right: auto;
`;

export const ProjectImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;
