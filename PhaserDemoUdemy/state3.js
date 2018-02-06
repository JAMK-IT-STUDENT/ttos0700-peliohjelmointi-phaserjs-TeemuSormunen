var sound;
demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){
        game.load.image('button1', 'Assets/Sprites/button1.png');
        game.load.image('button2', 'Assets/Sprites/button2.png');
        game.load.image('button3', 'Assets/Sprites/button3.png');
        game.load.audio('pops', 'Assets/sounds/pop.mp3'); 
    },
    create: function(){
        game.stage.backgroundColor ='#d424b3'
        console.log('state3');
        addChangeStateEventListeners();
        
        sound = game.add.audio('pops');
        sound.addMarker('low',0.45, 0.6);
        sound.addMarker('high',1.25,1.4);
        
        
        var b1 = game.add.button(100, 100,'button1', function(){
            changeState(null, 1);
        });
        var b2 = game.add.button(400, 400,'button2', function(){
            changeState(null, 2);
        });
        var b3 = game.add.button(700, 700,'button3');
        b1.onInputDown.add(this.tint, b1);
        b2.onInputDown.add(this.tint, b2);
        b3.onInputDown.add(this.tint, b3);
        
        b1.onInputUp.add(this.unTint, b1);
        b2.onInputUp.add(this.unTint, b2);
        b3.onInputUp.add(this.unTint, b3); 
        
    },
   
    tint: function(){
        this.tint = 0xbbbbbb;
        sound.play('low');
    },
    unTint: function(){
        this.tint = 0xFFFFFF;
        sound.play('high');
    }
};