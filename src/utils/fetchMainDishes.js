export const fetchMainDishes = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getMain`);
  const data = await res.json();
  const mainDishes = data.mainDishes;
  return mainDishes;
};
