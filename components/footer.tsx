import Link from "next/link";
import React from "react";
import ImageItem from "./image-item";

type Props = {};

const footerMenu = [
  {
    label: "Company",
    menu: [
      {
        name: "About Us",
        link: "/",
      },
      {
        name: "Career",
        link: "/",
      },
      {
        name: "Contact Us",
        link: "/",
      },
    ],
  },
  {
    label: "More Info",
    menu: [
      {
        name: "Terms & Conditions",
        link: "/",
      },
      {
        name: "Privacy Policy",
        link: "/",
      },
    ],
  },
];

const socmed = [
  {
    name: "twitter",
    icon: "/icons/twitter.svg",
    link: "/",
  },
  {
    name: "instagram",
    icon: "/icons/ig.svg",
    link: "/",
  },
  {
    name: "facebook",
    icon: "/icons/fb.svg",
    link: "/",
  },
  {
    name: "linkedin",
    icon: "/icons/in.svg",
    link: "/",
  },
];

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#1E272E] pt-5 py-9 lg:pt-10">
      <div className="container">
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-y-11">
          <Link href="/">
            <ImageItem
              src="/images/logo.png"
              alt="logo"
              className="w-[190px]"
            />
          </Link>

          {footerMenu.map((ftMenu, i) => (
            <div key={i}>
              <p className="text-zinc-300 text-xl font-semibold">
                {ftMenu.label}
              </p>

              <ul className="space-y-5 text-stone-200 mt-4 text-lg text-opacity-70">
                {ftMenu.menu.map((m, i) => (
                  <li key={i}>
                    <Link href={m.link}>{m.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-zinc-300 text-xl font-semibold">Follow Us</p>

            <div className="flex gap-x-4 mt-4">
              {socmed.map((soc, i) => (
                <Link
                  key={i}
                  href={soc.link}
                  className="bg-background w-[26px] h-[26px] rounded-full flex place-content-center items-center"
                >
                  <ImageItem src={soc.icon} alt={soc.name} className="w-auto" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-border h-[1px] w-full mt-12 mb-8" />

        <p className="text-sm text-center text-stone-200">
          © Copyright 2023, All Rights Reserved by DevDesign Team 3
        </p>
      </div>
    </footer>
  );
};

export default Footer;
