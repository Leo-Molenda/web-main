import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useProjectSelected } from '../../hooks/projectSelected';
import { useWindowDimensions } from '../../hooks/windowDimensions';

import api from '../../services/api';

import { BackButton } from '../../components/BackButton';
import Input from '../../components/Input';
import { RectangularButton } from '../../components/RectangularButton';

import { Container, Logo, UsersFoundList, UserFoundButton } from './styles';

import LogoImage from '../../assets/shared/logo.png';

import { User } from '../../interfaces/User';

export function AddUserToProject() {
  const { projectSelected } = useProjectSelected();
  const { height } = useWindowDimensions();
  const navigate = useNavigate();

  const [userNameToSearch, setUserNameToSearch] = useState('');
  const [usersFound, setUsersFound] = useState<User[]>([]);

  const handleSeacrhUserName = useCallback(async () => {
    const response = await api.get(`/user/search/${userNameToSearch}`);

    if (response.status === 200) setUsersFound(response.data);
    else alert('Nenhum usuário encontrado!');
  }, [userNameToSearch]);

  const handleAddUserToProject = useCallback(
    async (userSelected: User) => {
      if (projectSelected && userSelected.id) {
        if (confirm(`Deseja adicionar o usuário ${userSelected.name}?`)) {
          const response = await api.post('/user/add-user-project', {
            projectId: projectSelected.id,
            userId: userSelected.id,
          });

          if (response.status === 200) {
            alert('Usuário adicionado com sucesso!');
            navigate('/task-list');
          }
        }
      } else {
        alert('Nenhum projeto selecionado!');
      }
    },
    [navigate, projectSelected],
  );

  return (
    <Container>
      <BackButton />

      <Logo
        src={projectSelected ? projectSelected.logoUrl : LogoImage}
        alt="Logo"
      />

      <Input
        containerStyle={{ width: 343, marginTop: 16 }}
        placeholder="Nome do usuário"
        onChange={event => setUserNameToSearch(event.target.value)}
      />

      <RectangularButton
        containerStyle={{ width: 343, marginTop: 16 }}
        text="Pesquisar usuário"
        onPress={async () => await handleSeacrhUserName()}
      />

      {usersFound.length > 0 && (
        <UsersFoundList windowHeight={height}>
          {usersFound.map((user, index) => (
            <UserFoundButton
              key={index}
              data-title="Clique para adicionar o usuário"
              onClick={async () => await handleAddUserToProject(user)}
            >
              {user.name}
            </UserFoundButton>
          ))}
        </UsersFoundList>
      )}
    </Container>
  );
}
