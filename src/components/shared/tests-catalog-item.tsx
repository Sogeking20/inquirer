import { FC } from "react";

interface Props {
  className?: string;
  name: string;
}

const TestsCatalogItem: FC<Props> = ({ className, name }) => {
  return (
    <div className={className}>
      <div className="w-[100%] h-[190px] relative text-center rounded-md lg:h-[230px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPbn2dGAYMCyZaK1LAPAnUPwm3Me7cQ2g4Q&s"
          alt=""
        />
        <p className="absolute bottom-2 text-center w-full text-black drop-shadow-sm text-[20px]">
          {name}
        </p>
      </div>
    </div>
  );
};

export default TestsCatalogItem;
