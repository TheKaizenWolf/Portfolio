exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      gcms {
        posts {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const { posts } = result.data.gcms;

  posts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.slug,
      },
    });
  });
};
