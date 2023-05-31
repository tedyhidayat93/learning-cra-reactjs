import { Link } from "react-router-dom";

function NotFoundArticle() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="text-white mt-5">Artikel tidak ditemukan :(</h1>
                    <h6 className="text-light"><Link to="/blog"> Kembali ke Daftar Blog </Link></h6>
                </div>
            </div>
        </div>
    );
}

export default NotFoundArticle;