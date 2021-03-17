const React = require("react");
const Layout = require("./Layout/Layout.jsx")

class Show extends React.Component {
    render(){
        const portfolio = this.props.portfolio;
        return (
            <Layout>
                <div>
                {/* <a href={'/'}><button>Delete</button></a><br/>*/}
                {/* <a href={'/'}><button>Edit</button></a>  */}
                <p>Name: {portfolio.name}</p>
                <p>Description: {portfolio.description}</p>
                <p><iframe src={portfolio.link} width="1000px" height="750px"></iframe></p>
                </div>
            </Layout>
        )
    }
}

module.exports = Show;