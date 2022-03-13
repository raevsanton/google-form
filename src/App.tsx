import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Question } from './components/Question';
import { Description } from './components/Description';
import { Button } from './common/ui/Button';
import { Loader } from './common/ui/Loader';
import { IQuestion } from './components/Question/types';

interface Answer {
  id: number;
  answer: string;
}

export const App = (): React.ReactElement => {
  const [questionsData, setQuestionsData] = React.useState<Array<IQuestion>>([]);
  const [answersData, setAnswersData] = React.useState<Answer>(null);

  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect((): void => {
    (async () => {
      setLoading(true);
      try {
        const { data: { questions } }: AxiosResponse = await axios.get('http://localhost:3001/questionnaires/1/');
        setQuestionsData(questions);
        setLoading(false);
      } catch {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  /**
   * Submit data of answers
   * @param {React.FormEvent<HTMLFormElement>} event - Submit event
   */
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  /**
   * Add values for body
   * @param {number} id - id of question
   * @param {string} answerText - text of answer
   */
  const addAnswersData = React.useCallback((id: number, answerText: string) => {
    const copyAnswers = { ...answersData };
    copyAnswers[id] = { id, answer: answerText };
    setAnswersData((prevState: Answer) => ({ ...prevState, ...copyAnswers }));
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
        <Description />
      </header>
      <form onSubmit={onSubmit}>
        {questionsData.map((question: IQuestion) => (
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
