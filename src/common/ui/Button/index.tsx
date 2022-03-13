import React from 'react';
import { ButtonWrapper } from './styles';

interface Props {
  children: React.ReactNode;
  onClick?(): void;
  [key: string]: unknown;
}

/**
 * Button component
 * @param {Props} props - Received props
 * @returns {React.ReactElement} - React element
 */
export const Button = ({ children, onClick, ...rest }: Props) => (
  <ButtonWrapper
    onClick={onClick}
    {...rest}
  >
    {children}
  </ButtonWrapper>
);
