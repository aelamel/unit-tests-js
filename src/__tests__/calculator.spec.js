const {add} = require("../services/calculator")
describe('Calculator', () => {
    

    it("should return 4 for 2 + 2", () => {

        // arrange
        const expectedResult = 4;

        // act
        const result = add(2, 2);

        //assert
        expect(result).toBe(expectedResult);
    })


    it("should throw an error when passing null as a first argument", () => {

        // arrange

        // act

        //assert
        expect(() => {
             add(null, 2);
        }).toThrow("null values are not accepted");
    })

    it("should throw an error when passing null as a second argument", () => {

        // arrange

        // act

        //assert
        expect(() => {
             add(2, null);
        }).toThrow("null values are not accepted");
    })

});