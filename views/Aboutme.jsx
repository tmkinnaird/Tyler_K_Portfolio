const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Aboutme extends React.Component {
    render() {
        const portfolio = this.props.portfolio
        return (
            <body>
                <div>
                <Layout>
                <div>
               
                <img src='https://files.slack.com/files-pri/T01DFU6FZEF-F01GUBEU1U1/img_20180218_201657_742.jpg' id= 'about'/>
                <h1 className = 'header-text-2'>About Me</h1>
                <p className = 'me-text'>I am an emerging software engineer  with a hospitality and customer service background. 
                    I am determined to find the answer even when it seems impossible. 
                    I am a hard worker and I have the personality to match. 
                    I have always been a person with a customer oriented mind and the means to get the job done. 
                    My professional life is a perfect mix of personal and job oriented expertise that makes any work fun and new. 
                    Keeping a good outlook on the world and being critical of myself is what brings me my best results.</p>
                
                
                </div>
                </Layout>
                </div>
            </body>
        )
    }

}

module.exports = Aboutme;