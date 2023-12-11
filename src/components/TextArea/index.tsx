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
  TextAreaInput,
  IconInputContainer,
  IconInput,
  Length,
} from './styles';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  containerStyle?: CSSProperties;
  label?: string;

  iconSource?: any;
  iconCallback?: () => void;

  length?: number;
  limitCaracters?: number;
}

interface TextAreaRef {
  focus(): void;
}

const TextArea: React.ForwardRefRenderFunction<TextAreaRef, TextAreaProps> = (
  {
    containerStyle,
    label,
    iconSource,
    iconCallback,
    length,
    limitCaracters,
    ...rest
  },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);

  const textAreaElementRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      if (textAreaElementRef.current) textAreaElementRef.current.focus();
    },
  }));

  return (
    <>
      {label && <Label htmlFor="input">{label}</Label>}
      <Container
        style={containerStyle}
        isFocused={isFocused}
        hasMaxLength={!!length}
      >
        <TextAreaInput
          ref={textAreaElementRef}
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
        {typeof length !== 'undefined' && (
          <Length>
            {length} / {limitCaracters}
          </Length>
        )}
      </Container>
    </>
  );
};

export default forwardRef(TextArea);
