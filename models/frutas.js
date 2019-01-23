module.exports = (mongoose) => {
    const Schema = mongoose.Schema;

    // Define frutas schema in order to export frutas model
    const frutasSchema = new Schema({
        nombre: String,
        color: String,
        tipo: String
    });

    return mongoose.model('frutas', frutasSchema);
};