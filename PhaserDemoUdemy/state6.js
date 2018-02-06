demo.state6 = function() {};
demo.state6.prototype = {
    preload: function() {
        game.load.image('volcano', 'Assets/Sprites/volcano.png');
        game.load.image('redball', 'Assets/Sprites/redball.png');
        game.load.image('yball', 'Assets/Sprites/yellowball.png');
    },
    create: function(){
        console.log('state6');
        addChangeStateEventListeners();
        
        game.add.sprite(centerX - 100, 1000, 'volcano').anchor.setTo(0.5, 1);
        
        var emitter = game.add.emitter(centerX, 500, 2000);
        emitter.makeParticles(['redball', 'yball'], 0 , 5000, false, true);
        emitter.maxParticleSpeed.set(300, -300);
        emitter.minParticleSpeed.set(-300, 300);
        emitter.gravity = 300;
        
        game.time.events.add(2000, function(){
            emitter.start(false, 5000, 20);
            game.time.events.loop(500, function(){
                if(emitter.on){
                    emitter.on = false;
                } else {
                    emitter.on = true;
                }
            });
        });
        
    },
    update: function(){}
};