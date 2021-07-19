var position;
var hypnoticball,database;

function setup(){
    database = firebase.database();
    console.log(database)
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    //ref()- refer to the location from where you want to read the value in the database
    //on()- listens/monitors to the values
    //set()- go back to the database , write the updated value there in the same location of the database

    var ballpositionref = database.ref('ball/position')
    ballpositionref.on('value',readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+10);
    }
    drawSprites();
}

//set({x})


function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
       

        'y':position.y+y
       
    })

    
}




    

function readPosition(data){
    position = data.val()
    
    ball.x=position.x;
    ball.y=position.y;
}
