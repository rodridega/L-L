export const getCarousel = async () => {
  const url =
    "https://docs.google.com/spreadsheets/d/1jtWHp8GC9AXWp92L6is8ADLJ9u-14W2cVvDCG3V3WIA/gviz/tq?";
  try {
    const res = await fetch(url);
    const rep = await res.text();
    const data = JSON.parse(rep.substr(47).slice(0, -2));
    const carouselImages = data.table.rows.map(({ c }) => ({
      image: c[5]?.v,
      id: c[4]?.v,
    }));
    return carouselImages;
  } catch (error) {
    throw new Error(error);
  }
};
