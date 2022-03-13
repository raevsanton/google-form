import styled from 'styled-components';
import { colors } from '../../common/constants/colors';

export const Wrapper = styled.div`
  background-color: ${colors.white};
  max-width: 640px;
  border: 1px solid #dadce0;
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 24px;
  border-top: 10px solid ${colors.blue};
`;

export const Title = styled.h1`
  font-size: 32px;
  font-family: 'Google Sans', sans-serif;
  font-weight: 300;
`;

export const Text = styled.p`
  margin-top: 14px;
;
`;

export const RequiredText = styled(Text)`
  color: ${colors.red}
`;
