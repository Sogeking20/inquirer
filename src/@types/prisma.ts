import { Test, Question, Result, Strengths, Answer } from "@prisma/client";

export type TestWithRelations = Test & {
  questions: Question[];
  results: Result[];
};

export type ResultWithStrengths = Result & {
  strengths: Strengths[];
};

export type QuestionWithAnswers = Question & {
  answers: Answer[];
};
