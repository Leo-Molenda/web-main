import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import api from '../../services/api';

import { useProjectSelected } from '../../hooks/projectSelected';
import { useWindowDimensions } from '../../hooks/windowDimensions';

import { BackButton } from '../../components/BackButton';
import { RectangularButton } from '../../components/RectangularButton';
import Input from '../../components/Input';

import { UserButtonCard } from './UserButtonCard';

import { Container, Logo, UsersList, ChooseDateRangeTitle } from './styles';

import LogoImage from '../../assets/shared/logo.png';

interface User {
  id: string;
  name: string;
}

export function UsersInProject() {
  const { projectSelected } = useProjectSelected();
  const { height } = useWindowDimensions();
  const navigation = useNavigate();

  const [users, setUsers] = useState<User[]>([]);
  const [isDateRangeModalOpen, setIsDateRangeModalOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const getUsersInProject = useCallback(() => {
    if (projectSelected)
      api
        .get(`/project/users/${projectSelected.id}`)
        .then(response => setUsers(response.data))
        .catch(err => console.log(err));
  }, [projectSelected]);

  const handleRemoveUserInProject = useCallback(
    (user: User) => {
      console.log('projectId:', projectSelected?.id);
      if (confirm(`Voce deseja remover o usuário ${user.name} do projeto?`)) {
        api
          .post('/user/remove-user-project', {
            projectId: projectSelected ? projectSelected.id : '',
            userId: user.id,
          })
          .then(response => {
            if (response.status === 200) {
              getUsersInProject();
              alert(`Usuário ${user.name} removido com sucesso.`);
            } else
              alert(
                `Erro ao tentar remover o usuário ${user.name} do projeto. Tente novamente mais tarde.`,
              );
          })
          .catch(error => console.error(error));
      }
    },
    [getUsersInProject, projectSelected],
  );

  const handleOpenUserSelected = useCallback(
    (user: User) => {
      navigation('/user-in-project', { state: { user } });
    },
    [navigation],
  );

  const handleGenerateCSV = useCallback(() => {
    if (projectSelected)
      api
        .post('/project/csv', {
          projectId: projectSelected.id,
          startTime: new Date(startDate),
          endTime: new Date(endDate),
        })
        .then(response => {
          if (response.status === 200) window.open(response.data, '_blank');
        })
        .catch(err => console.error(err));
  }, [endDate, projectSelected, startDate]);

  useEffect(() => {
    getUsersInProject();
  }, [getUsersInProject]);

  return (
    <Container>
      <BackButton />

      <Logo src={projectSelected ? projectSelected.logoUrl : LogoImage} />

      <RectangularButton
        containerStyle={{ marginTop: 24 }}
        text="Gerar CSV"
        onPress={() => setIsDateRangeModalOpen(true)}
      />

      {users.length > 0 ? (
        <UsersList windowHeight={height}>
          {users.map(user => (
            <UserButtonCard
              key={user.id}
              user={user}
              onClick={() => handleOpenUserSelected(user)}
              onRemove={() => handleRemoveUserInProject(user)}
            />
          ))}
        </UsersList>
      ) : (
        <h3>Nenhum usuário cadastrado no projeto</h3>
      )}

      <Modal
        isOpen={isDateRangeModalOpen}
        onRequestClose={() => setIsDateRangeModalOpen(false)}
        shouldCloseOnEsc
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
      >
        <ChooseDateRangeTitle>Escolha o intervalo</ChooseDateRangeTitle>

        <Input
          containerStyle={{ width: 343, marginBottom: 16 }}
          placeholder="Data de início"
          type="date"
          onChange={e => setStartDate(e.target.value)}
        />
        <Input
          containerStyle={{ width: 343, marginBottom: 16 }}
          placeholder="Data de término"
          type="date"
          onChange={e => setEndDate(e.target.value)}
        />

        <RectangularButton
          containerStyle={{ marginTop: 24 }}
          text="Gerar CSV"
          onPress={handleGenerateCSV}
        />
      </Modal>
    </Container>
  );
}
