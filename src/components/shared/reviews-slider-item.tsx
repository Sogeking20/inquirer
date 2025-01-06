import { cn } from "@/lib/utils";
import { FC } from "react";
import { Star } from "lucide-react";

interface Props {
  className?: string;
  name: string;
  text: string;
  grade: number;
}

const ReviewsSliderItem: FC<Props> = ({ className, name, text, grade }) => {
  return (
    <div
      className={cn(
        "w-[100%] h-[100%] border p-5 rounded-3xl flex flex-col gap-5",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <p className="text-[20px]">Елена Солод</p>
        <div className="flex gap-3">
          <Star size={30} color="#f9c000" />
          <p className="text-[20px] font-semibold">5</p>
        </div>
      </div>
      <p className="text-[14px] sm:text-[16px]">
        Долго и тщательно исследую себя в разных классификационных системах.
        Ваше описание результатов теста полностью отражает все нюансы личности в
        легком изложении. Деление по разделам и адаптация для сегмента РФ
        особенно удобны. Спасибо за классный ресурс по самопознанию с прикладным
        эффектом :)) удачи в развитии!
      </p>
    </div>
  );
};

export default ReviewsSliderItem;
