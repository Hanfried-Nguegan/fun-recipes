export const fetchDesserts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getDesserts`
  );
  const data = await res.json();
  const desserts = data.desserts;

  return desserts;
};
