import { useState, useEffect } from "react";
// ------ CUSTOM COMPONENTS ------
import Section from "../../Sections";
// ------ HYGRAPH API ------
import { POSTS_ENDPOINT, POSTS_QUERY } from "../../../api/fetch-posts";
// ------ UTILS ------
import convertDatePublished from "../../../utils/convert-date";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    const config = {
        id: 3,
        title: "Posts",
        header: "Recent posts on the blog",
    };

    useEffect(() => {
        const query = `
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
              slug
            }
        }
    `
        async function fetchPosts() {
            const response = await fetch(POSTS_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    query, // Why POSTS_QUERY doesn't work?
                })
            });
            const resData = await response.json();
            setPosts(resData.data.posts);
        };

        fetchPosts();
    }, []);

    function generateTags(tags, post) {
        if (!tags.length > 0) return;

        return (
            tags.map((tag) => {
                return <div className="tag" key={post.slug + (Math.random() * 100).toFixed()}>{tag}</div>
            })
        )
    }

    return (
        <Section {...config}>
            <div id="articles">
                {posts.map((post) => {
                    return (
                        <div className="article__wrapper" key={post.slug}>
                            <div className="article__img" style={{ backgroundImage: `url(${post.coverPhoto.url})` }}></div>
                            <div className="article__item">
                                <div className="tags">
                                    {generateTags([...post.tags], post)}
                                </div>
                                <h2 className="article__title">{post.title}</h2>
                                <h3 className="article__meta">{convertDatePublished(post.datePublished)}</h3>
                                <p className="article__teaser">
                                    {post.content.html}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section >
    );
}
