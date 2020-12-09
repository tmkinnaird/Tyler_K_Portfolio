const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Index extends React.Component {
    render () {
        return (
            <Layout>
            <body>
                <div>
                    <h1>Tyler Kinnaird</h1>
                    <ul>
                        <h1>I am an emerging full-stack developer with a passion for tech and
                        I would love to hear from you.
                        </h1>
                    </ul>
                    <img src= 'https://red.msudenver.edu/media/red/2020/august/denversummer_hero2_RED.jpg'/>
                    <ul>
                    
                    
                    {
                        this.props.portfolio.map((portfolio) => {
                            return (
                                <li>
                                    <p><a href={'/project/aboutme'}>About Me</a></p>
                                    <p><a href={'/project/contact'}>Contact Me</a></p>
                                    <p><img src={portfolio.image} alt=""/></p>
                                    <p><iframe src={portfolio.link} width="900px" height="750px"></iframe></p>
                                </li>
                            )
                        })
                    }
                </ul>

                </div>
            </body>
            </Layout>
        )
    }
}

module.exports = Index;