import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import { RectangularButton } from '../../components/RectangularButton';

import {
  Container,
  Form,
  Logo,
  LoginText,
  ForgotPasswordButton,
  ForgotPasswordText,
} from './styles';

import LogoImage from '../../assets/shared/logo.png';

export function SignIn() {
  const { signIn, isLoading } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit(email: string, password: string) {
    await signIn(email, password);
  }

  function handleForgotPassword() {
    navigate('/forgot-password');
  }

  return (
    <Container>
      <Form>
        <Logo src={LogoImage} />

        <LoginText>Faça seu login</LoginText>

        <Input
          containerStyle={{
            maxWidth: 343,
            marginTop: 24,
            marginBottom: 8,
          }}
          placeholder="E-mail"
          type="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          containerStyle={{
            maxWidth: 343,
            marginTop: 8,
            marginBottom: 8,
          }}
          placeholder="Senha"
          type="password"
          autoComplete="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <RectangularButton
          containerStyle={{ width: '100%', marginTop: 24 }}
          text="Entrar"
          isLoading={isLoading}
          onPress={async () => await onSubmit(email, password)}
        />

        <ForgotPasswordButton onClick={handleForgotPassword}>
          <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
        </ForgotPasswordButton>

        <RectangularButton
          containerStyle={{ width: '100%', marginTop: 24 }}
          text="Cadastrar-se"
          onPress={() => navigate('/signup')}
        />
      </Form>
    </Container>
  );
}
