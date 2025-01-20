import { useSession } from "next-auth/react";
import { FC } from "react";
import TestQuestionsAuth from "./test-questions-auth";
import { Button } from "../ui/button";

interface Props {
  nextPage: (name: string) => void;
}

const TestQuestionsFinal: FC<Props> = ({ nextPage }) => {
  const { data: session } = useSession();
  if (!session) {
    return <TestQuestionsAuth />;
  } else {
    return (
      <div className="text-center flex flex-col gap-5 items-center mt-[30px]">
        <h1 className="text-[24px]">Вы прошли тест!</h1>
        <p>Поздравляем, вы успешно прошли тестирование!</p>
        <Button
          size={"lg"}
          variant={"outline"}
          className="text-[16px] text-white min-w-[200px] w-[50%] md:text-[20px] border-white hover:bg-[#3d8aa4] hover:border-white"
          onClick={() => nextPage("result")}
        >
          Узнать результат
        </Button>
      </div>
    );
  }
};

export default TestQuestionsFinal;
