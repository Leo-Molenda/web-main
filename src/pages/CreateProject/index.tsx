import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

import api from '../../services/api';

import { BackButton } from '../../components/BackButton';
import Input from '../../components/Input';
import { RectangularButton } from '../../components/RectangularButton';

import { TaskInputType } from './TaskInputType';

import {
  Container,
  Title,
  DropzoneFIleContainer,
  PreviewImage,
} from './styles';

import PhotosIcon from '../../assets/createproject/photos.svg';

import { AdditionalTaskType } from '../../interfaces/AdditionalTaskType';

export function CreateProject() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File>();
  const [additionalTaskTypes, setAdditionalTaskTypes] = useState<
    AdditionalTaskType[]
  >([]);

  const handleRemoveAdditionalTask = useCallback((index: number) => {
    setAdditionalTaskTypes(oldInputs =>
      oldInputs.filter((_, i) => i !== index),
    );
  }, []);

  const handleAddAdditionalTask = useCallback(() => {
    setAdditionalTaskTypes(oldInputs => [
      ...oldInputs,
      {
        name: undefined,
        type: undefined,
      },
    ]);
  }, []);

  function onDrop(acceptedFiles: any) {
    acceptedFiles.forEach((file: any) => {
      setImageUrl(URL.createObjectURL(file));
      setImageFile(file);
    });
  }
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const submitNewProject = useCallback(async () => {
    if (!name || !department || !imageFile) {
      alert('Preencha todos os campos!');
      return;
    }

    let isAdditionalTasksValid = true;
    additionalTaskTypes.forEach(additionalTask => {
      if (!additionalTask.name || !additionalTask.type)
        isAdditionalTasksValid = false;
    });
    if (!isAdditionalTasksValid) {
      alert('Alguma tarefa adicional está em branco!');
      return;
    }

    const formData = new FormData();
    formData.append(
      'data',
      JSON.stringify({ name, department, additionalTaskTypes }),
    );
    formData.append('image', imageFile);

    const response = await api.post('/project/create', formData);

    if (response.status === 201) {
      alert('Projeto criado com sucesso!');
      navigate('/dashboard');
    } else alert('Erro ao criar projeto');
  }, [name, department, imageFile, additionalTaskTypes, navigate]);

  return (
    <Container>
      <BackButton style={{ position: 'relative', alignSelf: 'flex-start' }} />

      <Title>Adicionar novo projeto</Title>

      <Input
        containerStyle={{ width: 344, marginBottom: 16 }}
        style={{ height: 44 }}
        placeholder="Nome"
        onChange={e => setName(e.target.value)}
      />

      <Input
        containerStyle={{ width: 344, marginBottom: 16 }}
        style={{ height: 44 }}
        placeholder="Departamento"
        onChange={e => setDepartment(e.target.value)}
      />

      <DropzoneFIleContainer {...getRootProps()}>
        {imageUrl ? (
          <PreviewImage src={imageUrl} />
        ) : (
          <>
            <input {...getInputProps()} />
            <p>Adicionar imagem</p>
            <img src={PhotosIcon} alt="Adicionar foto" />
          </>
        )}
      </DropzoneFIleContainer>

      <RectangularButton
        containerStyle={{ width: 344 }}
        text="Adicionar entrada da dados"
        onPress={handleAddAdditionalTask}
      />

      <TaskInputType
        containerStyle={{ marginBottom: 8 }}
        nameSelected="Data e hora de início"
        typeSelected="date"
        isPossibleToRemove={false}
      />
      <TaskInputType
        containerStyle={{ marginBottom: 8 }}
        nameSelected="Data e hora de término"
        typeSelected="date"
        isPossibleToRemove={false}
      />
      {additionalTaskTypes.length > 0 &&
        additionalTaskTypes.map((input, index) => (
          <TaskInputType
            key={index}
            containerStyle={{ marginBottom: 8 }}
            onRemove={() => handleRemoveAdditionalTask(index)}
            setAdditionalTaskTypes={setAdditionalTaskTypes}
            indexOfTask={index}
          />
        ))}

      <RectangularButton
        containerStyle={{ width: 344 }}
        text="Criar projeto"
        onPress={async () => await submitNewProject()}
      />
    </Container>
  );
}
