const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Index extends React.Component {
    render() {
        return (
            <Layout>
                <h1>My Portfolio</h1>
                <nav>
                    <a href="/portfolio/new">Portfolio</a>
                </nav>
                    <ul>
                    {
                        this.props.portfolio.map(
                                (portfolio, index) => {
                                    return (
                                <li style= {{
                                    backgroundColor: portfolio.color
                                }}>
                                    <p>{portfolio.name}</p>
                                    <a href ={`/portfolio/${index}`}>See More</a>
                                    <form action={`/portfolio/${index}?_method=DELETE`} method='POST'>
                                        <input type='submit' value='DELETE'/>
                                    </form>
                                    {/* Edit the portfolio*/}
                            <a href={`/portfolio/${index}/edit`}>Edit {portfolio.name}</a>
                                </li>
                                )
                            }
                        )
                    }
                    </ul>
                </Layout>
        )
    }
}


module.exports = Index;