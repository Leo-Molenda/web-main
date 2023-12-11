import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Highcharts, { Options } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import exportingModule from 'highcharts/modules/exporting';
import exportDataModule from 'highcharts/modules/export-data';

import { useProjectSelected } from '../../hooks/projectSelected';

import api from '../../services/api';

import { BackButton } from '../../components/BackButton';
import { RectangularButton } from '../../components/RectangularButton';

import { Container, Logo, Info } from './styled';

import LogoImage from '../../assets/shared/logo.png';

import { Task } from '../../interfaces/Task';

exportingModule(Highcharts);
exportDataModule(Highcharts);

interface State {
  user: {
    id: string;
    name: string;
  };
}

interface TasksListToRender {
  date: string;
  tasks: Task[];
}

export function UserSelectedInProject() {
  const { projectSelected } = useProjectSelected();
  const { state } = useLocation();
  const { user } = state as State;

  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [options, setOptions] = useState<Options>({
    title: {
      text: 'Horas trabalhadas por dia',
    },

    yAxis: {
      title: {
        text: 'Horas',
      },
    },

    xAxis: {
      categories: [
        '07/11',
        '08/11',
        '09/11',
        '10/11',
        '11/11',
        '12/11',
        '13/11',
      ],
    },

    series: [
      {
        name: 'Horas',
        type: 'line',
        data: [1, 2, 3, 1, 2, 3],
      },
    ],
  });

  const downloadXLSX = useCallback(() => {
    if (
      chartComponentRef &&
      chartComponentRef.current &&
      chartComponentRef.current.chart
    ) {
      chartComponentRef.current.chart.downloadXLS();
    } else {
      console.log('chart not ready');
    }
  }, [chartComponentRef]);

  useEffect(() => {
    api
      .post('/task/tasks-from-user-in-project', {
        userId: user.id,
        projectId: projectSelected?.id,
      })
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, [projectSelected?.id, user.id]);

  useEffect(() => {
    if (tasks.length > 0) {
      const tasksListToRender: TasksListToRender[] = [];

      tasks.forEach(task => {
        const taskDate = new Date(task.startTime);
        const taskDateFormatted = `${taskDate.getUTCDate()}/${
          taskDate.getUTCMonth() + 1
        }/${taskDate.getUTCFullYear()}`;

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

      setOptions({
        title: {
          text: 'Horas trabalhadas por dia',
        },

        yAxis: {
          title: {
            text: 'Horas',
          },
        },

        xAxis: {
          categories: tasksListToRender.map(task => task.date),
        },

        series: [
          {
            name: 'Horas',
            type: 'line',
            data: tasksListToRender.map(task => {
              let totalHours = 0;
              task.tasks.forEach(t => {
                const startTime = new Date(t.startTime).getTime();
                const endTime = new Date(t.endTime).getTime();

                totalHours += endTime - startTime;
              });

              return totalHours / 1000 / 60 / 60;
            }),
          },
        ],

        exporting: {
          csv: {
            columnHeaderFormatter: function (item: any, key: any) {
              if (!item || item instanceof Highcharts.Axis) {
                return 'Dia';
              } else {
                return item.name;
              }
            },
          },
        },
      });
    }
  }, [tasks]);

  return (
    <Container>
      <BackButton />

      <Logo src={projectSelected ? projectSelected.logoUrl : LogoImage} />

      <Info style={{ marginTop: 16 }}>{user.id}</Info>
      <Info style={{ marginBottom: 8 }}>{user.name}</Info>

      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />

      <RectangularButton
        containerStyle={{ marginTop: 8 }}
        text="Baixar Planilha"
        onPress={downloadXLSX}
      />
    </Container>
  );
}
