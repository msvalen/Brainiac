const db = connect("mongodb://localhost:27017/scores")

db.scores.drop()

db.scores.insertMany([
    {id: 1, username: "deborah", category: "animals", difficulty: "hard", score: 8 }
])
