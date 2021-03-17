const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Index extends React.Component {
    render () {
        return (
            <Layout>
            {/* <body> */}
                <div>
                    <div className= 'header-text'>
                    <h1>Hey y'all, I'm Tyler Kinnaird</h1>
                    <h2>Junior Software Engineer</h2>
                    <p>Give me a call or email and we can make this the best, most modern human experience that we can culivate together!</p>
                    </div>
                <div className= 'project-body'>
                    <ul>
                        
                    {
                        /* this.props.portfolio ? ( */
                        this.props.portfolio.map((portfolio) => {
                            return (
                                <li>
                                    {/* <form action={`/project/${portfolio._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE"/> */}
                                    {/* </form> */}
                                    {/* <a href={`/project/${portfolio._id}/edit`}><button>Edit</button></a> <br/> */}
                                    <a href={`/project/${portfolio._id}`}><button>Description</button></a> <br/>
                                    <p><img src={portfolio.image} alt=""/></p>
                                    <p><iframe src={portfolio.link} width="900px" height="600px"></iframe></p>
                                </li>
                            )
                        }) 
                        /* ) :"" */
                    }
                </ul>
                    </div>
                </div>
            {/* </body> */}
            </Layout>
        )
    }
}

module.exports = Index;