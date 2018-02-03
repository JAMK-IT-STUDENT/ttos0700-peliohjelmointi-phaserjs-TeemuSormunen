var bullets, pipe, velocity = 1000,nextFire = 0, fireRate = 200, enemy, bullet, enemyGroup;

demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){
        game.load.image('bottom', 'Assets/Sprites/cannonbottom.png');
        game.load.image('pipe','Assets/Sprites/cannonpipe.png');
        game.load.image('bullet', 'Assets/Sprites/bullet.png');
    },
    create: function(){
        game.stage.backgroundColor = '#3e668e';
            console.log('state2');
        addChangeStateEventListeners();
        
        var base = game.add.sprite(centerX, centerY, 'bottom');
        base.scale.setTo(0.5);
        base.anchor.setTo(0.4);
        
        pipe = game.add.sprite(centerX, centerY, 'pipe');
        pipe.scale.setTo(0.5);
        pipe.anchor.setTo(0.1, 0.5);
        
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, 'bullet');
        
        
        bullets.setAll('checkWorldBoundes', true);
        bullets.setAll('outOfBoundesKill', true);
        
        enemy= game.add.sprite(100, 200, 'ukko');
        game.physics.enable(enemy);
        
        enemyGroup = game.add.group();
        enemyGroup.enableBody = true;
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE; 
        
        for(var i = 0; i < 3; i++) {
            enemyGroup.create(1300, 350 * i + 100, 'ukko');
        }
        enemyGroup.setAll('anchor.y', 0.5);
        enemyGroup.setAll('anchor.x', 0.5);
        enemyGroup.setAll('scale.y', 0.4);
        enemyGroup.setAll('scale.x', 0.4);
    },
    update: function(){
        pipe.rotation = game.physics.arcade.angleToPointer(pipe);
        if(game.input.activePointer.isDown){
            this.fire();
        }
        game.physics.arcade.overlap(bullets, enemy, this.hitEnemy);
        game.physics.arcade.overlap(enemyGroup, bullets, this.hitGroup);
    },
    fire: function() {
        if(game.time.now > nextFire){
            nextFire = game.time.now + fireRate;
        console.log('firing');
            bullet = bullets.getFirstDead();
            bullet.reset(pipe.x, pipe.y);
            bullet.anchor.setTo(-3.5, 0.5);
        game.physics.arcade.moveToPointer(bullet, velocity);
        bullet.rotation= game.physics.arcade.angleToPointer(bullet);
    }
    },
    hitEnemy: function(){
        console.log('hit');
        enemy.kill();
        bullet.kill();
    },
    hitGroup: function(e){
        bullet.kill();
        e.kill(); 
    }
};