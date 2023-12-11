import { useState } from 'react';

import api from '../../services/api';

import { BackButton } from '../../components/BackButton';
import Input from '../../components/Input';
import { RectangularButton } from '../../components/RectangularButton';

import { Container } from './styles';

export function MakeUserAdmin() {
  const [userId, setUserId] = useState('');

  async function handleMakeUserAdmin(userId: string) {
    if (userId) {
      try {
        const response = await api.post('/user/make-user-admin', { userId });

        if (response.status === 200) {
          alert('Usuário promovido a administrador com sucesso!');
        } else {
          alert('Não foi possível promover o usuário a administrador');
        }
      } catch (error) {
        alert('Não foi possível promover o usuário a administrador.');
        console.error(error);
      }
    }
  }

  return (
    <Container>
      <BackButton />

      <Input
        containerStyle={{ width: 328, marginBottom: 16 }}
        placeholder="ID do usuário"
        onChange={e => setUserId(e.target.value)}
      />
      <RectangularButton
        containerStyle={{ width: 328 }}
        text="Tornar administrador"
        onPress={async () => await handleMakeUserAdmin(userId)}
      />
    </Container>
  );
}
