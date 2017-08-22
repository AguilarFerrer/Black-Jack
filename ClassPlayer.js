//Class used for player and cpu.
class Player{
    constructor(){
        this.cards = new Array();
        this.points = 0;
        this.totalcards = 0;
        this.aces = false;
    }
    
    //Set | Get of cards.
    get card(){ return this.cards; }
    set card(value){ this.cards.push(value); }
    
    //Set | Get of points.
    get point(){ return this.points; }
    set point(value){ this.points = value; }
    
    //Set | Get of totalcards,
    get totalcard(){ return this.totalcards; }
    set totalcard(value){ this.totalcards = value; }
    
    //Set | Get of ace,
    get ace(){ return this.aces; }
    set ace(value){ this.aces = value; }
    
    //Cleans the array cards and totalcards.
    RebootCards(){ this.cards.length = 0; this.totalcard = 0; }
    
    //Cleans the object.
    RebootAll(){ this.cards.length = 0; this.point = 0; this.totalcards = 0; }
    
}