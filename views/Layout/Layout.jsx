const React = require('react');

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <title>Tyler K Portfolio</title>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>
                    <nav>
                        <a href="/project"><button>Home</button></a>
                        <a href={'/aboutme'}><button>About Me</button></a><br/>
                        <a href={'/contact'}><button>Contact Me</button></a><br/>
                        <a href={'/project/new'}><button>Create a New Project</button></a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;