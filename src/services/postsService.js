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
          url: `https://www.reddit.com${data.permalink}`,
          created: new Intl.DateTimeFormat("en-US", {
            dateStyle: "short",
            timeStyle: "short"
          }).format(data.created * 1000)
        };
      });
      return posts;
    });
  }
};
