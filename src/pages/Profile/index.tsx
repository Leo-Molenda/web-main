import toast, { Toaster } from 'react-hot-toast';

import { useAuth } from '../../hooks/auth';

import { BackButton } from '../../components/BackButton';
import Input from '../../components/Input';
import { RectangularButton } from '../../components/RectangularButton';

import { Container } from './styles';

import CopyContentIcon from '../../assets/profile/content_copy.svg';

export function Profile() {
  const { user, signOut } = useAuth();

  async function handleCopyContent() {
    await navigator.clipboard.writeText(user.id);

    toast('ID copiado', {
      duration: 4000,
      position: 'top-center',
      icon: '📋',
    });
  }

  return (
    <Container>
      <BackButton />

      <Input
        containerStyle={{ width: 328, marginBottom: 16 }}
        placeholder="Nome"
        value={user.name}
      />
      <Input
        containerStyle={{ width: 328, marginBottom: 24 }}
        placeholder="ID"
        value={user.id}
        disabled
        onClick={async () => await handleCopyContent()}
        iconSource={CopyContentIcon}
        iconCallback={async () => await handleCopyContent()}
      />
      <RectangularButton containerStyle={{ width: 328 }} text="Salvar" />
      <RectangularButton
        containerStyle={{ width: 328, backgroundColor: '#8E1600' }}
        text="Sair"
        onPress={signOut}
      />

      <Toaster />
    </Container>
  );
}
