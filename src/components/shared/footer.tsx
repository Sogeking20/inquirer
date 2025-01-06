import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "./container";
import Link from "next/link";
import { Button } from "../ui/button";
import { User } from "lucide-react";

interface Props {
  className?: string;
}

const tests = [
  { name: "Психологические тесты" },
  { name: "Тест на психику" },
  { name: "Тест на психологисекий возраст" },
  { name: "Тест на депрессию" },
  { name: "Тест на iq" },
  { name: "Тест на тип личности" },
  { name: "Тест на умение любить" },
  { name: "Тест на язык любви" },
  { name: "Тест на тяжёлый характер" },
  { name: "Тест на сдержанность" },
  { name: "Тест на совместимость" },
  { name: "Тест на темперамент" },
  { name: "Тест Айзенка" },
  { name: "Тест Люшера" },
  { name: "Тест Роршаха" },
  { name: "Тест на дружбу" },
];

const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={cn("border-t pt-5 mb-5", className)}>
      <Container className="flex justify-between flex-col lg:flex-row gap-5">
        <div className="flex gap-5 justify-between flex-col md:flex-row">
          <div className="flex flex-col gap-3">
            <p className="text-[24px] font-bold">Тесты</p>
            <div className="grid grid-cols-2 w-[100%] gap-3 md:grid-cols-3">
              {tests.map(({ name }, index) => (
                <Link
                  className="text-[16px] duration-1000 hover:underline underline-offset-4"
                  key={index}
                  href={`/${index}`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <p className="text-[24px] font-bold">Помощь</p>
            <Link
              className="text-[16px] duration-1000 hover:underline underline-offset-4"
              href="/#tests"
            >
              Тесты
            </Link>
            <Link
              className="text-[16px] duration-1000 hover:underline underline-offset-4"
              href="/#reviews"
            >
              Отзывы
            </Link>
            <Link
              className="text-[16px] duration-1000 hover:underline underline-offset-4"
              href="/#faq"
            >
              FAQ
            </Link>
          </div>
        </div>
        <Button
          variant={"outline"}
          size={"lg"}
          className="flex items-center gap-3 text-[20px]"
        >
          <User size={18} />
          Войти
        </Button>
      </Container>
    </footer>
  );
};

export default Footer;
