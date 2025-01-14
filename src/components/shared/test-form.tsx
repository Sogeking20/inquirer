"use client";

import { FC, SetStateAction, useState } from "react";
import { TestWithRelations } from "@/@types/prisma";
import TestBanner from "./test-banner";
import TestQuestion from "./test-question";
import TestResults from "./test-results";
import { Result } from "@prisma/client";

interface Props {
  className?: string;
  test: TestWithRelations;
  result: Result;
}

const TestForm: FC<Props> = ({ test, result }) => {
  const [page, setPage] = useState("start");

  console.log(test);

  const nextPage = (name: string) => {
    setPage(name);
  };

  if (page === "start") return <TestBanner test={test} nextPage={nextPage} />;
  if (page === "quiz")
    return <TestQuestion questions={test.questions} nextPage={nextPage} />;
  if (page === "result")
    return <TestResults result={result} name={test.name} nextPage={nextPage} />;
};

export default TestForm;
