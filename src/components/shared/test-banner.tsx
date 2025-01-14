import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";
import ReviewsSlider from "./reviews-slider";
import TestQuestion from "./test-question";
import { TestWithRelations } from "@/@types/prisma";
import { Container } from "./container";
import Brain from "@/public/65105163_9479213.png";

interface Props {
  className?: string;
  test: TestWithRelations;
  nextPage: (name: string) => void;
}

const TestBanner: FC<Props> = ({ className, test, nextPage }) => {
  return (
    <div className={className}>
      <div className="w-[100%] h-[80vh] text-white flex justify-between gap-8 mb-[50px] px-5 bg-secondary bg-no-repeat">
        <Container className="relative flex flex-col md:flex-row gap-3 top-[50px]">
          <div className="grow-0 basis-auto md:w-8/12 xl:w-8/12 2xl:w-8/12 max-md:mb-8">
            <h1 className="mb-5 xl:mb-6 2xl:mb-12 lg:max-xl:max-w-[34.5rem] 2xl:max-w-[57.5rem] md:font-light text-[1.75rem]/10 md:text-[2.75rem]/[1.44] xl:text-6xl/[1.44] 2xl:text-7.5xl/[1.2]">
              {test.name}
            </h1>
            <p
              className="mb-8 md:mb-20 xl:mb-14 xl:mr-40 2xl:mb-12 lg:max-xl:max-w-[34.5rem] 2xl:max-w-[48.5rem]
            text-onyx-light font-light leading-6 md:leading-7 2xl:text-2xl/10"
            >
              {test.description}
            </p>
            <Button
              variant={"outline"}
              size="lg"
              className="text-[20px] text-white border-white hover:bg-[#3d8aa4]"
              onClick={() => nextPage("quiz")}
            >
              Пройти тест
            </Button>
          </div>
          <div className="w-[60%] md:w-[40%]">
            <img
              src="https://img.freepik.com/premium-vector/continuous-line-drawing-human-brain-human-brain-one-line-drawing-minimalist-design_266639-2614.jpg"
              alt=""
            />
          </div>
        </Container>
      </div>
      <div className="w-[100%]">
        <ReviewsSlider />
      </div>
    </div>
  );
};

export default TestBanner;
