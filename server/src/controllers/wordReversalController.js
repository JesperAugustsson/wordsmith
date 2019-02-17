'use-strict';

exports.reverse_words = function (req, res) {
    const sentence = req.body;

    if (sentence.trim().length < 1) {
        res.status(400).end();
    } else {
        var result = sentence.split(/([,.\s])/).map(word => {
            return word
                .split('')
                .reverse()
                .join('');
        }).join('');
        var timestamp = Date.now();

        res.json({ result, original: sentence, timestamp });
    }
};
