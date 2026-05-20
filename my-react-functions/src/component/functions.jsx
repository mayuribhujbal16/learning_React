//const FunctionEx = () =>{
   //  function getName(){
    //    return "Mayuri";
    // }
 //  return (
    //    <>
         //   <h1>
          //      Hey {getName() } Here
          //  </h1>
        
        //</>
    //)
//};


//const FunctionEx = () => {
    //const getName = (yourname) => {
      //  return yourname;
   // }
    //const name = "MAyuri";
    //const name2 = "PAllavi"
    //return(
      //  <>
        //<h1>Using parameterized function</h1>
     //   <h2>Hello my name is{getName(name)}</h2>
      //  <h2>Hello my name is{getName(name2)}</h2>
       // </>
//    )
//}


const FunctionExample = () => {
    const add = (a,b) => {
        return a+b;
    }
    return(
        <>
        <div className="container">
            <h1>Addition Ex</h1>
            <h2> 10 + 20 = {add(10,20)}</h2>
            <h2> 20 + 30 = {add(20,30)}</h2>
        </div>
        </>
    )
}
export default FunctionEx