import React from 'react'
import "./inputList.css"


const InputList=({userInput,setUserInput,itemList,setItemList,statusItem,setStatusItem})=> {

    // Event Handling for user Input
    const inputFieldHandler=(event)=>{
        setUserInput(event.target.value)
    }

    // Appending itemName,Key,completed Status
    const addButtonHandler=(event)=>{
        event.preventDefault()
        setItemList([
            ...itemList,{itemName:userInput , completed:false , id: Math.random() * 1000}
        ])
        setUserInput("");

    }

    // Getting completed Status 

    const statusHandler=(event)=>{
        
        setStatusItem(event.target.value)

    }

    return (
        <React.Fragment>
            <div className="inputSection">
                <form className="d-flex flex-wrap justify-content-center">
                    <input className="inputBox col-lg-6 col-9 ps-2" type="text"  onChange={inputFieldHandler} value={userInput}/>
                        <button onClick={addButtonHandler} className="btn customAddButton mx-2">
                            <i className="fas fa-plus"/>
                        </button> 

                        <div className="select col-4 mt-lg-0 mt-2">
                            <select onChange={statusHandler}  className="form-select bg-invert">
                                <option className="All dropdown-item active">All</option>
                                <option className="Completed dropdown-item">Completed</option>
                                <option className="pending dropdown-item">Pending</option>
                          </select>
                        </div>    
                        
                        
                </form>
                <div>
                        
                </div>
            </div>
        </React.Fragment>
    )
}

export default InputList


