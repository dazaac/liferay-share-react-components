import React from 'react';
import MyComponent from 'components-provider-bundle/components/MyComponent';

export default class extends React.Component {
	render() {
		return (
            <div>
				<MyComponent name="Consumer"/>			
			</div>
		);
	}	
}