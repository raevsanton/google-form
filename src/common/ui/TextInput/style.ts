import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const TextFieldWrapper = styled.div`
  .MuiInput-underline {
    &:before {
      border-bottom: 1px solid ${colors.gray};
    }
    &:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid ${colors.gray};
    }
    &:after {
      border-bottom: 1px solid ${colors.blue};
    }
  }

  .MuiFormLabel-root.Mui-focused {
    color: ${colors.gray};
  }

  .MuiFormLabel-root {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: normal;
  }

  .MuiFormHelperText-root {
    &.Mui-error {
      position: absolute;
      bottom: -20px;
    }
  }
`;
