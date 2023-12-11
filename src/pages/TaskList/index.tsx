import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useProjectSelected } from '../../hooks/projectSelected';
import { useAuth } from '../../hooks/auth';
import { useWindowDimensions } from '../../hooks/windowDimensions';

import api from '../../services/api';

import { BackButton } from '../../components/BackButton';
import Input from '../../components/Input';
import { RectangularButton } from '../../components/RectangularButton';

import { TaskButtonCard } from './TaskButtonCard';

import { Container, Logo, TaskCardsList } from './styles';

import { Task } from '../../interfaces/Task';

import LogoImage from '../../assets/shared/logo.png';

interface TasksListToRender {
  date: string;
  tasks: Task[];
}

export function TaskList() {
  const { projectSelected } = useProjectSelected();
  const { user } = useAuth();
  const { height } = useWindowDimensions();
  const navigate = useNavigate();

  const [month, setMonth] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksListToRender, setTasksListToRender] = useState<
    TasksListToRender[]
  >([]);

  useEffect(() => {
    const today = new Date();
    const month = today.getUTCMonth() + 1;
    const year = today.getUTCFullYear();

    setMonth(`${year}-${month}`);
  }, []);

  useEffect(() => {
    if (user.id && month.length > 4) {
      api
        .post('/task/list', {
          userId: user.id,
          month,
        })
        .then(response => {
          setTasks(response.data);
        })
        .catch(error => console.error(error));
    }
  }, [month, user.id]);

  useEffect(() => {
    if (tasks.length > 0) {
      const tasksListToRender: TasksListToRender[] = [];

      tasks.forEach(task => {
        const taskDate = new Date(task.startTime);
        const taskDateFormatted = `${
          taskDate.getUTCDate() < 10
            ? `0${taskDate.getUTCDate()}`
            : taskDate.getUTCDate()
        }/${taskDate.getUTCMonth() + 1}/${taskDate.getUTCFullYear()}`;

        const taskAlreadyExists = tasksListToRender.find(
          task => task.date === taskDateFormatted,
        );

        if (taskAlreadyExists) {
          taskAlreadyExists.tasks.push(task);
        } else {
          tasksListToRender.push({
            date: taskDateFormatted,
            tasks: [task],
          });
        }
      });

      tasksListToRender.sort((a, b) => {
        const aDate = new Date(a.date);
        const bDate = new Date(b.date);

        if (aDate > bDate) {
          return 1;
        }
        if (aDate < bDate) {
          return -1;
        }
        return 0;
      });

      setTasksListToRender(tasksListToRender);
    }
  }, [tasks]);

  return (
    <Container>
      <BackButton />

      <Logo
        src={projectSelected ? projectSelected.logoUrl : LogoImage}
        alt="Logo"
      />

      <Input
        containerStyle={{ width: 333, marginTop: 24 }}
        type="month"
        value={month}
        onChange={e => setMonth(e.target.value)}
      />

      {tasks.length > 0 ? (
        <TaskCardsList windowHeight={height}>
          {tasksListToRender.map((taskToRender, index) => (
            <TaskButtonCard
              key={index}
              containerStyle={{ marginBottom: 8 }}
              date={taskToRender.date}
              onClick={() =>
                navigate('/task-detail', {
                  state: { tasks: taskToRender.tasks },
                })
              }
            />
          ))}
        </TaskCardsList>
      ) : (
        <h3>Nenhuma tarefa feita.</h3>
      )}

      <RectangularButton
      text='Faça a pesquisa'
      onPress={() => {navigate('/search-task')}}
      />

      <RectangularButton
        containerStyle={{ width: 333, marginTop: 24 }}
        text="Adicionar tarefa"
        onPress={() => navigate('/add-task')}
      />
      {user.isAdmin && (
        <RectangularButton
          containerStyle={{ width: 333, marginTop: 2 }}
          text="Adicionar novo usuário"
          onPress={() => navigate('/add-user-to-project')}
        />
      )}
      {user.isAdmin && (
        <RectangularButton
          containerStyle={{
            width: 333,
            marginTop: 2,
            paddingLeft: 4,
            paddingRight: 4,
          }}
          text="Visualizar usuários cadastrados"
          onPress={() => navigate('/users-in-project')}
        />
      )}
    </Container>
  );
}
