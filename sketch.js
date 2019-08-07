const container=document.getElementById('container');
const gridContainer=document.createElement('div');

createGrids(16);
function createGrids(r){
    for(let i=0;i<r*r;i++){
        let squares=document.createElement('div');
        squares.style.width=(480/r - 0.2) + "px";
        squares.style.height=(480/r - 0.2) + "px";
        squares.className="grids";
        gridContainer.appendChild(squares);
        container.appendChild(gridContainer);

        const clearGrid=document.getElementById('clear');
        clearGrid.addEventListener('click',function clearAll(){
        gridContainer.removeChild(squares);
     })
     

    }   
        let coloring='';
        const dark=document.getElementById('black');
        dark.addEventListener('click',function(){
            coloring='black'
        })
        const everyGrid=document.querySelectorAll('.grids');
        everyGrid.forEach(function (e){
            e.addEventListener('mouseover',function(hover){
           if(coloring=='black'){
        hover.target.style.background='black'}
        else{
            hover.target.style.background=randomColor()
        }
    })
        
    })


        


}


      

function randomColor(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let color='rgb(' + red +',' + green + ',' + blue + ')';
    return color;
}

function emptyGrid(){
document.querySelectorAll('.grids').forEach(function(grid){
grid.parentNode.removeChild(grid)
})
}
const newGrid=document.getElementById('new');
newGrid.addEventListener('click',function(){
    emptyGrid();
    let rowNumber=prompt ('How many squares per row would you like to create?');
    
    createGrids(rowNumber);

})
