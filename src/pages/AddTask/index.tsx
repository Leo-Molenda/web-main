import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';

import { useProjectSelected } from '../../hooks/projectSelected';
import { useWindowDimensions } from '../../hooks/windowDimensions';

import { BackButton } from '../../components/BackButton';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import { RectangularButton } from '../../components/RectangularButton';

import { Container, Logo, TasksTypeList } from './styles';

import { AdditionalTaskType } from '../../interfaces/AdditionalTaskType';
import { AdditionalTask } from '../../interfaces/AdditionalTask';

import LogoImage from '../../assets/shared/logo.png';

interface Task {
  startTime: string;
  endTime: string;

  additionalTasks: AdditionalTask[];
}

export function AddTask() {
  const { projectSelected } = useProjectSelected();
  const { height } = useWindowDimensions();
  const navigate = useNavigate();

  const [startTime, setStartTime] = useState(new Date().toISOString());
  const [endTime, setEndTime] = useState(new Date().toISOString());
  const [additionalTaskType, setAdditionalTaskType] = useState<
    AdditionalTaskType[]
  >([]);
  const [additionalTasks, setAdditionalTasks] = useState<AdditionalTask[]>([]);
  const [files, setFiles] = useState<Array<{ id: number; file: File }>>([]);
  const [textAreaLength, setTextAreaLength] = useState(0);

  const handleAddAdditionalTask = useCallback(
    (
      additionalTaskType: AdditionalTaskType,
      additionalTaskId: number,
      value: string,
      fileList: FileList | undefined,
    ) => {
      if (additionalTaskType.id && value.length > 0) {
        if (additionalTasks[additionalTaskId]) {
          additionalTasks[additionalTaskId].additionalTaskTypeId =
            additionalTaskType.id;
          additionalTasks[additionalTaskId].value = value;

          if (fileList) {
            const fileIndex = files.findIndex(
              file => file.id === additionalTaskId,
            );
            files[fileIndex].file = fileList[0];
          }
        } else {
          const additionalTask: AdditionalTask = {
            additionalTaskTypeId: additionalTaskType.id,
            value,
          };

          setAdditionalTasks(oldTasks => [...oldTasks, additionalTask]);

          if (fileList) {
            const newFile = {
              id: additionalTaskId,
              file: fileList[0],
            };

            setFiles(oldFiles => [...oldFiles, newFile]);
          }
        }
      } else {
        console.error(
          `Erro ao adicionar tarefa do tipo: ${
            additionalTaskType.name ? additionalTaskType.name : 'undefined'
          } e valor ${value}`,
        );
      }
    },
    [additionalTasks, files],
  );

  const handleSubmitTasks = useCallback(async () => {
    if (projectSelected) {
      const data = new FormData();

      files.forEach(file => {
        data.append('file', file.file);
      });
      console.log(data.getAll('file'));

      const task: Task = {
        startTime,
        endTime,
        additionalTasks,
      };

      data.append(
        'data',
        JSON.stringify({
          projectId: projectSelected.id,
          task,
        }),
      );

      const response = await api.post('/task/create', data);

      if (response.status === 201) {
        alert('Tarefa adicionada com sucesso!');
        navigate('/task-list');
      }
    } else {
      alert('Erro ao adicionar a tarefa. ID do projeto não encontrado.');
    }
  }, [additionalTasks, endTime, files, navigate, projectSelected, startTime]);

  useEffect(() => {
    if (projectSelected) {
      api
        .post(`/additionalTaskType/list/${projectSelected.id}`)
        .then(response => {
          setAdditionalTaskType(response.data);
        })
        .catch(error => console.error(error));
    }
  }, [projectSelected]);

  return (
    <Container>
      <BackButton />

      <Logo
        src={projectSelected ? projectSelected.logoUrl : LogoImage}
        alt="Logo"
      />

      <TasksTypeList windowHeight={height}>
        <Input
          containerStyle={{ width: 343, marginBottom: 16 }}
          label="Data e hora de início"
          placeholder="Data e hora de início"
          type="datetime-local"
          value={startTime}
          onChange={e => setStartTime(e.target.value)}
        />
        <Input
          containerStyle={{ width: 343, marginBottom: 16 }}
          label="Data e hora de término"
          placeholder="Data e hora de término"
          type="datetime-local"
          value={endTime}
          onChange={e => setEndTime(e.target.value)}
        />
        {additionalTaskType.map((addiTionalTaskType, index) => {
          let type: string;
          switch (addiTionalTaskType.type) {
            case 'number':
              type = 'number';
              break;
            case 'string':
              type = 'textarea';
              break;
            case 'boolean':
              type = 'checkbox';
              break;
            case 'date':
              type = 'datetime-local';
              break;
            case 'image':
              type = 'image';
              break;
            case 'file':
              type = 'file';
              break;
            default:
              type = 'text';
              break;
          }

          if (type === 'textarea')
            return (
              <TextArea
                key={index}
                containerStyle={{ width: 343, marginBottom: 24 + 8 }}
                label={addiTionalTaskType.name}
                placeholder={addiTionalTaskType.name}
                onChange={e => {
                  setTextAreaLength(e.target.value.length);
                  if (e.target.value.length <= 300)
                    handleAddAdditionalTask(
                      addiTionalTaskType,
                      index,
                      e.target.value,
                      undefined,
                    );
                }}
                maxLength={300}
                limitCaracters={300}
                length={textAreaLength}
              />
            );

          return (
            <Input
              key={index}
              containerStyle={{ width: 343, marginBottom: 8 }}
              label={addiTionalTaskType.name}
              placeholder={addiTionalTaskType.name}
              type={type !== 'image' ? type : 'file'}
              onChange={e => {
                if ((type === 'file' || type === 'image') && e.target.files)
                  handleAddAdditionalTask(
                    addiTionalTaskType,
                    index,
                    type,
                    e.target.files,
                  );
                else
                  handleAddAdditionalTask(
                    addiTionalTaskType,
                    index,
                    e.target.value,
                    undefined,
                  );
              }}
            />
          );
        })}
      </TasksTypeList>

      <RectangularButton
        containerStyle={{ width: 343, marginTop: 16 }}
        text="Adicionar tarefa"
        onPress={async () => await handleSubmitTasks()}
      />
    </Container>
  );
}
