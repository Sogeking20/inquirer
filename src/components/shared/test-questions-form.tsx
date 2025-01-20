import { FC } from "react";
import TestQuestionGame from "./test-question-game";
import TestQuestionsFinal from "./test-questions-final";
import { QuestionWithAnswers } from "@/@types/prisma";

interface Props {
  step: number;
  length: number;
  question?: QuestionWithAnswers;
  onClickVariant: () => void;
  onNext: () => void;
  answer?: number;
  nextPage: (name: string) => void;
}

const TestQuestionsForm: FC<Props> = ({
  step,
  length,
  question,
  onClickVariant,
  onNext,
  answer,
  nextPage,
}) => {
  if (step >= length) {
    return <TestQuestionsFinal nextPage={nextPage} />;
  }
  return (
    <TestQuestionGame
      name={question?.name}
      question={question}
      onClickVariant={onClickVariant}
      answer={answer}
      onNext={onNext}
    />
  );
};

export default TestQuestionsForm;
