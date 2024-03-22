
let randomArr;
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

const solutionArray = [[
    [1, 9, 7, 4, 8, 5, 3, 2, 6],
    [8, 5, 6, 1, 3, 2, 9, 4, 7],
    [4, 2, 3, 7,6, 9, 8, 5, 1],
    [8, 1, 4, 6, 5, 2, 9, 7, 3],
    [6, 2, 3, 4, 7, 9, 5, 1, 8],
    [9, 7, 5, 1, 3, 8, 6, 4, 2],
    [2, 3, 1, 5, 4, 9, 7, 6, 8],
    [7, 8, 4, 3, 6, 1, 2, 9, 5],
    [5, 9, 6, 2, 8, 7, 3, 1, 4]
],
 [
 [5,3,4,6,7,2,1,9,8],
 [6,7,8,1,9,5,3,4,2],
 [9,1,2,3,4,8,5,6,7],
 [8,5,9,4,2,6,7,1,3],
 [7,6,1,8,5,3,9,2,4],
 [4,2,3,7,9,1,8,5,6],
 [9,6,1,2,8,7,3,4,5],
 [5,3,7,4,1,9,2,8,6],
 [2,8,4,6,3,5,1,7,9]
    ],
    [
     [6,3,4,7,8,1,2,9,5],
    [8,9,1,5,2,6,3,4,7],
    [7,2,5,4,9,3,8,6,1],
    [5,4,2,3,7,6,8,1,9],
    [9,6,8,2,1,4,7,5,3],
    [1,3,7,9,5,8,2,4,6],
    [1,6,8,4,2,3,9,5,7],
    [4,3,9,1,7,5,6,8,2],
    [5,7,2,6,8,9,3,1,4]
]];

let input = document.getElementById('input');
const createBoard = document.getElementById('btn5');
let para = document.getElementById('p');
console.log(solutionArray.length)
createBoard.addEventListener('click', () => {
   if(!isEmpty(array2))
   {
    cleanBoard();
   }
    randomArr=0;
    randomArr=Math.floor(Math.random()*solutionArray.length);
    console.log("random arr "+randomArr)
    console.log(solutionArray[randomArr])
    if (input.value !== '') {
        if (input.value<18 || input.value> 35) {
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
        array2[i][j]=solutionArray[randomArr][i][j];
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
function isEmpty(array2) {

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (array2[i][j] !== 0) {
                return false;
            }
        }
    }
    
    return true;
    }

//---------------------------------------------------------------------------------------------

let suduko = [];
let div = document.createElement('div');
newBoard();
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
            }, x * 20)
        }
    }
    // alert('you win')
})


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
    if(isEmpty(suduko))
    return false;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let element = document.getElementById(`cell${(i * 9) + (j + 1)}`);
            suduko[i][j].value = solutionArray[randomArr][i][j];
            suduko[i][j] = element;
        }
    }
})
const btnSolve = document.getElementById('btn3');
document.body.appendChild(btn3);

btnSolve.addEventListener('click', () => {
    solveSudoku(suduko)
})


// כפתור שמנקה את לוח המשחק
const btnClearBoard = document.getElementById('btn4');
btnClearBoard.addEventListener('click', () => {
cleanBoard();
})

function cleanBoard() {
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
};

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
