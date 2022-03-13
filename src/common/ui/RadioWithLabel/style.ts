import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const RadioControlWrapper = styled.div`
  .MuiFormControlLabel-root {
    margin-left: 0;
    margin-right: 0;
    padding: 0.5em 0.5em 0.5em 0;
  }

  .MuiRadio-colorSecondary.Mui-checked {
    color: ${colors.blue};
  }
`;

export const Label = styled.span`
  margin-right: 20px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;
