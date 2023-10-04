"use client";

import * as React from "react";
import Link from "next/link";
import Button from "./button";
import ImageItem from "./image-item";
import { useRouter } from "next/navigation";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();

  const loginClick = () => {
    router.push("/login");
  };

  return (
    <header className="fixed w-full bg-[#00000066] z-10 bg-second-nav">
      <nav className="container py-3">
        <div className="flex justify-between items-center">
          <Link href="/">
            <ImageItem src="/images/logo.png" alt="logo" />
          </Link>

          <Button onClick={loginClick} variant="secondary" size="sm">
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
