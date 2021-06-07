const { Store } = require("express-session");

exports.start = (req, res) => {
    var msg = 'session exists';
    if(!req.session.credit){
        req.session.credit = 10;
        msg = 'create a new session';
    }
    return res.status(200).json({symbols: ['?', '?', '?'], 
                                 msg: msg,
                                 credit: req.session.credit});
}


// exports.start = (req, res) => {
//     console.log(req.session);
//     if(req.session.page_views){
//        req.session.page_views++;
//        return res.status(200).json();
//     } else {
//        req.session.page_views = 1;
//        return res.status(200).json();
//     }
//   }