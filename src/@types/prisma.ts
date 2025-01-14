import { Test, Question, Result, Answer } from "@prisma/client";

export type TestWithRelations = Test & {
  questions: Question[];
  results: Result[];
};
