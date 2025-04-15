
import { posts } from "@/data/mockData";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="max-w-md mx-auto">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Feed;
