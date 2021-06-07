exports.index = (req, res) => {
    console.log(req.session)
    var msg = 'not init yet';
    if(req.session.credit){
        msg = 'credit add 1';
        req.session.credit++;
    }
    return res.status(200).json({symbols: [], 
                                 msg: msg,
                                 credit: req.session.credit});
  }