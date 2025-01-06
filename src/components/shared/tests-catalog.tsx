import { FC } from "react";
import { Container } from "./container";
import TestsCatalogItem from "./tests-catalog-item";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

const TestsCatalog: FC<Props> = ({ className }) => {
  return (
    <div className={cn("mb-[50px]", className)} id="tests">
      <Container>
        <h3 className="text-[30px] mb-[30px] sm:text-[40px]">Наши тесты</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {tests.map(({ name }, index) => (
            <Link
              className="text-[16px] duration-1000 hover:underline underline-offset-4"
              key={index}
              href={`/${index}`}
            >
              <TestsCatalogItem name={name} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TestsCatalog;
