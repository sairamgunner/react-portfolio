import React, { Component } from 'react';

const TITLES = [
    'a software developer',
    'a music lover',
    'a philanthrophist',
    'an Arsenal fan'
];

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        this.animateTitles();
    }

    componentWillUnmount()  {
        console.log('Component will unmount');
        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
    // this.titleInterval will contain an ID for the set interval. This ID is required to clear the interval later
    // in the componentWillUnmount() function
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex })
        }, 2000);
        console.log(this.titleInterval);
    }

    render() {
        // console.log(this.state.titleIndex);
        let title = TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;