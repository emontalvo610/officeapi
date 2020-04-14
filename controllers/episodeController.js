Episode = require('../models/episode');


// Get all Characters
exports.view = async function (req, res) {
    Episode.get((err, episodes) => {
        if(err) {
            res.json({
                status: "err",
                message: err
            });
        }
        res.json({
            data: episodes
        });
    })
};

// Get Character by ID
exports.index = (req, res) => {
    Episode.findById(req.params.episode_id, (err, episodes) => {
        if(err) {
            res.send(err);
        };

        res.json({
            data: episodes
        });
    })
};


// Create new Character
exports.new = function (req, res) {
    let episode = new Episode();
    episode.title = req.body.title ? req.body.title : episode.title;
    episode.description = req.body.description ? req.body.description : episode.description;
    episode.airDate = req.body.airDate ? req.body.airDate : episode.airDate;

    episode.save(function (err) {
        if(err) {
            res.json(err);
        }
        res.json({
            message: 'New episode created!',
            data: episode
        })
    })
};