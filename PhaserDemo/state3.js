demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor ='#d424b3'
        console.log('state3');
        addChangeStateEventListeners();
    },
    update: function(){}
};