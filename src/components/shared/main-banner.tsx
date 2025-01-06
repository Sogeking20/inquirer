import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  className?: string;
}

const MainBanner: FC<Props> = ({ className }) => {
  return (
    <div className={cn("mb-[30px]", className)}>
      <div className="bg-[#4298b4] py-[40px] w-full flex md:text-center">
        <div className="max-w-[960px] px-3 text-white flex flex-col items-start gap-5 mx-[auto] md:items-center">
          <h1 className="text-[25px] font-extrabold md:text-[40px]">
            Психологические тесты, которые расскажут о тебе больше, чем ты
            знаешь сам
          </h1>
          <h2 className="text-[18px] max-w-[650px] md:text-[30px]">
            Пройди тест, чтобы узнать о себе всю правду
          </h2>
          <Link href="/#tests">
            <Button
              variant={"outline"}
              size={"lg"}
              className="text-[16px] text-white border-white md:text-[20px]"
            >
              Пройти тест
            </Button>
          </Link>
        </div>
      </div>
      <img
        src="https://www.16personalities.com/static/images/homepage/header-mountains-desktop.svg"
        alt=""
      />
    </div>
  );
};

export default MainBanner;
