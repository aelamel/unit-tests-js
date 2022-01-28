const {isAccepted} = require('../services/GradeChecker')

describe('GradeChecker', () => {
    

    it("should return true when the grade is 15", async () => {


        /*
        return isAccepted(15).then((result) => {
            expect(result).toBe(true);
        });
        */

        await expect(isAccepted(15)).resolves.toBe(true);
    })


    it("should return false when the grade is 8", async () => {


        /*
        return isAccepted(15).catch((result) => {
            expect(result).toBe(false);
        });
        */

        await expect(isAccepted(8)).rejects.toBe(false);
    })

});