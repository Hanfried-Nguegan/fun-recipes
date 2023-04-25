import { Navbar, LeftSide, RightSide } from "@/components";

export default function Home() {
  return (
    <>
      <main className="relative w-full h-screen overflow-hidden">
        <Navbar />
        <div className="relative w-full h-full">
          <LeftSide />
          <RightSide />
        </div>
      </main>
    </>
  );
}
