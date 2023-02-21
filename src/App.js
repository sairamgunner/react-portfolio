import React, { Component } from 'react';

class App extends Component {
    constructor()   {
        super();
        this.state = {  displayBio: false  };
    }
    render()    {
        let bio = this.state.displayBio ? (
            <div>
                <p>I live in Whitby, ON</p>
                <p>I love to code</p>
                <p>I want to make exceptional quality web applications</p>
            </div>
        ) : null;

        // if(!this.state.displayBio)  {
        //     bio = null;
        // }

        return  (
            <div>
                <h1>Hello!</h1>
                <p>My name is Sairam. I am a software engineer.</p>
                <p>Always looking forward to working on meaningful projects.</p>
                {bio}
            </div>
        );
    }
}

export default App;