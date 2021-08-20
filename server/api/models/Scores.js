const { init } = require ('../dbConfig')
// const { ObjectId } = require('mongodb')

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
                const scoreData = await db.collection('scores').find().toArray();
                const scores = scoreData.map(s => new Score({ ...s, id: s._id }))
                resolve(scores);
            } catch (err) {
                reject("Error getting scores")
            }
        })
    }

    static create(scores){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                await db.collection('scores').insertMany(scores)
                resolve ('Data Saved to Database');
            } catch (err) {
                reject('Error adding new scores');
            }
        });
    }
}


module.exports = Score;