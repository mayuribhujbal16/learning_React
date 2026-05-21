function CarListArray() {
    const cars = ["Bugatii","Thar"];

    return(
        <>
        <h2>Car List Array Example</h2>
        <ul>
            {fruits.map((item,index) =>(
                <li key={index}>{item}</li>
            ) )}
        </ul>
        <hr/>
        
        </>
    )
}
export default CarListArray;       