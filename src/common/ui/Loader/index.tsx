import React from 'react';
import {
  Center, LoaderStyle, Main, Wrapper,
} from './styles';

/**
 * Loader component
 * @returns {React.ReactElement} - React element
 */
export const Loader = (): React.ReactElement => (
  <Center>
    <Main>
      <Wrapper>
        <LoaderStyle />
      </Wrapper>
    </Main>
  </Center>
);
