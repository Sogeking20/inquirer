"use client";

import { FC, SetStateAction, useEffect, useState } from "react";
import {
  TestWithRelations,
  ResultWithStrengths,
  QuestionWithAnswers,
} from "@/@types/prisma";
import TestBanner from "./test-banner";
import TestQuestion from "./test-question";
import TestResults from "./test-results";
// import { ResultWithStrengths } from "@prisma/client";

interface Props {
  className?: string;
  test: TestWithRelations;
  result: ResultWithStrengths;
}

const TestForm: FC<Props> = ({ test, result }) => {
  const [page, setPage] = useState("start");
  const [resultData, setResultData] = useState<ResultWithStrengths>(result);
  const [steps, setSteps] = useState(0);
  const [answer, setAnswer] = useState(0);

  const nextPage = (name: string) => {
    setPage(name);

    if (typeof window !== "undefined") {
      const savedTest = localStorage.getItem(`savedTest${test.id}`);

      if (!savedTest) {
        const savedTestData = {
          testState: name,
          result: result,
          step: 0,
        };
        localStorage.setItem(
          `savedTest${test.id}`,
          JSON.stringify(savedTestData)
        );
      } else {
        const savedTestData = JSON.parse(savedTest);
        savedTestData.testState = name;
        localStorage.setItem(
          `savedTest${test.id}`,
          JSON.stringify(savedTestData)
        );
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTestData = localStorage.getItem(`savedTest${test.id}`);
      const savedTest = JSON.parse(savedTestData || "{}");

      if (savedTest) {
        setPage(savedTest.testState || "start");
        setResultData(savedTest.result);
        setSteps(savedTest.step);
      }
    }
  }, []);

  const onNext = () => {
    setSteps(steps + 1);
    setAnswer(0);

    const savedTestData = localStorage.getItem(`savedTest${test.id}`);
    const savedTest = JSON.parse(savedTestData || "{}");

    if (savedTest) {
      savedTest.step = steps + 1;

      localStorage.setItem(`savedTest${test.id}`, JSON.stringify(savedTest));
    } else {
      console.log("Объект не найден в localStorage");
    }
  };

  const resetTest = () => {
    localStorage.removeItem(`savedTest${test.id}`);
    setPage("start");
    setSteps(0);
    setResultData(result);
  };

  const onClickVariant = () => {
    setAnswer(1);
  };

  if (page === "start") return <TestBanner test={test} nextPage={nextPage} />;
  if (page === "quiz")
    return (
      <TestQuestion
        question={test.questions[steps] as QuestionWithAnswers}
        nextPage={nextPage}
        testId={test.id}
        steps={steps}
        onNext={onNext}
        answer={answer}
        onClickVariant={onClickVariant}
        length={test.questions.length}
      />
    );
  if (page === "result")
    return (
      <TestResults result={resultData} name={test.name} resetTest={resetTest} />
    );
};

export default TestForm;
