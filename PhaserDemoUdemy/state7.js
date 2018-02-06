var arrow, startPointX, startPointY, endPointX, endPointY, swipeDirection, leeway = 10;
demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){
        game.load.image('arrow', 'Assets/Sprites/arrow.png');
    },
    create: function(){
        console.log('state7');
        addChangeStateEventListeners();
        
        arrow = game.add.sprite(centerX, centerY, 'arrow');
        arrow.anchor.setTo(0.5);
        
        game.input.onDown.add(this.startSwipe);
        game.input.onUp.add(this.getSwipeDirection);
        
    },
    update: function(){},
    startSwipe: function(){
        startPointX = game.input.x;
        startPointY = game.input.y;
    },
    getSwipeDirection: function() {
        endPointX = game.input.x;
        endPointY = game.input.y;
        if(Math.abs(endPointY - startPointY) < leeway && Math.abs(enpointX - startPointX) < leeway){
            return false;
        }
        if (Math.abs(endPointY - startPointY) < Math.abs(endPointX - startPointX)) {
            console.log('Horizontal');
            if(endPointX > startPointX){
                swipeDirection = 90;
            } else {
                swipeDirection = 270;
            }
        } else {
            console.log('Vertical');
            if (endPointY > startPointY){
                swipeDirection = 180;
            } else {
                swipeDirection = 0;
            }
        }
        arrow.angle = swipeDirection;
    }
};