import React, { Component } from 'react';

import Message from './message'
import SendMessage from "./sendmessage"
//import ItemStatus from './components/ItemStatus'
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
 
  
  render() {
		return(
			<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
				<Message title={'qwe'}/>
				<SendMessage></SendMessage>
			</div>
			)
	}
}

export default App