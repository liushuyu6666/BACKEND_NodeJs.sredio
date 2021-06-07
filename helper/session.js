module.exports = {
    endSession: (req, res, msg) => {
        req.session.destroy((error) => {
            if(error){
                return res.status(500).json({
                    symbols: ['?', '?', '?'],
                    msg: error.message,
                    credit: req.session.credit,
                })
            }
            else{
                return res.status(200).json({
                    symbols: ['?', '?', '?'],
                    msg: msg + " session closed now",
                    credit: 0,
                })
            }
        })
    }
}