const mongoose = require('mongoose')
const Dishes = require('./models/dishes')

const url = 'mongodb://localhost:27017/conFusion'
const connect = mongoose.connect(url)

connect.then((db) => {
    console.log("connected")
    Dishes.create({
        name: "fdasf",
        description: "test"
    })
    .then((dish) => {
        console.log(dish)
        return Dishes.findByIdAndUpdate(dish._id, {
            $set: {description: 'Updated test'}
        }, {
            new : true
        }).exec()
    })
    .then((dish) => {
        console.log(dish)
        dish.comments.push({
            rating: 5,
            comment: 'great',
            author: "john doe"
        })
        return dish.save();
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.remove({});
    })
    .then((dish)=>{
        console.log(dish)
        return mongoose.connection.close()
    })
    .catch((err)=>{
        console.log(err)
    })
})
.catch((err) => {
    console.log(err)
})