import { Helmet } from "react-helmet";

function Contact() {
    return (
        <div className="container">
            <Helmet>
                <title>Contact</title>
            </Helmet>

            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="text-white mt-5">Contact Me</h1>
                    <h6 className="text-light">theightdev@gmail.com</h6>
                </div>
            </div>
        </div>
    );
}

export default Contact;