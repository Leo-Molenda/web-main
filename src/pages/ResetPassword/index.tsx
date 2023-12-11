import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';

import Input from '../../components/Input';
import { RectangularButton } from '../../components/RectangularButton';

import {
  Container,
  Form,
  Logo,
  ResetPasswordText,
  Success,
  SuccessIcon,
  SuccessText,
} from './styles';

import LogoImage from '../../assets/shared/logo.png';
import SuccessImage from '../../assets/resetpassword/checked.svg';

export function ResetPassword() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [id, setId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [isPasswordResetSuccess, setIsPasswordResetSuccess] = useState(false);

  const onSubmit = useCallback(async () => {
    if (password !== confirmPassword) {
      toast.error('As senhas não conferem', { autoClose: 3000 });
      return;
    } else if (password.length < 6) {
      toast.error('A senha deve ter no mínimo 6 caracteres', {
        autoClose: 3000,
      });
      return;
    } else if (!id || !token) {
      toast.error('Não foi possível recuperar o ID do usuário', {
        autoClose: 3000,
      });
      return;
    }

    setIsLoading(true);
    const toastyId = toast.loading('Carregando redefinição de senha...');

    const response = await api.post('/users/reset-password', {
      id,
      token,
      password,
    });

    if (response.status === 200) {
      toast.update(toastyId, {
        render: 'Senha redefinida com sucesso!',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });
      setIsPasswordResetSuccess(true);
    } else {
      toast.update(toastyId, {
        render: 'Erro ao redefinir senha!',
        type: 'error',
        isLoading: false,
        autoClose: false,
      });
      setIsPasswordResetSuccess(false);
    }

    setIsLoading(false);
  }, [id, token, password, confirmPassword]);

  useEffect(() => {
    setId(searchParams.get('id'));
    setToken(searchParams.get('token'));
  }, [searchParams]);

  return (
    <Container>
      {isPasswordResetSuccess ? (
        <Success>
          <Logo src={LogoImage} />
          <SuccessIcon src={SuccessImage} />
          <SuccessText>Sua senha foi redefinida com sucesso</SuccessText>
        </Success>
      ) : (
        <Form>
          <Logo src={LogoImage} />

          <ResetPasswordText>Definir nova senha</ResetPasswordText>

          <Input
            containerStyle={{
              maxWidth: 343,
              marginTop: 24,
              marginBottom: 8,
            }}
            placeholder="Nova senha"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          <Input
            containerStyle={{
              maxWidth: 343,
              marginTop: 8,
            }}
            placeholder="Confirmar nova senha"
            type="password"
            onChange={e => setConfirmPassword(e.target.value)}
          />

          <RectangularButton
            containerStyle={{ width: '100%', marginTop: 24 }}
            text="Redefinir senha"
            isLoading={isLoading}
            onPress={async () => await onSubmit()}
          />
        </Form>
      )}

      <ToastContainer />
    </Container>
  );
}
