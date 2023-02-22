import React, { Component } from 'react';
import Projects from './Projects';

class App extends Component {
    state = {  displayBio: false  }
    // constructor()   {
    //     super();
    //     this.state = {  displayBio: false  };
    //     console.log('component this', this);

    //     // this.readMore = () =>   {
    //     //     this.setState({ displayBio: true });
    //     // }

    //     // this.readMore = this.readMore.bind(this);
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    readMore()  {
        // this.state.displayBio = true;  NEVER DIRECTLY MODIFY STATE
        console.log('readmore this', this);
        this.setState({ displayBio: true });
    }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio  });
    }

    render()    {
        let bio = this.state.displayBio ? (
            <div>
                <p>I live in Whitby, ON</p>
                <p>I love to code</p>
                <p>I want to make exceptional quality web applications</p>
                <button onClick={this.toggleDisplayBio}>Collapse</button>
            </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>
        );

        // if(!this.state.displayBio)  {
        //     bio = null;
        // }

        return  (
            <div>
                <h1>Hello!</h1>
                <p>My name is Sairam. I am a software engineer.</p>
                <p>Always looking forward to working on meaningful projects.</p>
                {bio}
                <hr />
                <Projects />
            </div>
        );
    }
}

export default App;