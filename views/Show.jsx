const React = require("react");
const Layout = require("./Layout/Layout.jsx")

class Show extends React.Component {
    render(){
        const portfolio = this.props.portfolio;
        return (
            <Layout>
                <div>
                <a href={'/project/new'}>Create a New Project</a><br/>
                <a href={'/'}>Delete</a><br/>
                <a href={'/'}>Edit</a>
                </div>
            </Layout>
        )
    }
}

module.exports = Show;