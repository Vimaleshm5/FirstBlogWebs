import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/database";
import Button from "../components/Button";
import Container from "../components/container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    console.log(post)
    

    const isAuthor = post && userData ? post.userId === userData.$id : false;
    console.log(isAuthor);

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {

                if (post) setPost(post);
                else navigate("/");
            });

        } else navigate("/");

    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featureImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div >
            <Container>
                <div >
                    <img
                        src={service.getFilePreview(post.featureImage)}
                        alt={post.title}
                    />

                    {isAuthor && (
                        <div >
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button >
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div >
                    <h1 >{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}

export default Post