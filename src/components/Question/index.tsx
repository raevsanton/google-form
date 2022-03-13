import React from 'react';
import { RadioGroup, FormControl } from '@material-ui/core';
import { TextInput } from '../../common/ui/TextInput';
import { RadioWithLabel } from '../../common/ui/RadioWithLabel';
import { Title, Wrapper, Required } from './style';
import { Answer, IQuestion } from './types';

interface Props {
  question: IQuestion;
  addAnswersData(id, answer): void;
}

/**
 * Question component
 * @returns {React.ReactElement} - React element
 */
export const Question = ({
  question: {
    id: questionID,
    type,
    answers,
    required,
    title,
  },
  addAnswersData,
}: Props): React.ReactElement => {
  const [option, setOption] = React.useState<string>(null);

  /**
   * Change input value
   * @param {React.ChangeEvent<HTMLInputElement>} event - Received change event
   */
  const onChange = React.useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    addAnswersData(questionID, value);
    setOption(value);
  }, [setOption]);

  /**
   * Change self answer value
   * @param {React.ChangeEvent<HTMLInputElement>} event - Received change event
   */
  const onChangeSelfAnswer = React.useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    addAnswersData(questionID, value);
  }, [addAnswersData]);

  return (
    <Wrapper>
      <Title>
        {title}
        {required && <Required>*</Required>}
      </Title>
      <FormControl>
        <RadioGroup value={option}>
          {type === 'single' && answers.map(({ text, id, self_answer: selfAnswer }: Answer) => (
            <RadioWithLabel
              key={id}
              label={text}
              value={text}
              required={required}
              selfAnswer={selfAnswer}
              onChange={onChange}
              onChangeSelfAnswer={onChangeSelfAnswer}
            />
          ))}
        </RadioGroup>
        {type === 'text' && (
          <TextInput
            required={required}
            placeholder="Your Answer"
            onChange={onChange}
          />
        )}
      </FormControl>
    </Wrapper>
  );
};
