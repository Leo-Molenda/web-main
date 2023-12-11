import { CSSProperties } from 'react';
import Select, { StylesConfig, Props as SelectProps } from 'react-select';

export interface Option {
  id: string;
  value: string;
  label: string;
}

interface DropdownProps extends SelectProps {
  containerStyle?: CSSProperties;
  options: Option[];
  placeholder?: string;
  isDisabled?: boolean;
  optionValueSelected?: string;
}

export function Dropdown({
  containerStyle,
  options,
  placeholder = 'Selecione...',
  isDisabled = false,
  optionValueSelected,
  ...rest
}: DropdownProps) {
  const selectStyles: StylesConfig = {
    container: (styles, { isFocused }) => ({
      ...styles,
      ...containerStyle,
      height: 44,
      borderColor: isFocused ? '#007300' : '#E0E0E0',
    }),
    control: (styles, { isFocused }) => ({
      ...styles,
      height: 44,
      border: '1px solid #aab0b7',
      borderRadius: 8,
      borderColor: isFocused ? '#007300' : '#E8E8E8',
      boxShadow: 'none',

      ':hover': {
        ...styles[':hover'],
        borderColor: isFocused ? '#E8E8E8' : '#007300',
      },
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? undefined
          : isFocused
          ? '#007300'
          : undefined,
        color: isFocused ? 'white' : 'black',
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: '#007300',
        },
      };
    },
  };

  return (
    <Select
      styles={selectStyles}
      options={options}
      placeholder={placeholder}
      isDisabled={isDisabled}
      value={options.find(option => option.value === optionValueSelected)}
      {...rest}
    />
  );
}
