import { FC } from "react";
import { X } from "lucide-react";
import { Container } from "./container";
import TestQuestionsForm from "./test-questions-form";
import TestQuestionsTimer from "./test-questions-timer";
import { QuestionWithAnswers } from "@/@types/prisma";

interface Props {
  question?: QuestionWithAnswers;
  nextPage: (name: string) => void;
  testId: number;
  steps: number;
  onNext: () => void;
  answer: number;
  onClickVariant: () => void;
  length: number;
}

const TestQuestion: FC<Props> = ({
  question,
  nextPage,
  steps,
  onNext,
  answer,
  onClickVariant,
  length,
}) => {
  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 bg-secondary z-10 overflow-y-auto text-white">
      <Container className="mt-3">
        <div className="w-[100%] flex justify-between items-center">
          <h3 className="text-[30px] font-semibold">
            {steps >= length ? "Вы прошли тест!" : `${steps + 1}/${length}`}
          </h3>
          <X
            className="cursor-pointer"
            size={40}
            strokeWidth={3}
            onClick={() => nextPage("start")}
          />
        </div>
        <TestQuestionsForm
          step={steps}
          length={length}
          question={question}
          onClickVariant={onClickVariant}
          answer={answer}
          onNext={onNext}
          nextPage={nextPage}
        />
      </Container>
      <TestQuestionsTimer />
    </div>
  );
};

export default TestQuestion;
