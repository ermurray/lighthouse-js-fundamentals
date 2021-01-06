const judgeVegetable = function(vegetables, metric) {
  let best = vegetables[0][metric];
  let winner = vegetables[0].submitter;
  for(let i = 1; i < vegetables.length; i++){
    if (vegetables[i][metric] > best){
      winner = vegetables[i].submitter;
    }
  }
  return winner;
};

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 1,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));