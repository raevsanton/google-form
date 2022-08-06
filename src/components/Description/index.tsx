import React from 'react';
import {
  Title, Wrapper, Text, RequiredText,
} from './style';

interface Props {
  title: string;
  description: string;
  additionalText: string;
}

/**
 * First block in questions
 * @param {Props} props - Received props
 * @returns {React.ReactElement} - React element
 */
export const Description = ({
  title,
  description,
  additionalText,
}: Props): React.ReactElement => (
  <Wrapper>
    <Title>{title}</Title>
    <Text>{description}</Text>
    <RequiredText>{additionalText}</RequiredText>
  </Wrapper>
);
