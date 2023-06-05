import { useRouter } from "next/router";

const BlogPosts = () => {
  const router = useRouter();
  console.log(router.query);

  return <div>BlogPosts</div>;
};

export default BlogPosts;
