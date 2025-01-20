"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { AuthModal } from "./auth-modal";
import { ProfileButton } from "./profile-button";

interface Props {
  className?: string;
}

const Header: FC<Props> = ({ className }) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* <Image src={"/logo.png"} alt="Logo" width={35} height={35} /> */}
          <div className="">
            <h1 className="text-2xl uppercase font-black">Опросник</h1>
            <p className="text-sm text-gray-400 leading-3">На тип личности</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />
          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
          {/* <Button
            variant={"outline"}
            size={"sm"}
            className="flex items-center gap-3 text-[16px] lg:text-[20px]"
          >
            <User size={18} />
            Войти
          </Button> */}
          <div className="hidden sm:block">
            <Link href="/#tests">
              <Button size={"sm"} className="text-[16px] lg:text-[20px]">
                Пройти тест
              </Button>
            </Link>
          </div>
          {/* <AuthModal
						open={openAuthModal}
						onClose={() => setOpenAuthModal(false)}
					/>

					<ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

					{hasCart && <CartButton />} */}
        </div>
      </Container>
    </header>
  );
};

export default Header;
