"use client";

import { FC, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Container } from "./container";
import { X } from "lucide-react";

type QuestionType = {
  name: string;
  answers: any[];
};

type GamePropsType = {
  step: number;
  name: string;
  question: QuestionType;
  length: number;
  onClickVariant: () => void;
  onNext: () => void;
  answer: number;
  nextPage: (name: string) => void;
};
const Game: FC<GamePropsType> = ({
  step,
  name,
  question,
  length,
  onClickVariant,
  onNext,
  answer,
  nextPage,
}) => {
  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 bg-secondary z-10 text-white">
      <Container className="mt-3">
        <div className="mb-[50px]">
          <div className="w-[100%] flex justify-between items-center">
            <h3 className="text-[30px] font-semibold">
              {step + 1}/{length}
            </h3>
            <X
              className="cursor-pointer"
              size={40}
              strokeWidth={3}
              onClick={() => nextPage("start")}
            />
          </div>
          <div>
            <h1 className="text-[26px] sm:text-[35px] mb-7 mt-[50px]">
              {name}
            </h1>
            <RadioGroup>
              {question.answers.map(({ text, id }) => (
                <div key={id} className="flex items-center mb-5 space-x-2">
                  <RadioGroupItem
                    onClick={() => onClickVariant()}
                    value={text}
                    id={text}
                  />
                  <Label htmlFor={text}>{text}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
        <Button
          disabled={answer === 0}
          variant={"outline"}
          size={"lg"}
          className="text-[16px] text-white w-[50%] md:text-[20px] border-white hover:bg-[#3d8aa4] hover:border-white"
          onClick={() => onNext()}
        >
          Далее
        </Button>
      </Container>
    </div>
  );
};

interface Props {
  className?: string;
  questions: any[];
  nextPage: (name: string) => void;
}

const TestQuestion: FC<Props> = ({ className, questions, nextPage }) => {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState(0);

  console.log(questions);

  const question = questions[step];

  console.log(question);

  const onClickVariant = () => {
    setAnswer(1);
  };

  const onNext = () => {
    if (step + 1 === questions.length) {
      nextPage("result");
      //   setStep(1);
    }
    setStep(step + 1);
    setAnswer(0);
  };

  return (
    <>
      <Game
        step={step}
        name={question.name}
        question={question}
        length={questions.length}
        onClickVariant={onClickVariant}
        answer={answer}
        onNext={onNext}
        nextPage={nextPage}
      />
    </>
  );
};

export default TestQuestion;
