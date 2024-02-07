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
  console.log(`pushCols:: ${output}`);
};

const sliceRight = (row, slicer) => {
  output.push(row.slice(slicer));
  console.log(`sliceRight:: ${output}`);
};

const reverseLeft = (row) => {
  output.push(row.reverse());
  console.log(`reverseLeft:: ${output}`);
};

let rowCount = 0;
let verticalStep = 1;

const nextRow = () => {
  rowCount += verticalStep;
  if (rowCount > matrix.length - 1) {
    verticalStep = -1;
  }
};

while(output.length <= maxim) {
  if (rowCount === 0) {
    pushCols(matrix[rowCount]);
    nextRow();
  } else if (rowCount >= matrix.length -1) {
    reverseLeft(matrix[rowCount]);
    nextRow();
  } else if (rowCount > 0) {
    sliceRight(matrix[rowCount], -1);
    nextRow();
  }
};

