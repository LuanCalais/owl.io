import mongoose from "mongoose";

mongoose.connect("mongodb+srv://KingOfNothing:125678943@kingofnothing.huxpw63.mongodb.net/owl")

const db = mongoose.connection

export default db
