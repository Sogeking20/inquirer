import { Test, Question, Result, Strengths } from "@prisma/client";

export type TestWithRelations = Test & {
  questions: Question[];
  results: Result[];
};

export type ResultWithStrengths = Result & {
  strengths: Strengths[];
};
