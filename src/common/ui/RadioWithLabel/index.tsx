import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Radio, FormControlLabel, FormControl } from '@material-ui/core';
import { RadioControlWrapper, LabelWrapper, Label } from './style';
import { TextInput } from '../TextInput';

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    padding: 0,
    marginRight: 10,
  },
});

interface Props {
  label: string;
  value: string;
  selfAnswer?: boolean;
  required?: boolean;
  onChange(event): void;
  onChangeSelfAnswer?(event): void;
  [key: string]: unknown;
}

/**
 * Radio button component with label
 * @param {Props} props - Received props
 * @returns {React.ReactElement} - React element
 */
export const RadioWithLabel = ({
  onChange,
  label,
  value,
  selfAnswer,
  required,
  onChangeSelfAnswer,
  ...rest
}: Props): React.ReactElement => {
  const classes = useStyles();
  return (
    <RadioControlWrapper>
      <FormControlLabel
        value={value}
        control={(
          <Radio
            className={classes.root}
            onClick={onChange}
            required={required}
            {...rest}
          />
        )}
        label={(
          <LabelWrapper>
            <Label>{label}</Label>
            {selfAnswer && (
              <FormControl>
                <TextInput
                  fullWidth
                  onChange={onChangeSelfAnswer}
                />
              </FormControl>
            )}
          </LabelWrapper>
        )}
      />
    </RadioControlWrapper>
  );
};
