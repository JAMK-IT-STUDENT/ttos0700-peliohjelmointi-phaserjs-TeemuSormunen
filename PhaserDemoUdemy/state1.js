
demo.state1 = function(){};
var cursors, vel = 500, rocks, grass;
demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('field', 'Assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grass', 'Assets/tilemaps/grass.png');
        game.load.image('stone2', 'Assets/tilemaps/stone2.png');
        game.load.spritesheet('ukko', 'Assets/spritesheet/ukko.png',259, 470);
    },
    create: function(){
        game.stage.backgroundColor ='#3ba24f'
        console.log('state1');
        addChangeStateEventListeners();
        var map = game.add.tilemap('field');
        map.addTilesetImage('grass');
        map.addTilesetImage('stone2');
        
        map.setCollisionBetween(1,9, true, 'rocks');
        map.setCollision(11, true, 'grass');
        
        grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');
        ukko = game.add.sprite(200, 200, 'ukko');
        ukko.scale.setTo(0.2, 0.2);
        game.physics.enable(ukko);
        
        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function(){
        game.physics.arcade.collide(ukko, rocks,function(){console.log("Hitting rocks")});
        game.physics.arcade.collide(ukko, grass,function(){console.log("Hitting grass")});
        if(cursors.up.isDown){
            ukko.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            ukko.body.velocity.y = vel;
        }
        else{
            ukko.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            ukko.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown){
            ukko.body.velocity.x = vel;
        }
        else{
            ukko.body.velocity.x = 0;
        }
        
    }
};