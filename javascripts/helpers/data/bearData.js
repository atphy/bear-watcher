const bearsArray = [];

const setBears = (newBear) => {
  bearsArray.push(newBear);
};

const getBears = () => {
  return bearsArray;
};

export default { setBears, getBears }