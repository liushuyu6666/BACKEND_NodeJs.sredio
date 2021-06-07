var play = require('../helper/play');
var session = require('../helper/session');

exports.symbols = (req, res) => {
    if(req.session.credit == null || isNaN(req.session.credit) || req.session.credit <= 0){
        var specMsg = '';
        if(req.session.credit == null || isNaN(req.session.credit)){
            specMsg = "invalid credit ";
        }
        else{
            specMsg = "you can\'t play anymore!";
        }
        return session.endSession(req, res, specMsg);
    }

    var credit = req.session.credit;
    var response= play.playRoll(credit);
    req.session.credit = response["credit"];

    res.status(200).json({
        symbols: response["symbols"], 
        msg: response["msg"],
        credit: response["credit"]});
}

// // play the game
// const play = (credit) => {
//     var symbols = playOnce();

//     if(credit < 40){
//         symbols = cheat(0, playOnce, symbols);
//     }
//     else if(40 <= credit && credit < 60){
//         symbols = cheat(30, playOnce, symbols);
//     }
//     else{
//         symbols = cheat(60, playOnce, symbols);
//     }

//     var r = calCredits(symbols, credit);
//     return {
//         symbols: symbols, 
//         msg: r["message"],
//         credit: r["credit"]};
// }


// // play the roll once
// const playOnce = () => {
//     const fruits = ['C', 'L', 'O', 'W'];
//     const v1 = Math.floor(Math.random() * 4);
//     const v2 = Math.floor(Math.random() * 4);
//     const v3 = Math.floor(Math.random() * 4);
    
//     var symbols = [];
//     symbols.push(fruits[v1]);
//     symbols.push(fruits[v2]);
//     symbols.push(fruits[v3]);

//     return symbols;
// }

// const cheat = (poss, playOnce, prevSymbol) => {
//     const v = Math.floor(Math.random() * 100);
    
//     if(isWin(prevSymbol) && v < poss){ // if win and decides to cheat
//         // console.log("cheat happens: random value: " + v + "initial array: " + prevSymbol);
//         return playOnce();
//     }
//     return prevSymbol;
// }

// const calCredits = (symbols, credit) => {
//     if(symbols.every(it => it === 'C')){ // cherry 10 credits
//         return({credit: credit + 9,
//                 message: "you get 10 credits"});
//     }
//     else if(symbols.every(it => it === 'L')){ // lemon 20 credits
//         return({credit: credit + 19,
//                 message: "you get 20 credits"});
//     }
//     else if(symbols.every(it => it === 'O')){ // orange 30 credits
//         return({credit: credit + 29,
//                 message: "you get 30 credits"});
//     }
//     else if(symbols.every(it => it === 'W')){ // watermelon 40 credits
//         return({credit: credit + 39,
//                 message: "you get 40 credits"});
//     }
//     else{
//         return({credit: credit - 1,
//                 message: "good luck next time!"});
//     }
// }

// const isWin = arr => arr.every(v => v === arr[0])