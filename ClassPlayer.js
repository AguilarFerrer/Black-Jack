//Class used for player and cpu.
class Player{
    constructor(){
        this.cards = new Array();
        this.points = 0;
    }
    
    //Set | Get of cards.
    get card(){ return this.cards; }
    set card(value){ this.cards.push(value); }
    
    //Set | Get of points.
    get point(){ return this.points; }
    set point(value){ this.points = value; }
    
    //Cleans the array cards.
    RebootCards(){ this.cards.length = 0; }
    
    //Cleans the object.
    RebootAll(){ this.cards.length = 0; this.point = 0; }
    
}