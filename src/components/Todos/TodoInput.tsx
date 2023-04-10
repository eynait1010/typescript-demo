import * as React from "react";
import { Todo } from "./types";

interface Props {
    addTodo:(todo:Todo)=>void
}
interface State {
    text:string
}

let id = 0

export default class TodoInput extends React.Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state = {text:''}
    }
    render() {
        const {handleSubmit,handleChange} = this
        const {text} = this.state
        return(<form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button type="submit">添加</button>
          </form>)
    }

    handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        this.props.addTodo({id:id++,text:this.state.text})
        this.setState({
            text:''
        })
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            text:e.target.value
        })
    }
}