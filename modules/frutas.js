module.exports = (express, mongoose) => {
    const frutasModel = require('../models/frutas')(mongoose);
    const ObjectId = mongoose.Types.ObjectId; 
    let router = express();

    router.route('/:frutas_id?')
        .get((req, res) => {
            const frutas_id = req.params.frutas_id ? new ObjectId(req.params.frutas_id) : undefined;
            const query = frutas_id ? { _id: frutas_id} : {};
            
            frutasModel.find(query, (err, docs) => {
                if (err) throw err;
        
                res.json(docs);
            });
        })
        .post((req, res) => {
            const body = req.body;
            let newFruit = new frutasModel(req.body);
            newFruit.save((err, doc) => {
                if (err) throw err;
                res.json(doc);
            });
        })
        .delete((req, res) => {
            const frutas_id = req.params.frutas_id ? new ObjectId(req.params.frutas_id) : undefined;

            if (frutas_id) {
                frutasModel.findOneAndDelete({ _id: frutas_id }, (err, doc) => {
                    if (err) throw err;
                    res.json(doc);
                });
            } else {
                res.end('Please provide a valid _id to delete');
            }
        });

    return router;
};