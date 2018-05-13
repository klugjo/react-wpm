import * as React from 'react';

export interface IAppProps {
    compiler: string;
    framework: string;
}

export class App extends React.Component<IAppProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}