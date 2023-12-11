import { CSSProperties, useState } from 'react';

import { Dropdown, Option } from '../../../components/Dropdown';
import Input from '../../../components/Input';

import { Container, InputsContainer, CloseButton } from './styles';

import CloseImg from '../../../assets/createproject/close.svg';

import { AdditionalTaskType } from '../../../interfaces/AdditionalTaskType';

interface TaskInputTypeProps {
  containerStyle?: CSSProperties;

  nameSelected?: string;
  typeSelected?: string;

  isPossibleToRemove?: boolean;

  indexOfTask?: number;
  setAdditionalTaskTypes?: React.Dispatch<
    React.SetStateAction<AdditionalTaskType[]>
  >;

  onRemove?: () => void;
}

export function TaskInputType({
  containerStyle,
  nameSelected,
  typeSelected,
  isPossibleToRemove = true,
  indexOfTask,
  setAdditionalTaskTypes,
  onRemove,
}: TaskInputTypeProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const valueTypes: Option[] = [
    { id: '1', value: 'boolean', label: 'Sim/Não' },
    { id: '2', value: 'number', label: 'Número' },
    { id: '3', value: 'string', label: 'Texto' },
    { id: '4', value: 'date', label: 'Tempo' },
    { id: '5', value: 'image', label: 'Imagem' },
    { id: '6', value: 'file', label: 'Arquivo' },
  ];

  function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    if (setAdditionalTaskTypes)
      setAdditionalTaskTypes(oldAdditionalTaskTypes => {
        return oldAdditionalTaskTypes.map((task, index) =>
          index === indexOfTask ? { ...task, name: e.target.value } : task,
        );
      });
  }

  function onChangeType(type: Option) {
    if (setAdditionalTaskTypes)
      setAdditionalTaskTypes(oldAdditionalTaskTypes => {
        return oldAdditionalTaskTypes.map((task, index) =>
          index === indexOfTask ? { ...task, type: type.value } : task,
        );
      });
  }

  return (
    <Container
      style={containerStyle}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <InputsContainer>
        <Input
          containerStyle={{ width: 167.5 }}
          placeholder="Nome da entrada"
          disabled={typeof nameSelected !== 'undefined'}
          value={nameSelected}
          onChange={e => onChangeName(e)}
        />
        <Dropdown
          containerStyle={{ width: 167.5 }}
          options={valueTypes}
          placeholder="Tipo"
          isDisabled={typeof typeSelected !== 'undefined'}
          optionValueSelected={typeSelected}
          isSearchable={false}
          onChange={(newValue: any) => onChangeType(newValue)}
        />
      </InputsContainer>

      {isPossibleToRemove && isMouseOver && (
        <CloseButton onClick={onRemove}>
          <img src={CloseImg} alt="Tirar entrada" />
        </CloseButton>
      )}
    </Container>
  );
}
