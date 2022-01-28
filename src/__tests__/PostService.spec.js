const PostService = require('../services/PostService')
const axios = require("axios");

jest.mock("axios")

describe('PostService', () => {
    
    let postService;

    beforeEach(() => {
        postService = new PostService();
    
    });

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('should call the get method and return data', async () => {
        
        axios.get.mockResolvedValueOnce({
            data: [
                {label: "First Post"},
                {label: "Second Post"},
            ]
        })

        const posts = await postService.getPosts();

        expect(posts).toHaveLength(2)

    });


    it('should throw an error when calling the external api', async () => {
        
        axios.get.mockRejectedValueOnce({
            message: "Internal error"
        })

        await expect(postService.getPosts()).rejects.toMatchObject(new Error("Cannot fetch posts"));

        expect(axios.get).toHaveBeenCalledTimes(1)

    });
});