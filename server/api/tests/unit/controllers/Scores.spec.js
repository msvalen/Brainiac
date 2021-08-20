const scoresController = require('../../../controllers/scores')
const scores = require('../../../models/Scores');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('scores controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('all scores data', () => {
        test('it returns scores with a 201 status code', async () => {
            let testScores = {
              username : "Test",
              category : "Test Category",
              difficulty : "hard",
              score : 8
            }
            jest.spyOn(score, 'all', 'get')
                 .mockResolvedValue(testScores);
            await scoreController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(testScores);
        })
    });

    describe('create', () => {
        test('it returns the data with the new scores with a 201 status code', async () => {
            // Is this the correct body info? object id? 
          let testScores = {
              username : "Test",
              category : "Test Category",
              difficulty : "hard",
              score : 8
            }
            jest.spyOn(scores, 'create')
                .mockResolvedValue(new scores(testScore));
                
            const mockReq = { body: testScore }
            await scoresController.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new scores(testScore));
        })
    });
    
})