import { Helmet } from "react-helmet";

function Profile() {
    return (
        <div className="container">
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="text-white mt-5">Profile</h1>
                    <h6 className="text-light">Tedy Hidayat.</h6>
                </div>
            </div>
        </div>
    );
}

export default Profile;