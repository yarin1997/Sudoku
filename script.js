// let webSudoku=[
//      [3,0,0,0,4,0,0,0,0],[5,0,0,0,0,6,0,7,0],[0,9,0,0,8,0,5,0,0]
//     ,[0,0,5,0,0,6,0,7,0],[3,0,0,0,2,0,4,9,0],[0,2,0,4,0,0,1,0,0]
//     ,[0,0,4,0,8,0,0,2,0],[0,3,0,2,0,0,0,0,4],[0,0,0,0,4,0,0,0,3]
    
// ]

let array2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
       [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]]

const solutionArray = [
    [1, 9, 7, 4, 8, 5, 3, 2, 6],
    [8, 5, 6, 1, 3, 2, 9, 4, 7],
    [4, 2, 3, 7,6, 9, 8, 5, 1],
    [8, 1, 4, 6, 5, 2, 9, 7, 3],
    [6, 2, 3, 4, 7, 9, 5, 1, 8],
    [9, 7, 5, 1, 3, 8, 6, 4, 2],
    [2, 3, 1, 5, 4, 9, 7, 6, 8],
    [7, 8, 4, 3, 6, 1, 2, 9, 5],
    [5, 9, 6, 2, 8, 7, 3, 1, 4]
]

let input = document.getElementById('input');
const createBoard = document.getElementById('btn5');
let para = document.getElementById('p');

createBoard.addEventListener('click', () => {
    if (input.value !== '') {
        if (input.value < 18 || input.value > 35) {
            para.innerHTML = 'הלוח מתחיל עם18-35 משבצות מלאות';
            return false;
        }
    }
    let sum =input.value;
    console.log(sum);
    let count = 0;
    while (count < sum) {
        console.log("OK")
        let i = Math.floor(Math.random() * 9);
        let j = Math.floor(Math.random() * 9);
        console.log(i, j)
        if(count>0)
        while(  array2[i][j] !== 0)  {
            
            i = Math.floor(Math.random() * 9);
            j = Math.floor(Math.random() * 9);
            
        }
        array2[i][j]=solutionArray[i][j];
        console.log(array2[i][j])
        count++;
          console.log("OK+"+count)
    }
           newBoard();
})
function checkSome(array, number) {
    let counter=0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (array[i][j] === number) {
                counter++;
            }
          }
    }
    if(Math.ceil(input.value/9)>counter){
        return false;
    }
  
    return true;
}
           
function checkLength(array2) {
    let count2 = 0;
    for (let i = 0; i < 9; i++) {
        if (array2[i] !== 0) {
            count2++;
        }
    }
    return count2;
}

//---------------------------------------------------------------------------------------------

let suduko = [];
let div = document.createElement('div');
// פונקציה שמייצרת את מבנה לוח המשחק וממקמת איקס מספרים באיקס משבצות
function newBoard() {
    document.getElementById('board').innerHTML = '';
    let div = document.createElement('div');
    div.style.display = 'grid';
    div.style.gridTemplateColumns = '160px 160px 160px';
    div.style.gridTemplateRows = '160px 160px 160px';
     const array =JSON.parse(JSON.stringify(array2));
     let z = 1;
    //המע בכל כניסה ללואה הזאת 
    for (let i = 0; i < 9; i++) {
        let arr = [];
        let div2 = document.createElement('div');
        div2.setAttribute('id', `square${i}`);
        div2.style.border = '5px solid black';
        div2.style.display = 'grid';
        div2.style.gridTemplateColumns = '50px 50px 50px';
        div2.style.gridTemplateRows = '50px 50px 50px';

        for (let j = 0; j < 9; j++) {
            let element = document.createElement('input');
            element.classList.add('smallSquare');
            element.type = 'number';
            element.setAttribute('id', `cell${z}`);
            element.min = '1'; // Set the minimum allowed value
            element.max = '9'; // Set the maximum allowed value
            if (array[i][j] !== 0) {
                element.value = `${array[i][j]}`
                element.disabled = true
                element.style.backgroundColor = 'beige'
            }
            div2.appendChild(element);
            arr.push(element);
            z++;
        }
        div.appendChild(div2);
        suduko.push(arr);
    }
    // להוסיף את הלוח לדפדפן
    document.getElementById('board').appendChild(div);

    div.addEventListener('change', function(event){
        let elementIDName = event.target.id
        console.log( elementIDName)
        let idNumber = extractNumberFromString( elementIDName);
        console.log(idNumber);
        let element = document.getElementById( elementIDName);
        if (element.value > 9 || element.value < 1) {
            element.value = '';
            return false
        }
        let bloockIndex=Math.floor( Number(idNumber)/9);
        let insideIndex=((Number(idNumber)-1)%9);

        if( !checkColumn2(bloockIndex,insideIndex,element.value) ||  !checkSquare2(bloockIndex,insideIndex,element.value)|| !checkRow2(bloockIndex,insideIndex,element.value)) {
            element.classList.add('error');
             console.log(element.value)
            setTimeout(() => {
                element.classList.remove('error');
            }, 500)
        }
        bloockIndex=0;
        insideIndex=0;
    })
}
function extractNumberFromString(str) {
    // Use a regular expression to match one or more digits at the end of the string
    let match = str.match(/\d+$/);
    return match ? parseInt(match[0]) : null; // Convert the matched string to a number
}

const checkValidButton = document.getElementById('btn');
// כפתור לבדיקת תקינות
checkValidButton.addEventListener('click', () => {
    //לולאה שבודקת שהמערך מלא
console.log('נכנסתי לפונקצית הבדיקה')
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            console.log(suduko[i][j].value)
            if (!suduko[i][j].value) {
                console.log(`האיבר ה${i} ${j}  ריק`)
                return false;
            }
        }
    }
    // לולאוה שבודקת שכל תת מערך(שמגלם ריבוע של 9 ריבועים ) מכיל את המספרים 1-9
    for (let n = 0; n < 9; n++) {
        for (let i = 0; i < 9; i++) {
            let num1 = suduko[n][i].value;
            for (let j = 0; j < 9; j++) {
                let num2 = suduko[n][j].value;
                if (i != j)
                    if (checkSquare(num1, num2, i, j, n) === false) {
                        return false
                    }
            }
        }
    }
    // לולאה אחרונה לבדיקת תקינות
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num1 = suduko[i][j].value;
            if (checkRows(i, j, num1, suduko) == false || checkColumns(i, j, num1, suduko) == false) {
                return false;
            }
        }
    }
    let x = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let element = document.getElementById(`cell${(i * 9) + (j + 1)}`);
            x++;
            setTimeout(() => {
                element.classList.add('win')
            }, x * 30)
        }
    }
    // alert('you win')
})

// function checkValues(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.lastIndexOf(arr[i]) != i) {
//             return false;
//         }        
//     }
//     return true;
// }

// function checkRows3() {
//     const flat = sudokuArr.flat();
//     for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
//         const row = flat.filter(function(item, index) {
//             return [0,1,2].includes(index % 9);
//         })
//         if (!checkValidButton(row)) {
//             return false
//         }
//     }


//     for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
//         const row = [];
//         const blockIndex = Math.floor(rowIndex/3)
//         for (let i = blockIndex; i < 3; blockIndex++) {
//             row.push(sudokuArr[blockIndex][])
//             // xxx xxx xxx 0,1,2,9,10,11,18,19,20
//             // xxx xxx xxx 3,4,5,12,13,14,21,22,23
//             // xxx xxx xxx 6,7,8,15,16,17,24,25,26
//             //
//             // xxx xxx xxx 27,28,29,36,37,38,45,46,47 
//             // xxx xxx xxx  30,31,32,39,40,41,48,49,50 
//             // xxx xxx xxx 
//             //
//             // xxx xxx xxx
//             // xxx xxx xxx
//             // xxx xxx xxx 
            
//         }
//         if (!checkValues(row)) {
//             return false
//         }

//     }
// }


// פונקציה אשר בודקת על כל איבר שהוא לשהוא לא שובר בשורה שלו את חוקי הפורמט
function checkRows(index1, index2, value, sudokuArr) {

    let col = Math.floor(index1 / 3) * 3;

    let row = Math.floor(index2 / 3) * 3;

    for (let i = col; i < col + 3; i++) {
        for (let j = row; j < row + 3; j++)
            if (sudokuArr[i][j].value == value && (i != index1 && j != index2)) {
                console.log(`check the row of [${j}] [${j}]`)
                return false
            }
    }
}
// פונקציה אשר בודקת על כל איבר שהוא לשהוא לא שובר בתור שלו את חוקי הפורמט
function checkColumns(index1, index2, value, sudokuArr) {
    let col = Math.floor(index1 % 3);
    let row = Math.floor(index2 % 3);
    for (let i = col; i < 9; i += 3)
        for (let j = row; j < 9; j += 3)
            if (sudokuArr[i][j].value == value && (i != index1 && j != index2)) {
                console.log(`check the row of [${i}][${j}]`)
                return false;
            }
}
// פונקציה אשר בודקת עבור כל איבר שהוא לא שווה לאיבר אחר בכל אחד מ9  המערכים
function checkSquare(num1, num2, i, j, n) {
    if (num1 === num2) {
        console.log(`check the column of [${n}][${j}]`);
        let element1 = document.getElementById(`cell${(n * 9) + (i + 1)}`);
        let element2 = document.getElementById(`cell${(n * 9) + (j + 1)}`);
        element1.classList.add('error');
        element2.classList.add('error');
        setTimeout(() => {
            element1.classList.remove('error');
            element2.classList.remove('error');
        }, 2000)
        return false;
    }
}
// //---------------------------------------------------------------------------------------

const btnFillBoard = document.getElementById('btn2');
btnFillBoard.addEventListener('click', () => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let element = document.getElementById(`cell${(i * 9) + (j + 1)}`);
            suduko[i][j].value = solutionArray[i][j];
            suduko[i][j] = element;
        }
    }
})
const btnSolve = document.getElementById('btn3');
document.body.appendChild(btn3);

btnSolve.addEventListener('click', () => {
    solveSudoku(suduko)
})
// let solveSudoku = function (board) {
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board.length; j++) {
//             if (board[i][j] === '') {
//                 for (let l = 1; l < 10; l++) {
//                     if (isValid(board, i, j, l.toString())) {
//                         board[i][j] = l.toString()
//                         let solved = solveSudoku(board)
//                         if (solved !== false) return solved   // if we never hit false outside this loop then it means the board is a solution
//                         board[i][j] = ''                     // if it was false then reset the value
//                     }
//                 }
//                 return false                                  // if we exit the for loop it means there was no solution so return false
//             }
//         }
//     }
//     console.log(board)
//     return board
// };

// function isValid(board, i, j, l) {
//     for (let p = 0; p < board.length; p++) {
//         if (board[i][p] === l) return false
//         if (board[p][j] === l) return false

//         let gridVal = board[3 * Math.floor(i / 3) + Math.floor(p / 3)][3 * Math.floor(j / 3) + p % 3]
//         // 3 * Math.floor(i/3) and 3 * Math.floor(j/3) are the coordinates for 
//         // the top-left square of the 3x3 grid that the value is in
//         if (gridVal === l) return false
//     }

//     return true
// }


// כפתור שמנקה את לוח המשחק
const btnClearBoard = document.getElementById('btn4');
btnClearBoard.addEventListener('click', () => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            array2[i][j] = 0;
            suduko[i][j].value = ''; // Clearing the value
           
            const cell= document.getElementById(`cell${(i * 9) + (j + 1)}`);
            removeAllAttributes(cell);
        }
    }
    function removeAllAttributes(element) {
    Array.from(element.attributes).forEach(attr => {
        element.removeAttribute(attr.name);
        element.value=''
    });
}
});

function checkSquare2(i, j, num) {
    console.log("check square")
    for (let n = 0; n < 9; n++) {
        if(suduko[i][n].value)
        if (suduko[i][n].value === num && n!== j) {
             console.log("false square i-"+i+" j-"+j+" n-"+n)
            return false;
        }
    }
     console.log("true ")
    return true;
}
function checkRow2(index1, index2, num) {
    console.log("check row"+index1+" "+index2)
    let col = Math.floor(index1 / 3) * 3;
    let row = Math.floor(index2 / 3) * 3;
    for (let i = col; i < col + 3; i++) {
        for (let j = row; j < row + 3; j++)
      
            if (suduko[i][j].value == num && (i!= index1 && j != index2)) {
                  console.log(`false row ${i} ${j}`)
                return false;
            }
    }
  console.log('true')
    return true
}
function checkColumn2(index1, index2, num) {
console.log("check column")
    let col =(index1 % 3);
    let row =(index2 % 3);
    for (let i = col; i < 9; i += 3)
        for (let j = row; j < 9; j += 3) {
            if (suduko[i][j].value == num && (i!=index1 && j != index2)) {
             console.log(`false column ${i} ${j}`)
                return false;
            }
        }
       console.log('true')
    return true
}
// function checkColumnByID(id,num){
// let newId=id%9
// let
//     for(let i=0; i<3; i++){
//         for(let j=newId; j<=newId+9; j+=3){
//             if(suduko.getElementById(newId).value)
//             if(suduko.getElementById(`cell${j})`).value==num && j!=id){
//                 return false;
//             }
//             newId+=27;
//         }
//     }
//     return true;
// }
// const solution=[ [3, 8, 7, 6, 4, 5, 9, 1, 2],
//     [5, 1, 2, 9, 3, 6, 8, 7, 4],
//     [4, 9, 6, 7, 8, 1, 5, 3, 2],
//     [8, 4, 5, 3, 1, 9, 2, 7, 6],
//     [3, 7, 1, 8, 2, 4, 6, 9, 5],
//     [6, 2, 9, 4, 5, 7, 1, 8, 3],
//     [7, 6, 4, 5, 8, 3, 3, 2, 9],
//     [9, 3, 8, 2, 7, 4, 1, 6, 4],
//     [2, 5, 3, 1, 6, 9, 7, 4, 8]
// ];
