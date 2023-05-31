import { useEffect } from "react";
import { Helmet } from "react-helmet";

function Home() {
    useEffect(function() {

    }, []);

    return (
        <div className="container">
            
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="text-white mt-5">Selamat Datang</h1>
                    <h6 className="text-light">Di Website Profile Saya.</h6>
                </div>
            </div>
        </div>
    );
}

export default Home;