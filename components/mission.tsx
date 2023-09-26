import React from "react";
import ImageItem from "./image-item";

type Props = {};

const missionImages = [
  {
    image: "/images/our-mission-1.png",
  },
  {
    image: "/images/our-mission-2.png",
  },
  {
    image: "/images/our-mission-3.png",
  },
];

const Mission = (props: Props) => {
  return (
    <section className="bg-[#CAD4E0] pb-14">
      <div className="bg-mission bg-top bg-no-repeat py-20 lg:pb-56">
        <div className="md:container">
          <div className="bg-[#171717] opacity-30 py-8 px-6 text-center text-white">
            <h1 className="text-5xl">OUR MISSION</h1>
            <div className="space-y-5 mt-5 text-xl">
              <p>
                <b>PASCARGO</b> Will take the load off your back. We’re
                Trucking, shipping, airlines and logistic borkerWith an
                asset-based fleet of dry and refrigetered cargo.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent volutpat urna eu nisi faucibus, eu euismod urna
                tincidunt. Sed ullamcorper eget turpis vitae fermentum. Aliquam
                erat volutpat. Nulla facilisi.
              </p>

              <p>
                Quisque fringilla, nisl in malesuada tempus, odio eros euismod
                ante, vel ultrices nisi nulla vel metus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-[15%] lg:-mt-[10%] overflow-x-auto">
        <div className="container">
          <div className="flex gap-x-6">
            {missionImages.map((img, i) => (
              <ImageItem
                key={i}
                src={img.image}
                alt="our mission"
                className="w-[80%] lg:w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
