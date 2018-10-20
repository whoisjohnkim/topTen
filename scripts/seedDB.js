const mongoose = require("mongoose");
const db = require("../models");

// This file empties the List collection and inserts the lists below
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/topten"
  );

const listSeed = [
    {
        title: "Lord of the Rings Characters",
        category: "Movies",
        list: [
            "Aragorn",
            "Legolas",
            "Frodo",
            "Sam",
            "Gandalf",
            "Boromir",
            "Faramir",
            "Gimli",
            "Sauron",
            "Sarumon"
        ]
    },
    {
        title: "States",
        category: "Geography",
        list: [
            "Michigan",
            "Texas",
            "New York",
            "New Jersey",
            "Deleware",
            "Illinois",
            "Indiana",
            "California",
            "Arizona",
            "Washington"
        ]
    }
]


db.List
    .remove({})
    .then(() => db.List.collection.insertMany(listSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })