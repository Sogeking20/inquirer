import { Strengths } from "@prisma/client";
import { FC } from "react";

interface Props {
  name: string;
  description?: string;
  strengths?: Strengths[];
}

const TestResultsItem: FC<Props> = ({ name, description, strengths }) => {
  console.log(strengths);
  return (
    <div className="w-[100%] rounded-lg border border-secondary p-5">
      <h3 className="mb-3 text-[16px] sm:text-[20px]">{name}</h3>
      <p className="text-[14px] sm:text-[16px]">{description}</p>
      <div className="">
        {strengths?.map((strength) => (
          <p className="text-[14px] mb-1 sm:text-[16px]" key={strength.id}>
            · {strength.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TestResultsItem;
