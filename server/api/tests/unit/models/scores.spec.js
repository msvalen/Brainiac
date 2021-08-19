const Score = require('../../../models/Scores');
const db = require('../../../dbConfig')
const { MongoClient } = require('mongodb');

// jest.mock('mongo');

describe('Scores', () => {
    
  beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with all scores data on successful request to db', async () => {
            jest.spyOn(db, '')
                .mockResolvedValueOnce({ collections: {...scores}});
            const all = await Scores.collections.find.toArray
            // expect(all).toHaveLength(3) ??
        })
    });

    })

    describe('create', () => {
        test('it resolves with scores data on successful db enquiry', async () => {
          // const scores = db.collection('scores');

          // const mockData = { id: 1, username : "Test", category : "Test Category", difficulty : "hard", score : 8 };
          // await scores.insertMany(mockData);

          // const insertedData = await scores.findOne({ username : "Test" });
          // expect(insertedData).toEqual(mockData)
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...scoresData, id: 1 }] });
            const result = await Scores.create(scoresData);
            expect(result).toHaveProperty('username')
        })
    });
    