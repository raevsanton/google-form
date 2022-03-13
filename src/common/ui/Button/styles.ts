import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const ButtonWrapper = styled.button`
  padding: 10px 24px;
  background-color: ${colors.blue};
  color: ${colors.white};
  outline: none;
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  transition: .15s ease-in-out all;
  
  &:hover {
    transition: .15s ease-in-out all;
    background-color: ${colors.blueLight};
  }
`;
