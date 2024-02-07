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
  output.push(row);
  topEdge++;
  console.log(`pushCols:: ${output}`);
};

const sliceRight = (row, slicer) => {
  output.push(row.slice(slicer));
  console.log(`sliceRight:: ${output}`);
};

const reverseLeft = (row) => {
  output.push(row.reverse());
  bottomEdge++;
  console.log(`reverseLeft:: ${output}`);
};

let rowCount = 0;
let verticalStep = 1;
let topEdge = 0;
let bottomEdge = matrix.length - 1;

const nextRow = () => {
  rowCount += verticalStep;
  if (rowCount > bottomEdge) {
    verticalStep = -1;
  }
};

while(output.length <= maxim) {
  if (rowCount === topEdge) {
    pushCols(matrix[rowCount]);
    // topEdge++;
    nextRow();
  } else if (rowCount >= bottomEdge) {
    reverseLeft(matrix[rowCount]);
    // bottomEdge++;
    nextRow();
  } else if (rowCount > topEdge) {
    sliceRight(matrix[rowCount], -1);
    nextRow();
  }
};

