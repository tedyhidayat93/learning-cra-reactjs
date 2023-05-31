import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Blog() {

    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    useEffect(function() {
        const url = 'https://api.spaceflightnewsapi.net/v3/articles';
        const options = {
            method: 'GET'
        };
        // Cara 1 dengan Async await chaining
        async function getArticles() {
            // Side Effect
            const request = await fetch(url, options);
            const response = await request.json();
            setArticles(response);
            setLoading(false);
        }

        getArticles();
        

    }, []);


    return (
        <>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            
            <div className="container">
                {loading && <h1 className="text-center mt-4 text-white">Loading...</h1>}

                {!loading && 
                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <h1 className="text-white mt-3 mb-5">Blog</h1>
                        </div>
                        {
                            articles.map(function(item) {
                                return (
                                    <div key={item.id} className="col-12 col-md-3">
                                        <div className="card mb-4">
                                            <img className="card-img-top" style={{
                                                maxHeight: 200
                                            }} src={item.imageUrl} alt={item.title} />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">
                                                    {item.summary.length > 50 ? `${item.summary.substring(0, 50)}...` : item.summary
                                                    }
                                                </p>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><small>Author : {item.newsSite} </small></li>
                                                <li className="list-group-item"><small>Posted : {new Date(item.publishedAt).toLocaleDateString('id-ID')} </small></li>
                                            </ul>
                                            <div className="card-body">
                                                <Link to={`/blog/${item.id}`} className="card-link">View Detail</Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default Blog;