const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Index extends React.Component {
    render () {
        return (
            <Layout>
            <body>
                <div>
                    <div className= 'header-text'>
                    <h1>Tyler Kinnaird</h1>
                    <p>I am an emerging full-stack developer with a passion for tech and
                        I would love to hear from you.</p>
                    </div>
                    <div className= 'project-body'>
                    <ul>
                        
                    {
                        this.props.portfolio.map((portfolio) => {
                            return (
                                <li>
                                   <form action={`/project/${portfolio._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE"/>
                                    </form>
                                    <a href={`/project/${portfolio._id}/edit`}><button>Edit</button></a> <br/>
                                    <a href={`/project/${portfolio._id}`}><button>Project Page</button></a>
                                    <p><img src={portfolio.image} alt=""/></p>
                                    <p><iframe src={portfolio.link} width="1000px" height="750px"></iframe></p>
                                    <p></p>
                                </li>
                            )
                        })
                    }
                </ul>
                    </div>
                </div>
            </body>
            </Layout>
        )
    }
}

module.exports = Index;