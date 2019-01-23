module.exports = (mongoose) => {
    const Schema = mongoose.Schema;
    const ObjectId = Schema.ObjectId;

    // Define frutas schema in order to export frutas model
    const frutasSchema = new Schema({
        frutaId: ObjectId,
        nombre: String,
        color: String,
        tupo: String
    });

    return mongoose.model('frutas', frutasSchema);
};