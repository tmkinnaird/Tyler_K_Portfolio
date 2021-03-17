const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Contact extends React.Component {
    render() {
        return (
            <Layout>
            <body>
                <div>
                    <h1>Contact Me</h1>
                    <h1>Tmkinnaird87@gmail.com</h1>
                    <h1>720-499-5683</h1>
                    <div>
                    <p>Linkedin</p>
                    <a className="Linkdin" href="https://www.linkedin.com/in/tyler-kinnaird-2ba8661bb/" target="_blank">
                    <span className="social-highlight"><i className="fab fa-linkedin fa-5x" size="lg"></i></span>
                    </a>
                    <p>Resume</p>
                    <a href="" target="_blank">
                    <i className="far fa-file fa-5x"></i>
                    
                    </a>
                    </div>
                </div>
            </body>
            </Layout>
        )
    }

}








module.exports = Contact;