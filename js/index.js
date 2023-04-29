let inputdir={x:0,y:0};
foodsound=new Audio("food.mp3")
gameoversound=new Audio("gameover.mp3")
movesound=new Audio("move.mp3")
musicsound = new Audio("music.mp3") 
let lastPaintTime=0;
let speed=4;
score=0;
let snakearr=[
    {x: 11,y: 15}
]
food = {x: 9,y: 15};

function isCollide(snake)
{
    // if snake collide with itself.
    for(i=1;i<snakearr.length;i++)
    {
        if(snake[i].x ===snake[0].x && snake[i].y === snake[0].y)
        {
            return true;
        }
    }   
    // if snake collide with boundry. 
    if(snake[0].x >=18 || snake[0].x<=0 || snake[0].y >=18 || snake[0].y<=0)
    {
        return true;
    }
    
}
//main coding start from here
function main(ctime){
    window.requestAnimationFrame(main);

    // console.log(ctime)
    if((ctime-lastPaintTime)/1000 < 1/speed)
    {
        return;
    }
    lastPaintTime=ctime;
    gameEngine();
}
function gameEngine(){

    //part 1:updating the snake array and food.
    if(isCollide(snakearr)){
        gameoversound.play();
        musicsound.pause();
        inputdir ={x:0,y:0}
        alert("game is over.start game with press any key.");
        snakearr=[{x: 11,y: 18}]
        // musicsound.play();
        score=0;
    }

    //if snake eat the food then incrementing the score and place new food at the  next place.
     if(snakearr[0].y === food.y && snakearr[0].x===food.x){
        foodsound.play();
        snakearr.unshift({x:snakearr[0].x+inputdir.x,y:snakearr[0].y+inputdir.y})    //in this statement we add food to the dirction of snake and increase the length of the snake.
        
        
        let a=2;
        let b=16;
        food={x:Math.round(a +(b-a)*Math.random()), y:Math.round(a+(b-a)*Math.random())}     //this is formula for place food at any place in grid.we can search on google.
     }

     //moving the snake
    for(let i=snakearr.length-2;i>=0;i--){
        snakearr[i+1]={...snakearr[i]};
    }

     snakearr[0].x +=inputdir.x;
     snakearr[0].y +=inputdir.y;
 
    //part 2:display the snake and food.

    board.innerHTML = "";        //first of all i am clear my board whole data through innerhtml
    snakearr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snake');
        
        if(index == 0)
        {
            snakeElement.classList.add('head');     
        }      //classlist simply return property and classname of class(here food)
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);               //display my div on board.

    });

    //display the food

    foodElement=document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');           //classlist simply return property and classname of class(here food)
    board.appendChild(foodElement);               //display my div on board.   
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e =>{
    inputdir={x:0,y:1}                                 //start the game
    movesound.play()
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp")
            inputdir.x=0;
            inputdir.y=-1;
            break;
         
        case "ArrowDown":
            console.log("ArrowDown")
            inputdir.x=0;
            inputdir.y=1;
            break;
        
        case "ArrowRight":
            console.log("ArrowRight")
            inputdir.x=1;
            inputdir.y=0;
            break;
    
        case "ArrowLeft":
            console.log("ArrowLeft")
            inputdir.x=-1;
            inputdir.y=0;
            break;
        default:
            break;    
    }
})