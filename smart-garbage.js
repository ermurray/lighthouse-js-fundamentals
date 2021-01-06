const smartGarbage = function (trash, bins) {
  let key = Object.keys(bins);
  for (let k of key){
    if (k === trash){
      bins[trash] += 1;
      return bins;
    }
  }
};
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));