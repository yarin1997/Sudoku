let suduko = [];
let div = document.createElement('div');
div.style.display = 'grid';
div.style.gridTemplateColumns = '160px 160px 160px';
div.style.gridTemplateRows = '160px 160px 160px';
let z = 1;
const array = [
    [8, 0, 5, 0, 0, 0, 0, 0, 4],
    [1, 3, 0, 7, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 3, 5, 0, 6, 0],
    [0, 0, 1, 2, 9, 0, 7, 4, 3],
    [0, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 3, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 9, 0, 0],
    [0, 0, 0, 9, 0, 5, 0, 0, 0],
    [0, 1, 0, 7, 0, 0, 4, 0, 0]]

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
        element.style.textAlign = 'center';
        element.style.fontSize = '25px';
        element.style.width = '45px';
        element.style.height = '45px';
        element.type='number';
        
        element.setAttribute('id', `${z}`);
        element.min = '1'; // Set the minimum allowed value
        element.max = '9'; // Set the maximum allowed value
   
        if(array[i][j] !== 0){
            element.value = `${array[i][j]}`
            element.disabled = true
            element.style.backgroundColor = 'gray'
        }
        div2.appendChild(element);
        arr.push(element);
        z++;
    }

    div.appendChild(div2);
    suduko.push(arr);
}
document.body.appendChild(div);
div.addEventListener('change',()=>{
    let x=0;
for(let i=0; i<9; i++){

    for(let j=0; j<9; j++){
        if(!suduko[i][j].value){
            return false;
        }
        if (check(i,j, suduko[i][j].value,x)) {

        }
    }
x++;
}
    alert('you win')
})
function check(index1, index2, value,x){
    for(let i=0; i<9; i++){
        if(suduko[index1][i].value == value && i!=index2){
            return false;
        }
    }
    for(let i=0; i<9; i++){
        if(suduko[i][index2].value == value && i!=index1){
            return false;
        }
    }
let div=document.getElementById(`square${x}`)
if(div)
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
      if(div[i][j].value == value && (i!=index1 && j!=index2)){
          return false;
      }
           
        }
    }
    return true
}
