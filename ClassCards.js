//Class used for cards.
class Cards{
    constructor(){
        this.cards = ["1p","2p","3p","5p","6p","7p","8p","9p","10p","11p","12p","13p","1t","2t","3t","5t","6t","7t","8t","9t","10t","11t","12t","13t","1c","2c","3c","5c","6c","7c","8c","9c","10c","11c","12c","13c","1d","2d","3d","5d","6d","7d","8d","9d","10d","11d","12d","13d"];
        this.useds = new Array(52);
    }
    
    //Get of cards.
    get card(){ return this.cards; }
    
    //Set | Get of used.
    get used(){ return this.useds; }
    set used(index){ this.useds[index] = true};
    
    //Cleans the array useds.
    RebootUsed(){ this.useds.length = 0; this.useds.length = 52;}
}