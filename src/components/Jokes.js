import React, { Component } from 'react';

class Jokes extends Component {
    state = { joke: {}, jokes: {} };

    componentDidMount() {
        this.fetchOneJoke();
    }

    fetchOneJoke()  {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({ joke: json }));
    }

    fetchTenJokes()  {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({ jokes: json }));
    }

    render() {
        const { setup, punchline } = this.state.joke;
        return  (
            <div>
                <div>
                    <h2>Highlighted Joke</h2>
                    <p>{ setup } <em>{ punchline }</em></p>
                </div>
                <div>
                    <h2>Interested in 10 more jokes?</h2>
                    <button onClick={this.fetchTenJokes}>
                        Let's Go!
                    </button>
                    <h3>Ta Da!!!</h3>
                    <p>
                        
                    </p>
                </div>
                
                {/* <div>
                    <h2>Interesting Joke? Would you like to see 10 more?</h2>
                    <p></p>
                </div> */}
            </div>
        )
    }
}

export default Jokes;