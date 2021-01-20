module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            lat: String,
            lng: String,
            address: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Restaurant = mongoose.model("restaurant", schema);
    return Restaurant;
};
