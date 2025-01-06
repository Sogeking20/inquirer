import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  className?: string;
  name: string;
  text: string;
}

const TextBlockItem: FC<Props> = ({ className, name, text }) => {
  return (
    <div
      className={cn(
        "w-[100%] py-3 px-5 border border-gray rounded-xl flex flex-col gap-3",
        className
      )}
    >
      <p className="text-[18px] font-semibold">{name}</p>
      <p className="text-[16px]">{text}</p>
    </div>
  );
};

export default TextBlockItem;
