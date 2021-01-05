function range(start, end, step){
  let a1 = [];
  if(start === undefined || start > end || step <= 0 ){
    return a1;
  }else{
    for (let i = start; i <= end; i += step){
      a1.push(i);
    } 
    return a1;
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
