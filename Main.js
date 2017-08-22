//Main.js

//ClassPlayer.js.
    document.write("<script type='text/javascript' src='ClassPlayer.js'></script>");
//ClassCards.js.
    document.write("<script type='text/javascript' src='ClassCards.js'></script>");


//Functions for the program.
function Random1to52(){
    return Math.floor(Math.random() * 52) + 1;
}

function SubstrCard(obj, i, val1, val2){
    return obj.card[i].substring(val1,val2);
}

function GetCard(obj1, obj2){
    var pos = Random1to52()-1;
    while (obj2.used[pos] == true){ pos = Random1to52()-1; }
    obj1.card = obj2.card[pos];
    Count(obj1);
    obj2.used = pos;
}

function Count(obj){          
    if (parseInt(SubstrCard(obj, obj.card.length-1, 0, 2)) > 9){
        obj.totalcard += 10;
    }
    else{
        obj.totalcard += parseInt(SubstrCard(obj, obj.card.length-1, 0, 2));
    }
    var ace = 0;
    for (let i = 0; i < obj.card.length; i++){
        if (parseInt(SubstrCard(obj, i, 0,2)) == 1){
            ace++;
        }
    }
    if (ace > 0){
        if (obj.totalcard + 10 < 22){
            obj.totalcard = obj.totalcard + 10;
            obj.ace = true;
        }
        else if (obj.ace == true && obj.totalcard > 21){
            obj.totalcard = obj.totalcard - 10;
            obj.ace = false;
        }        
    }
}

function CPU(obj1, obj2){
    while(obj1.totalcard < 17){
        GetCard(obj1, obj2);
    }
    ShowCard("crupier", obj1, obj1.card.length, true);
}

function ShowCard(out, obj, many, total){
    var txt = "cartas";
    for (let i = 0; i < many; i++){
        txt += `${obj.card[i]} `;
    }
    if (total == true){
        txt += `total: ${obj.totalcard}`;
    }
    
    document.getElementById(`${out}`).innerHTML = txt;
}