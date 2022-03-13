import React from 'react';
import {
  Title, Wrapper, Text, RequiredText,
} from './style';

/**
 * First block in questions
 * @returns {React.ReactElement} - React element
 */
export const Description = (): React.ReactElement => (
  <Wrapper>
    <Title>GoTech Questionare</Title>
    <Text>Show me what you got!</Text>
    <RequiredText>* Required</RequiredText>
  </Wrapper>
);
