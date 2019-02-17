'use-strict';
module.exports = function (app) {
    let wordReversal = require('../controllers/wordReversalController');

    app.route('/reverse')
        .post(wordReversal.reverse_words);
};
