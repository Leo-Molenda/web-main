import { useNavigate } from 'react-router-dom';

import { Container, Text, Icon } from './styles';

import ArrowLeftIcon from '../../assets/shared/arrow_back.svg';
import { ButtonHTMLAttributes } from 'react';

interface BackButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function BackButton({ ...rest }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(-1)} {...rest}>
      <Icon src={ArrowLeftIcon} />
      <Text>Voltar</Text>
    </Container>
  );
}
