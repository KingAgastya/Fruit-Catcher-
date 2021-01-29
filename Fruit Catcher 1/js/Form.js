class Form{
    constructor(){
       this.input = createInput("Enter your name");
       this.input1 = createInput("girl/boy");
       this.button = createButton('Start');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.input1.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('color', 'lime');

        this.input.position(550, 400);
        this.input.style('background', 'yellow');

        this.button.position(560, 500);
        this.button.style('background', 'cyan');

        this.reset.position(900, 660);
        this.reset.style('background', 'red');

        this.input1.position(550, 450);
        this.input1.style('background', 'purple');

        this.button.mousePressed(() => {
            this.input.hide();
            this.input1.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400, 250);
            this.greeting.style('color', 'white');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}