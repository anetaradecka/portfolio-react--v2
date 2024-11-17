export const POSTS_QUERY = `
        {
            posts {
              title
              coverPhoto {
                url
              }
              datePublished
              content {
                html
              }
              tags
            }
        }
    `;

export const POSTS_ENDPOINT = 'https://api-eu-central-1.hygraph.com/v2/cl4p3qsmt1u9a01w74bl3ghpr/master';