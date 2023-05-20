import { useEffect } from "react";
import { Navbar, LeftSide, RightSide } from "../components";
import { fetchDesserts } from "../utils/fetchDesserts";
import { fetchMainDishes } from "../utils/fetchMainDishes";

export default function Home({ desserts, mainDishes }) {
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
        <LeftSide mainDishes={mainDishes} />
        <RightSide desserts={desserts} />
      </main>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const desserts = await fetchDesserts();
  const mainDishes = await fetchMainDishes();
  return {
    props: {
      desserts,
      mainDishes,
    },
  };
};
