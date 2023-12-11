import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';
import { RectangularButton } from '../../components/RectangularButton';

import {
  Container,
  Form,
  Logo,
  RegisterNewAccountText,
  inputContainer,
} from './styles';

import LogoImage from '../../assets/shared/logo.png';

export function SignUp() {
  const { signUp, isLoading } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  async function onSubmit(name: string, email: string, password: string) {
    await signUp(name, email, password);
  }

  return (
    <Container>
      <Form>
        <Logo src={LogoImage} />

        <RegisterNewAccountText>Cadastre-se</RegisterNewAccountText>

        <Input
          containerStyle={{
            ...inputContainer,
            marginTop: 24,
          }}
          placeholder="Nome"
          type="text"
          autoComplete="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          containerStyle={inputContainer}
          placeholder="E-mail"
          type="email"
          autoComplete="new-email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          containerStyle={inputContainer}
          placeholder="Senha"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Input
          containerStyle={inputContainer}
          placeholder="Confirmar senha"
          type="password"
          autoComplete="new-password"
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.target.value)}
        />

        <RectangularButton
          containerStyle={{ width: '100%', marginTop: 24 }}
          text="Cadastrar"
          isLoading={isLoading}
          onPress={async () => await onSubmit(name, email, password)}
        />
      </Form>
    </Container>
  );
}
