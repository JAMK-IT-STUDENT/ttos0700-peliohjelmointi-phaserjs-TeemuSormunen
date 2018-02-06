var text;
WebFontConfig = {
google: { families: [ 'Nanum Pen Script' ] }
};

demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js')
    },
    create: function(){
        console.log('state8');
        addChangeStateEventListeners();
        text = 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices enim sem, quis interdum velit blandit eget. Suspendisse mollis est a lectus dictum ornare. Donec a suscipit magna. Sed mauris turpis,tristique quis ante ut, ullamcorper facilis nisl. proin quis orci faucibus. congue nisi ac, imperdies justo, Donec scelerisque, libero.';
        
        this.spellOutText(100, 100, 1000, text, 30, 40, '#fff', 'Nanum Pen Script');
        
    },
    
    spellOutText: function(x, y, width ,text, fontSize, speed, fill, font){
        var sentence = game.add.text(x,y,'',{fontSize: fontSize + 'px',fill:fill,font:font});
        var currentLine = game.add.text(10,10,'',{fontSize:fontSize +'px', font:font});
        currentLine.alpha = 0;
        var loop = game.time.events.loop(speed, addChar);
        
        var index = 0;
        
        function addChar() {
            sentence.text += text[index];
            currentLine.text += text[index];
            
            if(currentLine.width > width && text[index] == ' ') {
                sentence.text += '\n';
                currentLine.text = '';
            }
            if(index >= text.length - 1){
                game.time.events.remove(loop);
                console.log('stop');
            }
            index++;
        }
    }
};