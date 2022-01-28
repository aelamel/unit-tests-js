const { default: axios } = require("axios");

class PostsService {


    async getPosts() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts?page=1&_limit=5");
            return response.data;
        } catch (error) {
            throw new Error("Cannot fetch posts")
        }
    }
}

module.exports = PostsService