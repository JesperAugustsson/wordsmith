'use-strict';

exports.reverse_words = function (req, res) {
    const sentence = req.body || '';

    if (sentence.trim().length < 1) {
        res.status(400).end();
    } else {
        let result = sentence.split(/([,.\s])/).map(word => {
            return word
                .split('')
                .reverse()
                .join('');
        }).join('');
        let timestamp = Date.now();

        res.json({ result, original: sentence, timestamp });
    }
};
