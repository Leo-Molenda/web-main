import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 120vh;
  align-items: center;

  padding-bottom: 32px;
`;

export const Title = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #007300;

  margin-top: 32px;
  margin-bottom: 24px;
`;

export const DropzoneFIleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 172px;
  height: 172px;

  background: #f6f6f6;
  border: 1px solid #bdbdbd;
  border-radius: 8px;

  margin-bottom: 16px;

  cursor: pointer;

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 44px;
    text-align: center;
    color: #007300;
  }
`;

export const PreviewImage = styled.img`
  width: 172px;
  height: 172px;

  border-radius: 8px;

  object-fit: cover;
`;
