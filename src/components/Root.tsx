import * as React from 'react';

import {IAction} from '../types';

export interface IRootProps {
    requestListOfQuotes: () => IAction;
    quotes: string[];
}

class Root extends React.Component<IRootProps, {}> {
    public componentDidMount() {
        this.props.requestListOfQuotes();
    }
    
    public render() {
        const {quotes} = this.props;

        if (!quotes) {
            return null;
        }

        return <div>
            {quotes.map((quote: string, index: number) => 
                <div key={index}>{quote}</div>
            )}
        </div>;
    }
}

export default Root;
