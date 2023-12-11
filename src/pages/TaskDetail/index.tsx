import { useLocation } from 'react-router-dom';

import { useProjectSelected } from '../../hooks/projectSelected';
import { useWindowDimensions } from '../../hooks/windowDimensions';

import { RectangularButton } from '../../components/RectangularButton';
import Input from '../../components/Input';

import {
  Container,
  Logo,
  TasksList,
  AdditionalTaskImage,
  DetailButtonContainer,
} from './styles';

import { Task } from '../../interfaces/Task';

import LogoImage from '../../assets/shared/logo.png';
import { useEffect } from 'react';

interface LocationState {
  tasks: Task[];
}

export function TaskDetail() {
  const { projectSelected } = useProjectSelected();
  const { height } = useWindowDimensions();
  const { state } = useLocation();
  const { tasks } = state as LocationState;

  function handleDownloadFile(downloadUrl: string) {
    window.open(downloadUrl);
  }

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <Container>
      <Logo
        src={projectSelected ? projectSelected.logoUrl : LogoImage}
        alt="Logo"
      />

      {tasks.length > 0 ? (
        <TasksList windowHeight={height}>
          {tasks.map((task, index) => {
            if (task.additionalTasks) {
              const startTimeDate = new Date(task.startTime);
              const dateTimeLocalValue = new Date(
                startTimeDate.getTime() -
                  startTimeDate.getTimezoneOffset() * 60000,
              )
                .toISOString()
                .slice(0, -1);

              const endTimeDate = new Date(task.endTime);
              const endTimeLocalValue = new Date(
                endTimeDate.getTime() - endTimeDate.getTimezoneOffset() * 60000,
              )
                .toISOString()
                .slice(0, -1);

              const additionalTasks: JSX.Element[] = [];
              additionalTasks.push(
                <Input
                  containerStyle={{ width: 343, marginBottom: 16 }}
                  label="Data e hora de início"
                  placeholder="Data e hora de início"
                  type="datetime-local"
                  disabled
                  value={dateTimeLocalValue}
                />,
              );
              additionalTasks.push(
                <Input
                  containerStyle={{ width: 343, marginBottom: 16 }}
                  label="Data e hora de término"
                  placeholder="Data e hora de término"
                  type="datetime-local"
                  disabled
                  value={endTimeLocalValue}
                />,
              );
              task.additionalTasks.forEach(additionalTask => {
                let type: string;
                switch (additionalTask.additionalTaskType?.type) {
                  case 'number':
                    type = 'number';
                    break;
                  case 'text':
                    type = 'text';
                    break;
                  case 'boolean':
                    type = 'checkbox';
                    break;
                  case 'date':
                    type = 'datetime-local';
                    break;
                  case 'file':
                    type = 'file';
                    break;
                  default:
                    type = 'text';
                    break;
                }

                if (
                  additionalTask.value === 'file' ||
                  additionalTask.value === 'image'
                ) {
                  let downloadUrl = '';
                  if (
                    process.env.NODE_ENV &&
                    (process.env.REACT_APP_DEV_API_URL ??
                      process.env.REACT_APP_PROD_API_URL) &&
                    additionalTask.fileId
                  ) {
                    const apiURL =
                      process.env.NODE_ENV === 'development'
                        ? process.env.REACT_APP_DEV_API_URL
                        : process.env.REACT_APP_PROD_API_URL;
                    if (apiURL)
                      downloadUrl = `${apiURL}files/${additionalTask.fileId}`;
                  }

                  if (additionalTask.value === 'image') {
                    additionalTasks.push(
                      <DetailButtonContainer key={index}>
                        <label htmlFor="detail-button">
                          {additionalTask.additionalTaskType
                            ? additionalTask.additionalTaskType.name
                            : 'Sem nome'}
                        </label>
                        <AdditionalTaskImage
                          id="detail-button"
                          src={downloadUrl}
                        />
                      </DetailButtonContainer>,
                    );
                  } else {
                    additionalTasks.push(
                      <DetailButtonContainer key={index}>
                        <label htmlFor="detail-button">
                          {additionalTask.additionalTaskType
                            ? additionalTask.additionalTaskType.name
                            : 'Sem nome'}
                        </label>
                        <RectangularButton
                          containerStyle={{ width: 343 }}
                          name="detail-button"
                          text="Baixar arquivo"
                          onPress={() => handleDownloadFile(downloadUrl)}
                        />
                      </DetailButtonContainer>,
                    );
                  }
                } else
                  additionalTasks.push(
                    <Input
                      key={index}
                      containerStyle={{ width: 343, marginBottom: 16 }}
                      label={
                        additionalTask.additionalTaskType
                          ? additionalTask.additionalTaskType.name
                          : ''
                      }
                      placeholder={
                        additionalTask.additionalTaskType
                          ? additionalTask.additionalTaskType.name
                          : ''
                      }
                      type={type}
                      disabled
                      value={additionalTask.value}
                    />,
                  );
              });

              return additionalTasks.map(
                (AdditionalTask, index) => AdditionalTask,
              );
            }

            return <h3 key={index}>Nada aqui :)</h3>;
          })}
        </TasksList>
      ) : (
        <h3 style={{ color: 'black', fontSize: 24 }}>Nada por aqui :)</h3>
      )}
    </Container>
  );
}
