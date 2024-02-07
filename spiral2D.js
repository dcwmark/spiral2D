const matrix = [[
   1,  2,  3, 4
], [
  12, 13, 14, 5
], [
  11, 16, 15, 6
], [
  10,  9,  8, 7
]];

console.log(`matrix:: ${matrix}`);

let output = [];
let maxim = matrix.length * matrix[0].length;
console.log(`maxim:: ${maxim}`);

const pushCols = (row) => {
  output.push(row.slice(leftEdge, rightEdge));
  console.log(`pushCols:: ${output}`);
};

const sliceRight = (row, slicer) => {
  output.push(row.slice(slicer));
  console.log(`sliceRight:: ${output}`);
};

const sliceLeft = (row) => {
  output.push(row[leftEdge]);
  console.log(`sliceLeft:: ${output}`);
}

const reverseLeft = (row) => {
  output.push(row.reverse());
  topEdge++;
  bottomEdge--;
  rightEdge--;
  console.log(`reverseLeft:: ${output}`);
};

let rowCount = 0;
let verticalStep = 1;
let topEdge = 0;
let bottomEdge = matrix.length - 1;
let leftEdge = 0;
let rightEdge = matrix[0].length;

const nextRow = () => {
  if (rowCount > bottomEdge) {
    verticalStep = -1;
  }
  rowCount += verticalStep;
};

while(output.flat().length <= maxim) {
  if (rowCount === topEdge) {
    pushCols(matrix[rowCount]);
    nextRow();
  } else if (rowCount > topEdge && rowCount < bottomEdge) {
    sliceRight(matrix[rowCount], -1);
    nextRow();
  } else if (rowCount >= bottomEdge) {
    (verticalStep === -1)
      ? sliceLeft(matrix[rowCount])
      : reverseLeft(matrix[rowCount]);
    nextRow();
  }
};

