import { Navbar, LeftSide, RightSide } from "@/components";
import { DonutCanvas } from "@/components/canvas";

export default function Home() {
  return (
    <>
      <main className="flex relative flex-row items-center">
        <LeftSide />
        <RightSide />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-[50%] h-[300px] md:h-[400px]">
          <DonutCanvas />
          <h1 className="textstyle absolute top-12 md:top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-extrabold -rotate-12">
            <span className="text-[50px]">Choose</span> <br />
            <span className="font-medium">your </span>
            <span className="text-[45px]">Side</span>
          </h1>
        </div>
        <Navbar />
      </main>
    </>
  );
}
