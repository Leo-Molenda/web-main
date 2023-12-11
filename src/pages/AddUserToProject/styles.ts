import styled from 'styled-components';

interface UsersFoundListProps {
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
  width: 256px;
  height: 256px;
  border-radius: 50%;

  margin-top: 64px;
`;

export const UsersFoundList = styled.div<UsersFoundListProps>`
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

export const UserFoundButton = styled.button`
  position: relative;

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

  width: 343px;

  margin-top: 22px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  color: #007300;

  &::after {
    content: attr(data-title);
    position: absolute;
    background: #444;
    color: #fff;
    left: 0;
    bottom: 100%;
    font-size: 12px;
    width: 200px;
    padding: 5px;
    border-radius: 4px;
    transition: 300ms;
    opacity: 0;
    pointer-events: none;
    transform: translateY(15px);
  }

  &:hover::after {
    opacity: 1;
    transform: translateY(5px);
  }
`;
