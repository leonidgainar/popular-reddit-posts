import api from "../services/api";

export default {
  async fetchRedditPosts() {
    return api.get("https://www.reddit.com/r/popular.json").then((response) => {
      const { children } = response.data.data;
      const posts = children.map(({ data }) => {
        return {
          author: data.author,
          title: data.title,
          upvotes: data.ups,
          upvoteRatio: data.upvote_ratio,
          comments: data.num_comments,
          url: data.permalink,
          created: data.created
        };
      });
      return posts;
    });
  }
};
