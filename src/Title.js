import React, { Component } from 'react';

const TITLES = [
    'a software developer',
    'a music lover',
    'an Arsenal fan'
];

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        this.animateTitles();
    }

    componentWillUnmount()  {
        console.log('Component will unmount');
    }

    animateTitles = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex })
        }, 2000);
    }

    render() {
        console.log(this.state.titleIndex);
        let title = TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;