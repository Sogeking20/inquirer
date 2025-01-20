import { FC } from "react";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { QuestionWithAnswers } from "@/@types/prisma";

type GamePropsType = {
  name?: string;
  question?: QuestionWithAnswers;
  onClickVariant: () => void;
  onNext: () => void;
  answer?: number;
};
const TestQuestionGame: FC<GamePropsType> = ({
  name,
  question,
  onClickVariant,
  onNext,
  answer,
}) => {
  return (
    <>
      <div className="mb-[50px]">
        <div>
          <h1 className="text-[26px] sm:text-[35px] mb-7 mt-[50px]">{name}</h1>
          <RadioGroup>
            {question?.answers.map(({ text, id }) => (
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
    </>
  );
};

export default TestQuestionGame;
