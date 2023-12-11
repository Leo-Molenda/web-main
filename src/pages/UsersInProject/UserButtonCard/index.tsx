import { ButtonHTMLAttributes, CSSProperties, useState } from 'react';

import { Container, InfoContainer, InfoText, CloseButton } from './styles';

import CloseImg from '../../../assets/createproject/close.svg';

interface UserCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  containerStyle?: CSSProperties;
  user: {
    id: string;
    name: string;
  };
  onRemove?: () => void;
}

export function UserButtonCard({
  containerStyle,
  user,
  onRemove,
  ...rest
}: UserCardProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Container
      style={containerStyle}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <InfoContainer {...rest}>
        <InfoText>ID: {user.id}</InfoText>
        <InfoText style={{ marginTop: 8 }}>{user.name}</InfoText>
      </InfoContainer>

      {isMouseOver && (
        <CloseButton onClick={onRemove}>
          <img src={CloseImg} alt="Remover usuário" />
        </CloseButton>
      )}
    </Container>
  );
}
