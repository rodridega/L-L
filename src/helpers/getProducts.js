export const getProducts = () => {
  const url ="https://docs.google.com/spreadsheets/d/1INp2XAuBS-vxzYv-qIlK1J5-SAU7-H2_p_FHl2quz94/gviz/tq?";

  
  fetch(url)
    .then((res) => res.text())
    .then((rep) => {
      const data = JSON.parse(rep.substr(47).slice(0, -2));
      const objetos = data.table.rows.map(({ c }) => ({
        title: c[0]?.v,
        price: c[1]?.v,
        description: c[2]?.v,
        image: c[3]?.v,
        id: c[4]?.v,
      }));
      
    });
 
};
