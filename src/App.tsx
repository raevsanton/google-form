import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Question } from './components/Question';
import { Description } from './components/Description';
import { Button } from './common/ui/Button';
import { Loader } from './common/ui/Loader';
import { IQuestion, Poll } from './components/Question/types';

interface Answer {
  id: number;
  answer: string;
}

export const App = (): React.ReactElement => {
  const [pollData, setPollData] = React.useState<Poll>(null);
  const [answersData, setAnswersData] = React.useState<Answer[]>([]);

  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect((): void => {
    (async () => {
      try {
        const { data }: AxiosResponse = await axios.get('http://localhost:3001/questionnaires/1/');
        setPollData(data);
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  /**
   * Submit data of answers
   */
  const onSubmit = (): void => {
    alert(JSON.stringify(answersData));
  };

  /**
   * Add values for body
   * @param {number} id - question id
   * @param {string} answerText - text of answer
   */
  const addAnswersData = React.useCallback((id: number, answerText: string) => {
    const copyAnswers = { ...answersData };
    copyAnswers[id] = { id, answer: answerText };
    setAnswersData((prevState) => ({ ...prevState, ...copyAnswers }));
  }, [setAnswersData]);

  /**
   * Enable error text
   * @returns {React.ReactElement} - React element
   */
  if (error) {
    return <h2>An error has occurred. Refresh the page.</h2>;
  }

  /**
   * Enable loader component
   * @returns {React.ReactElement} - React element
   */
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <header>
        <Description
          title={pollData.title}
          description={pollData.description}
          additionalText={pollData.additional_text}
        />
      </header>
      <form onSubmit={onSubmit}>
        {pollData.questions.map((question: IQuestion) => (
          <Question
            key={question.id}
            question={question}
            addAnswersData={addAnswersData}
          />
        ))}
        <footer>
          <Button type="submit">Submit</Button>
        </footer>
      </form>
    </>
  );
};
