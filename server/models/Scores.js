const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Score {
    constructor(data){
    this.id = data.id
    this.username = data.username
    this.category = data.category
    this.difficulty = data.difficulty
    this.score = data.score
}

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const scoreData = await db.collection('scores').find().toArray()
                const scores = scoreData.map(s => new Score({ ...s, id: data.id }))
                resolve(scores);
            } catch (err) {
                console.log(err)
                reject("Error getting scores")
            }
        })
    }

    static create(score){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let scoreData = await db.collection('scores').insertOne({ score })
                let newScore = new Score(scoreData.ops[0]);
                resolve (newScore);
            } catch (err) {
                reject('Error adding new score');
            }
        });
    }
}


module.exports = Score;