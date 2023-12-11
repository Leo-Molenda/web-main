import React, { ButtonHTMLAttributes, CSSProperties } from 'react';
import ReactLoading from 'react-loading';

import { Container, ButtonText, ButtonIcon } from './styles';

interface RectangularButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  containerStyle?: CSSProperties;
  text: string;
  iconSource?: any;
  onPress?: () => void;
  isLoading?: boolean;
}

export const RectangularButton: React.FC<RectangularButtonProps> = ({
  containerStyle,
  text,
  iconSource,
  onPress,
  isLoading,
}) => {
  return (
    <Container style={containerStyle} onClick={onPress}>
      {isLoading ? (
        <ReactLoading
          type="spin"
          color="#fff"
          width={24}
          height={24}
          className="loading"
        />
      ) : (
        <>
          <ButtonText>{text}</ButtonText>
          {iconSource && <ButtonIcon src={iconSource} />}
        </>
      )}
    </Container>
  );
};
