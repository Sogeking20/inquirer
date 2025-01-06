import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "./container";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const items = [
  { title: "Вопрос 1", text: "Ответ на вопрос 1..." },
  { title: "Вопрос 2", text: "Ответ на вопрос 2..." },
  { title: "Вопрос 3", text: "Ответ на вопрос 3..." },
];

const Faq: FC<Props> = ({ className }) => {
  return (
    <div className={cn("mb-[100px]", className)} id="faq">
      <Container>
        <h3 className="text-[40px] mb-[30px]">FAQ</h3>
        <Accordion type="single" collapsible className="w-full">
          {items.map(({ title, text }, index) => (
            <AccordionItem value={title} key={index}>
              <AccordionTrigger className="text-[25px]">
                {title}
              </AccordionTrigger>
              <AccordionContent className="text-[16px]">
                {text}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
