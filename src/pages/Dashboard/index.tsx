import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';

import { useWindowDimensions } from '../../hooks/windowDimensions';
import { useAuth } from '../../hooks/auth';
import { useProjectSelected } from '../../hooks/projectSelected';

import { ProjectCard } from './ProjectCard';

import { RectangularButton } from '../../components/RectangularButton';

import {
  Container,
  Name,
  EditProfile,
  ProjectList,
  EmptyProjects,
} from './styles';

import { Project } from '../../interfaces/Project';

export function Dashboard() {
  const { height } = useWindowDimensions();
  const { user, signOut } = useAuth();
  const { setProjectSelectedId } = useProjectSelected();
  const navigation = useNavigate();

  const [projects, setProjects] = useState<Project[]>([]);

  function handleProjectSelected(id: string) {
    setProjectSelectedId(id);
    navigation('/task-list');
  }

  useEffect(() => {
    api
      .get(`/project/${user.id}`)
      .then(response => {
        if (response.data.length > 0) {
          setProjects(response.data);
        }
      })
      .catch(error => console.error(error));
  }, [user.id]);

  return (
    <Container>
      <Name>Olá, {user.name}</Name>
      <EditProfile href="/profile">Editar perfil</EditProfile>

      {projects.length > 0 ? (
        <ProjectList windowHeight={height}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              logoUrl={project.logoUrl}
              onClick={() => handleProjectSelected(project.id)}
            />
          ))}
        </ProjectList>
      ) : (
        <EmptyProjects>Você não possui nenhum projeto</EmptyProjects>
      )}

      {user.isAdmin && (
        <RectangularButton
          containerStyle={{ width: 328 }}
          text="Criar novo projeto"
          onPress={() => navigation('/create-project')}
        />
      )}
      {user.isAdmin && (
        <RectangularButton
          containerStyle={{ width: 328 }}
          text="Tornar usuário administrador"
          onPress={() => navigation('/make-user-admin')}
        />
      )}
      {
        <RectangularButton
          containerStyle={{ width: 328 }}
          text="Faça uma pesquisa"
          onPress={() => navigation('/search-task')}
        />
      }
      <RectangularButton
        containerStyle={{
          width: 328,
          backgroundColor: '#8E1600',
          marginTop: 32,
        }}
        text="Sair"
        onPress={signOut}
      />
    </Container>
  );
}
