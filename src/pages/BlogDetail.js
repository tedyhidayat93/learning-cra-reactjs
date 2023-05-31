import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import NotFoundArticle from "./NotFoundArticle";

function BlogDetail() {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState({});
    const [notFound, setNotFound] = useState(false);

    useEffect(function() {
        const url = `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`;
        const options = {
            method: 'GET'
        };
        // Cara 1 dengan Async await chaining
        async function getArticle() {
            // Side Effect
            const request = await fetch(url, options);

            if(!request.ok) {
                setLoading(false);
                return setNotFound(true);
            } 

            const response = await request.json();
            setArticle(response);
            setLoading(false);
        }

        getArticle();
        

    }, [params]);

    if(notFound) {
       return <NotFoundArticle />
    }


    return (
        <>
            <Helmet>
                <title>Blog Detail</title>
            </Helmet>
            <div className="container">
                {loading && <h1 className="text-center mt-4 text-white">Loading...</h1>}

                {!loading && 
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <h1 className="text-white mt-3 mb-5">Blog Detail</h1>
                        </div>

                        <div className="col-12">
                            <div className="card mb-4">
                                <img className="card-img-top" src={article.imageUrl} alt={article.title} />
                                <div className="card-body">
                                    <h2 className="card-title">{article.title}</h2>
                                    <p className="card-text">
                                        {article.summary}
                                    </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><small>Author : {article.newsSite} </small></li>
                                    <li className="list-group-item"><small>Posted : {new Date(article.publishedAt).toLocaleDateString('id-ID')} </small></li>
                                </ul>
                                <div className="card-body">
                                    <Link to={`/blog`} className="card-link">Back to Blog</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default BlogDetail;