import { ButtonHTMLAttributes, CSSProperties } from 'react';

import { Container, InfoText } from './styles';

interface TaskCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  containerStyle?: CSSProperties;
  date: string;
}

export function TaskButtonCard({
  containerStyle,
  date,
  ...rest
}: TaskCardProps) {
  return (
    <Container style={containerStyle} {...rest}>
      <InfoText>Dia: {date}</InfoText>
    </Container>
  );
}
