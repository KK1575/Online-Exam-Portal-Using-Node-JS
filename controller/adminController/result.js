const client = require('../../databaseCon')


const result = (req, res) => {

    sess = req.session
    if (sess.userId && sess.admin) {
        client.query('SELECT * from "result" ORDER BY id ASC ', (err, result) => {
            if (!err) {

                res.render('result', { result: result.rows, success: req.flash('success'), error: req.flash('error'), info: req.flash('info') })
            } else {
                console.log(err.stack);
            }
        })
    } else {
        res.redirect('/')
    }

}

module.exports = { result: result }