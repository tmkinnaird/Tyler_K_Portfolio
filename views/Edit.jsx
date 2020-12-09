const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Edit extends React.Component {
    render() {
        const portfolio = this.props.portfolio;
        return (
            <Layout>
                <h1>{portfolio.name} Edit Page</h1>
                <form action={`/portfolio/${this.props.index}?_method=PUT`} method='POST'>
                    Name: <input type='text' name='name' value={portfolio.name}/><br/>
                    Color: <input type='text' name='color' value={portfolio.color}/><br/>
                    Is Ready To Eat: 
                    <input type='checkbox' name='readyToEat' checked={portfolio.readyToEat ? 'checked' : ''}/>
                    <br/>
                    <input type='submit' name='' value='Submit Changes'/> 
                </form>
            </Layout>
        )
    }
}

module.exports = Edit;