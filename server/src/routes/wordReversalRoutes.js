'use-strict';
module.exports = function (app) {
    var wordReversal = require('../controllers/wordReversalController');

    app.route('/reverse')
        .post(wordReversal.reverse_words);
};
