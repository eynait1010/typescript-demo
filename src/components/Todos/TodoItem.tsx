import * as React from "react";
import { Todo } from "./types";

interface Props {
    todo:Todo
}

 const  TodoItem = (props:Props)=>(
    <li>{props.todo.text}</li>
 )
 export default TodoItem