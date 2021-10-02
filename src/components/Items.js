import React from 'react'
import "./items.css"
import TodoItems from './TodoItems'


const Items=({itemList,setItemList,filteredItems})=> {
    return (
        <React.Fragment>
            <div className="my-3">
                {filteredItems.map((todo)=>(
                <TodoItems todo={todo} itemList={itemList} setItemList={setItemList} itemName={todo.itemName} key={todo.id}/>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Items

