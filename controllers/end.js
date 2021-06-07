var session = require('../helper/session');

exports.end = (req, res) => {
    session.endSession(req, res, "");
    
    // req.session.destroy((error) => {
    //     if(error){
    //         return res.status(500).json({
    //             symbols: [], 
    //             msg: error.message,
    //             credit: req.session.credit,
    //         });
    //     }
    //     else{
    //         return res.status(200).json({
    //             symbols: [], 
    //             msg: "session closed: ",
    //             credit: 0,
    //         })
    //     }
    // })
}