import styled from 'styled-components';
import { colors } from '../../common/constants/colors';

export const Wrapper = styled.div`
  background-color: ${colors.white};
  max-width: 640px;
  border: 1px solid ${colors.gray};
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 24px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-family: 'Google Sans', sans-serif;
  margin-bottom: 16px;
`;

export const Required = styled.span`
  color: ${colors.red};
  margin: 0 4px;
`;
