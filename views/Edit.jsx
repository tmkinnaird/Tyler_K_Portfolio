const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Edit extends React.Component {
    render() {
        const portfolio = this.props.portfolio;
        return (
            <Layout>
                <h1>{portfolio.name} Edit Page</h1>
                <form action={`/project/${portfolio._id}?_method=PUT`} method='POST'>
                    Name: <input type='text' name='name' value={portfolio.name}/><br/>
                    Description: <input type='text' name='description' value={portfolio.description}/><br/>
                    <input type='submit' name='' value='Submit Changes'/> 
                </form>
            </Layout>
        )
    }
}

module.exports = Edit;