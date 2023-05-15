import { useEffect } from "react";
import { Navbar, LeftSide, RightSide } from "../components";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "object") {
      return;
    }

    const content = document.querySelector(".content");
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    left.addEventListener("mouseenter", () => {
      content.classList.add("hover-left");
    });

    left.addEventListener("mouseleave", () => {
      content.classList.remove("hover-left");
    });

    right.addEventListener("mouseenter", () => {
      content.classList.add("hover-right");
    });

    right.addEventListener("mouseleave", () => {
      content.classList.remove("hover-right");
    });
  }, []);

  return (
    <>
      <main className="content relative w-full h-screen overflow-hidden">
        <Navbar />
        <LeftSide />
        <RightSide />
      </main>
    </>
  );
}
