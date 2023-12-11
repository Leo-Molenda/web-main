import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';

import Input from '../../components/Input';
import { RectangularButton } from '../../components/RectangularButton';

import { Container, Form, Logo, ForgotPasswordText } from './styles';

import LogoImage from '../../assets/shared/logo.png';

export function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  async function onSubmit(email: string) {
    if (email.length <= 0) {
      toast.error('Nenhum e-mail inserido.', { autoClose: 3000 });
      return;
    }

    setIsLoading(true);
    const toastyId = toast.loading(
      'Carregando requisição de redefinição de senha...',
    );

    const response = await api.post('/user/forgot-password', {
      email,
    });

    if (response.status === 200) {
      toast.update(toastyId, {
        render: 'Um e-mail foi enviado para você.',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });
    } else {
      toast.update(toastyId, {
        render: 'Erro ao tentar requisitar redefinição de senha!',
        type: 'error',
        isLoading: false,
        autoClose: false,
      });
    }

    setIsLoading(false);
  }

  return (
    <Container>
      <Form>
        <Logo src={LogoImage} />

        <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
        <ForgotPasswordText>
          Envie seu e-mail cadastrado para recuperar a senha
        </ForgotPasswordText>

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

        <RectangularButton
          containerStyle={{ width: '100%', maxWidth: 343, marginTop: 24 }}
          text="Entrar"
          isLoading={isLoading}
          onPress={async () => await onSubmit(email)}
        />
      </Form>

      <ToastContainer />
    </Container>
  );
}
