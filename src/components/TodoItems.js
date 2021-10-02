import React from 'react'
import "./todoItems.css"
import {Animated} from "react-animated-css";

const TodoItems=({todo,itemList,setItemList,itemName})=> {

    // Deleting Items

    const  deleteHandler=()=>{

        setItemList(itemList.filter((element)=>element.id!==todo.id))

    }

    // Completed Items

    const completeHandler=()=>{
       setItemList(itemList.map((item)=>{
            if(item.id === todo.id){
               return{
                   ...item,completed:!item.completed
                }
           }
           return item;
       }))
      
    }

 

    return (
        <Animated animationIn="fadeInUp" animationOut="fadeOutDown"  className="listingSection d-flex flex-wrap justify-lg-content-center justify-md-content-center p-1">

            <div className="col-9 ">
                <li className={`itemStyle my-auto ${todo.completed ? "isDone" : ""}`} >{itemName}</li>
            </div>
            
            <div className="d-flex justify-lg-content-center justify-md-content-center col-3 ">
                <button onClick={completeHandler} className="btn customAddButton mx-1">
                    <i className="fas fa-check"/>
                </button>
                <button onClick={deleteHandler} className="btn customAddButton mx-1">
                    <i className="fas fa-trash"/>
                </button>
            </div>
        </Animated>
    )
}

export default TodoItems
