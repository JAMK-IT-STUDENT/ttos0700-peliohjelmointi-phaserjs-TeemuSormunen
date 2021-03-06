var i;
demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        console.log('state4');
        addChangeStateEventListeners();
        
        a1 = game.add.sprite(50, 100, 'ukko');
        a2 = game.add.sprite(350, 100, 'ukko');
        a3 = game.add.sprite(650, 100, 'ukko');
        a4 = game.add.sprite(950, 100, 'ukko');
        a5 = game.add.sprite(1250, 100, 'ukko');
        game.add.tween(a1).to({y: '+400'},2000, 'Quad.easeOut', true);
        i = game.add.tween(a2).to({x: 100, y: 0}, 1000, 'Elastic.easeOut');
        game.add.tween(a3).from({y: 1000},1500, 'Circ.easeOut', true);
        game.add.tween(a4.anchor).to({x: 1},1000,'Linear',true,100,false,true).loop(true);
        game.add.tween(a5).to({alpha: 0}, 1000, 'Bounce', true);
    },
    update: function(){}
};