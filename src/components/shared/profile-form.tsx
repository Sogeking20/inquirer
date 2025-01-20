import { User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  className?: string;
  data: User;
}

const ProfileForm: FC<Props> = ({ className, data }) => {
  console.log(data);

  return (
    <div className={cn("flex flex-col items-center my-10", className)}>
      <Avatar>
        <AvatarImage
          src="https://cdn-icons-png.flaticon.com/512/3234/3234167.png"
          alt="Avatar"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="text-[20px] mt-5">{data.fullName}</p>
      <div className="mt-[50px] w-[100%] text-center gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-xs-12 col-md-3 py-5 px-10 border-[3px] rounded-lg min-h-[330px] gap-5 col-sm-6 flex flex-col justify-between items-center">
          <div className="flex flex-col w-[100%] gap-3 items-center">
            <img
              src="https://testometrika.com/upload/medialibrary/aa3/aa39cf4ef8031e402e586ddea597aeab.svg"
              alt="test"
            />
            <p className="text-[16px]">Твой тип личности</p>
          </div>
          <Link href="test/6">
            <Button size={"md"}>Узнать</Button>
          </Link>
        </div>
        <div className="col-xs-12 col-md-3 py-5 px-10 border-[3px] rounded-lg min-h-[330px] gap-5 col-sm-6 flex flex-col justify-between items-center">
          <div className="flex flex-col w-[100%] gap-3 items-center">
            <img
              src="https://testometrika.com/upload/medialibrary/aa3/aa39cf4ef8031e402e586ddea597aeab.svg"
              alt="test"
            />
            <p className="text-[16px]">Твой язык любви</p>
          </div>
          <Link href="test/8">
            <Button size={"md"}>Узнать</Button>
          </Link>
        </div>
        <div className="col-xs-12 col-md-3 py-5 px-10 border-[3px] rounded-lg min-h-[330px] gap-5 col-sm-6 flex flex-col justify-between items-center">
          <div className="flex flex-col w-[100%] gap-3 items-center">
            <img
              src="https://testometrika.com/upload/medialibrary/aa3/aa39cf4ef8031e402e586ddea597aeab.svg"
              alt="test"
            />
            <p className="text-[16px]">Твой темперамент</p>
          </div>
          <Link href="test/12">
            <Button size={"md"}>Узнать</Button>
          </Link>
        </div>
        <div className="col-xs-12 col-md-3 py-5 px-10 border-[3px] rounded-lg min-h-[330px] gap-5 col-sm-6 flex flex-col justify-between items-center">
          <div className="flex flex-col w-[100%] gap-3 items-center">
            <img
              src="https://testometrika.com/upload/medialibrary/aa3/aa39cf4ef8031e402e586ddea597aeab.svg"
              alt="test"
            />
            <p className="text-[16px]">Умеешь ли ты любить?</p>
          </div>
          <Link href="test/7">
            <Button size={"md"}>Узнать</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
