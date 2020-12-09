const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class New extends React.Component {
    render() {
        return (
            <Layout>
                <h1>Create a new Project</h1>
                <form action="/project" method="POST">
                    Name: <input type="text" name="name" /> <br/>
                    Email: <input type="text" name="email"/> <br/>
                    Description: <input type="text" name="description"/>
                    Link: <input type="text" name="link"/>
                    <input type="submit" name="" value="Create a Project" />
                </form>
            </Layout>
        )
    }
}

module.exports = New;