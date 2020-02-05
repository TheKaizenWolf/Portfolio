import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      gcms {
        posts {
          title
          slug
          author
          image {
            url
          }
          excerpt
        }
      }
    }
  `);
  return data.gcms.posts.map(post => ({
    title: post.title,
    author: post.author,
    slug: post.slug,
    image: post.image.url,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
