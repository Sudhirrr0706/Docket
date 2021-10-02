import React ,{useState ,useEffect} from 'react'
import './App.css';

// Importing Components
import InputList from './components/InputList';
import Items from './components/Items';

function App() {

  const[userInput,setUserInput]=useState("") //User input state and setState
  const[itemList,setItemList]=useState([]) //Appending itemName,id,complete status
  const[statusItem,setStatusItem]=useState("All") //Filter status 
  const[filteredItems,setFilteredItems]=useState([]) //User filtered Items

  useEffect(() => {
    getLocalToDos();
  }, [])
  // Using useEffect function to check and run when state gets updated

  useEffect(()=>{
    filterHandle();
    saveLocalToDos();
    
  },[itemList,statusItem]);

  // Filtering the items from user filtered status

  const filterHandle=()=>{

    switch(statusItem){

      case "Completed":
        setFilteredItems(itemList.filter((todo=>todo.completed===true)))
        break
      case "Pending":
        setFilteredItems(itemList.filter((todo=>todo.completed===false)))
        break
      default:
        setFilteredItems(itemList)
    }
  }

     // Saving in local storage

     const saveLocalToDos=()=>{

      localStorage.setItem("itemList",JSON.stringify(itemList));

    };
  
    const getLocalToDos =()=>{

      if(localStorage.getItem("itemList")===null){
        localStorage.setItem("itemList",JSON.stringify([]));
      }
      else{
        let toDoLocal = JSON.parse(localStorage.getItem("itemList"));
        setItemList(toDoLocal)
      }

    };

  return (
    <React.Fragment>

      {/* Header Section */}
      <header className="app-head my-3">
        <h1>Create your list Now !</h1>
      </header>

      {/* Main Section */}

      <section className="">
        {/* Image Section */}
          <div className="container col-lg-4 col-12 mx-auto my-3">
            <img className="app-image" src="./to-do-list.jpg" alt=""/>
          </div>

        {/* Input Field Section */}
        <div className="container col-lg-4 col-12 mx-auto">
          <InputList
            userInput={userInput} 
            setUserInput={setUserInput} 
            itemList={itemList} 
            setItemList={setItemList}
            statusItem={statusItem} 
            setStatusItem={setStatusItem}
            />
        </div>

        {/* Item list */}
        <div className="container-md col-lg-4 col-12 mx-auto">
          <Items filteredItems={filteredItems} itemList={itemList} setItemList={setItemList}/>
        </div>
      </section>

    </React.Fragment>
  )
}
export default App