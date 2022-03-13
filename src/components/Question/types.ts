export interface Answer {
    id: number;
    text: string;
    self_answer: boolean;
}

export interface IQuestion {
    id: number;
    required: boolean;
    title: string;
    type: string;
    answers: Array<Answer>;
}
