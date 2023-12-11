import React, {
  CSSProperties,
  forwardRef,
  InputHTMLAttributes,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import {
  Label,
  Container,
  TextInput,
  IconInputContainer,
  IconInput,
} from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: CSSProperties;
  label?: string;

  iconSource?: any;
  iconCallback?: () => void;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { containerStyle, label, iconSource, iconCallback, ...rest },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputElementRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      if (inputElementRef.current) inputElementRef.current.focus();
    },
  }));

  return (
    <>
      {label && <Label htmlFor="input">{label}</Label>}
      <Container style={containerStyle} isFocused={isFocused}>
        <TextInput
          ref={inputElementRef}
          name="input"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
        {iconSource && (
          <IconInputContainer onClick={iconCallback}>
            <IconInput src={iconSource} />
          </IconInputContainer>
        )}
      </Container>
    </>
  );
};

export default forwardRef(Input);
