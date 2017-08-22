//Class used for cards.
class Cards{
    constructor(){
        this.cards = ["1S","2S","3S","4S","5S","6S","7S","8S","9S","10S","11S","12S","13S",
                      "1C","2C","3C","4C","5C","6C","7C","8C","9C","10C","11C","12C","13C",
                      "1H","2H","3H","4H","5H","6H","7H","8H","9H","10H","11H","12H","13H",
                      "1D","2D","3D","4D","5D","6D","7D","8D","9D","10D","11D","12D","13D"];
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