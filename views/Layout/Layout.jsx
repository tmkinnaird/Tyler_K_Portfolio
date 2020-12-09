const React = require('react');

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <title>Tyler K Portfolio</title>
                    <link rel="stylesheet" href="/css/styles.css"/>
                </head>
                <body>
                    <nav>
                        <a href="/project">Home</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;