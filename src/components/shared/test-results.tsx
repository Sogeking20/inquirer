import { Result } from "@prisma/client";
import { FC } from "react";
import { Button } from "../ui/button";
import { RotateCcw } from "lucide-react";
import { Container } from "./container";
import TestResultsItem from "./test-results-item";
import { cn } from "@/lib/utils";
import { ResultWithStrengths } from "@/@types/prisma";

interface Props {
  className?: string;
  name: String;
  result: ResultWithStrengths;
  resetTest: () => void;
}

const TestResults: FC<Props> = ({ className, name, result, resetTest }) => {
  console.log(result);
  //   console.log(result.strengths);
  return (
    <div className={cn("mb-[30px]", className)}>
      <div className="w-[100%] h-[270px] mb-[50px] bg-secondary flex flex-col justify-center items-center gap-5 px-2 py-5 text-white">
        <h1 className="text-[30px] sm:text-[34px] font-semibold text-center">
          {name}
        </h1>
        <Button
          className="text-white border-white text-[16px] sm:text-[20px] flex gap-2 hover:bg-[#3d8aa4] hover:border-white"
          variant={"outline"}
          size={"lg"}
          onClick={() => resetTest()}
        >
          <RotateCcw />
          Пройти тест заново
        </Button>
      </div>
      <Container>
        <div className="w-[100%] rounded-lg border border-secondary p-5 mb-3">
          <h3 className="mb-3 text-[18px] sm:text-[20px]">Результат:</h3>
          <p className="text-[14px] sm:text-[16px]">
            <strong>{result.name}</strong>. {result.description}
          </p>
        </div>
        <div className="w-[100%] grid grid-cols-1 md:grid-cols-2 gap-3">
          {result.strengths && result.strengths.length > 0 ? (
            <TestResultsItem
              name="Сильные стороны:"
              strengths={result.strengths}
            />
          ) : (
            ""
          )}
          {result.recommendation ? (
            <TestResultsItem
              name="Рекомендации:"
              description={result.recommendation}
            />
          ) : (
            ""
          )}
          {result.importance ? (
            <TestResultsItem name="Важно:" description={result.importance} />
          ) : (
            ""
          )}
          {result.advice ? (
            <TestResultsItem name="Совет:" description={result.advice} />
          ) : (
            ""
          )}
        </div>
      </Container>
    </div>
  );
};

export default TestResults;
