const EventExample = () => {
    const showmessage =() => {
        alert("Button Was Clicked");
    }

    const showmessage2 =() => {
        alert("Hello MAyuri");
    }
    const handleInput = (event) =>{
        console.clear();
        console.log("value: " +event.target.value);

    }
    const handleMouseOver =() =>console.log("Mouse is hover on text"); 

    const handleDbClick =() =>console.log("Mouse double click on text"); 

    return(
        <>
        <h1> Arrow function event ex</h1>
          <div className="container">
            <button classname="btn btn-primary" onClick={()=>alert("Hello Welcome")}>on click </button>
          </div>
         <hr/>

         
         <div classname="container">
            <h1>On click Function Calling</h1>
         <button classname="btn btn-primary" onClick={showmessage}>On Click Inline</button>
         </div>

        
         <div classname="container">
             <h1>On click Parametr Function Calling</h1>
         <button classname="btn btn-secondary" onClick={()=>showmessage2("Mayuri")}>On Click Inline</button>
         </div>
         <hr/>

         <div classname="container">
            <input type ="text" onChange={handleInput} 
            placeholder="Enter Name"/>
        </div>
            <hr/>

        <div classname="container">
            <p onMouseOver={handleMouseOver} 
            onDoubleClick={handleDbClick}> on mouse hovet text</p>
        </div>



        </>
    )
}
export default EventExample