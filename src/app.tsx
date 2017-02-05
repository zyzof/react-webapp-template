import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface AppProps {

};

export interface AppState {
};

export class App extends React.Component<AppProps, AppState> {

	constructor(props: AppProps) {
		super(props);

		this.state = {
		};
	}

    public render(): JSX.Element {
    	console.log('app.tsx render()');

        return <div></div>;
    }
}

ReactDOM.render(
	<App />,
	document.getElementById("example")
);