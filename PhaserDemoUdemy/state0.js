var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, ukko, speed = 6;
demo.state0 = function(){};
demo.state0.prototype = {
    
    preload: function() {
    game.load.spritesheet('ukko', 'Assets/spritesheet/ukko.png',259, 470);
    game.load.image('forest', 'Assets/backgrounds/Background1.png');
          
    },
    
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor ='#3e668e';
        console.log('state0');
        addChangeStateEventListeners();
        game.world.setBounds(0, 0, 2813, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        var forestBG = game.add.sprite(0, 0, 'forest');
        
        ukko = game.add.sprite(centerX, centerY, 'ukko');
        ukko.anchor.setTo(0.5, 0.5);
        game.physics.enable(ukko);
        ukko.body.collideWorldBounds = true;
        ukko.animations.add('walk',[0,1]);
        ukko.scale.setTo(0.6, 0.6);
        
        game.camera.follow(ukko);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000 );
    },
    update: function(){
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
                ukko.scale.setTo(0.6, 0.6);
            ukko.x += speed;
            ukko.animations.play('walk',7,true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            ukko.scale.setTo(-0.6, 0.6);
            ukko.x -= speed; 
            ukko.animations.play('walk',7,true);
        } 
        else{
            ukko.animations.stop();
            ukko.frame = 0;
        }
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            ukko.y -= speed;
            if(ukko.y < 440 ){
               ukko.y = 440;
                ukko.animations.play('walk',7,true);
               }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            ukko.y += speed; 
            if(ukko.y > 734 ){
               ukko.y = 734;
                ukko.animations.play('walk',7,true);
        } 

        }
    }
};

function changeState(i, stateNum){
    console.log(i);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}
function addChangeStateEventListeners(){
        addKeyCallback(Phaser.Keyboard.ZERO,changeState, 0);
        addKeyCallback(Phaser.Keyboard.ONE,changeState, 1);
        addKeyCallback(Phaser.Keyboard.TWO,changeState, 2);
        addKeyCallback(Phaser.Keyboard.THREE,changeState, 3);
        addKeyCallback(Phaser.Keyboard.FOUR,changeState, 4);
        addKeyCallback(Phaser.Keyboard.FIVE,changeState, 5);
        addKeyCallback(Phaser.Keyboard.SIX,changeState, 6);
        addKeyCallback(Phaser.Keyboard.SEVEN,changeState, 7);
        addKeyCallback(Phaser.Keyboard.EIGHT,changeState, 8);
        addKeyCallback(Phaser.Keyboard.NINE,changeState, 9);
}