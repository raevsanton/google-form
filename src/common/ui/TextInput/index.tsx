import React from 'react';
import { TextField } from '@material-ui/core';
import { TextFieldWrapper } from './style';

interface Props {
  label?: string;
  placeholder?: string;
  value?: string | number;
  fullWidth?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange(event): void;
  [key: string]: unknown;
}

/**
 * Text field component
 * @param {Props} props - Received props
 * @returns {React.ReactElement} - React element
 */
export const TextInput = ({
  label,
  placeholder,
  value,
  disabled,
  fullWidth,
  onChange,
  required,
  ...rest
}: Props): React.ReactElement => (
  <TextFieldWrapper>
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      disabled={disabled}
      required={required}
      {...rest}
    />
  </TextFieldWrapper>
);
