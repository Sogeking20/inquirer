import { FC } from "react";
import TestQuestionGame from "./test-question-game";
import { QuestionWithAnswers } from "@/@types/prisma";
import { useSession } from "next-auth/react";
import TestQuestionsAuth from "./test-questions-auth";

interface Props {
  step: number;
  length: number;
  question?: QuestionWithAnswers;
  onClickVariant: () => void;
  onNext: () => void;
  answer?: number;
}

const TestQuestionsForm: FC<Props> = ({
  step,
  length,
  question,
  onClickVariant,
  onNext,
  answer,
}) => {
  const { data: session } = useSession();

  if (step >= length && !session) {
    return <TestQuestionsAuth />;
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
