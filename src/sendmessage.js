import React, {Component} from "react"
import './sendmessage.css'

export default class SendMessage extends Component {

    state = {
        message: "",
        messages:[]
    }

    sendMessage = () => {
       let message=this.state.message, messages=this.state.messages
       messages.push({
           message: message
       })
       this.setState({
           messages: messages
       }) 

    }

    Messages(){
        return this.state.messages.map(a=>{
            return(
                <div className="content">
                    {a.message}
                </div>
            )
        })
    }

    render() {
        return (
            <div style={{display:"flex", flexDirection:"column", alignItems: 'center', width: 600, padding: '0 15px'}}>
                <input onChange={(v)=>this.setState({message: v.target.value})} style={{margin: "0 0 15px 0", width: '100%'}}></input>
                <button onClick={this.sendMessage} >Опубликовать в блоге</button>
                {this.Messages()}
            </div>
        )
    }
}
