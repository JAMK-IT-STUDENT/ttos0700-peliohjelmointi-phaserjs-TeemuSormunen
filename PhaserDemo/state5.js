var accel = 400, platform, platformGroup;
demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){
        game.load.image('platform', 'Assets/Sprites/platform.png');
    },
    create: function(){
        console.log('state5');
        addChangeStateEventListeners();
        
        ukko = game.add.sprite(centerX, 500, 'ukko');
        platform = game.add.sprite(0, 800, 'platform');
        platformGroup = game.add.group();
        platformGroup.create(650, 400, 'platform');
        platformGroup.create(1300,400, 'platform');
        
        game.physics.enable([ukko, platform, platformGroup]);
        
        ukko.body.gravity.y = 500;
        ukko.body.bounce.y = 0.3;
        ukko.body.drag.x = 400;
        ukko.scale.setTo(0.6, 0.6);
        ukko.body.collideWorldBounds = true;
        platform.body.immovable = true;
        platformGroup.setAll('body.immovable', true);
        
    },
    update: function(){
        game.physics.arcade.collide(ukko, [platform, platformGroup]);
        if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            ukko.body.acceleration.x = -accel;  
        } 
        else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            ukko.body.acceleration.x = accel;
        } 
        else {
            ukko.body.acceleration.x = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            ukko.body.velocity.y = -300;
        }
    }
};