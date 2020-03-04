import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            date
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);
  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
