import * as React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { Todo } from "./types";
const style :React.CSSProperties= {
    width:'800px',
    backgroundColor:'goldenrod'
}
export interface Props {

}
export interface State {
    todos:Todo[]

}
export default class Todos extends React.Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state = {
            todos:[]
        }
    }
    render() {
        return <div style={style}>
            <TodoInput addTodo={this.addTodo }/>
            <ul>
                {
                    this.state.todos.map(todo=>(<TodoItem todo={todo}/>))
                }
            </ul>
        </div>
    }
    addTodo=(todo:Todo)=>{
        this.setState({todos:[...this.state.todos,todo]})
    }
}