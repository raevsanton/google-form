export type Answer = {
  id: number;
  text: string;
  self_answer: boolean;
}

export interface IQuestion {
  id: number;
  required: boolean;
  title: string;
  type: string;
  answers: Answer[];
}

export interface Poll {
  id: number;
  title: string;
  description: string;
  additional_text: string;
  questions: IQuestion[];
}
