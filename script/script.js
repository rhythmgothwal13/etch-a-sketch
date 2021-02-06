const container = document.querySelector('.container');
const button = document.querySelector('#reset');
const button1 = document.querySelector('#erase');
button1.addEventListener('click',erase);

function createGrid(gridSize){
   
    for(i=0;i<gridSize*gridSize;i++){
        const cell = document.createElement('div');
        cell.classList='cell';
        cell.addEventListener("mouseover", fillColor);
        container.appendChild(cell);
    }
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
   
   
}
createGrid(16);
 function fillColor(e){
    e.target.style.backgroundColor = 'rgb(0,0,0)';
 }

 function resize(){
     let s = prompt("Enter new size below 100");
     if(s!== null){
         s=parseInt(s);
         if(s< 1 || s > 100 || Number.isNaN(s)){
            alert("Enter a number from 1-64 range");
            resize(); 
         }else{
            emptyGrid();
             createGrid(s);
         }
     }
 }

 function emptyGrid(){
    const cells = container.querySelectorAll('.cell');
     cells.forEach((element) => {
         container.removeChild(element);
     });
 }
 function erase(){
     const cells = container.querySelectorAll('.cell');
     cells.forEach((element)=>{
         element.style.backgroundColor = 'rgb(255,255,255)';
     });
 }

 button.addEventListener('click',resize);
 