var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor ='#3e668e';
        console.log('state0');
        game.input.keyboard.addKey(Phaser.keyboard.ONE).onDown.add(changeState, null, null, 1);
    },
    update: function(){}
};

function changeState(i, stateNum){
    console.log(i);
    game.state.start('state + stateNum');
}