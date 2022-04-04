const generateDummyData = () => {
  let data = [];

  for (let i = 0; i < 10000; i++) {
    data.push(`Product ${i}`);
  }

  return data;
};

export default generateDummyData;
