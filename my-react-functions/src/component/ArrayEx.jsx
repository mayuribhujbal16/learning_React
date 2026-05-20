function FruitListArray() {
    const fruits = ["Mango","Pineapple","Apple","Orange"];

    return(
        <>
        <h2>Fruit List Array Example</h2>
        <ul>
            {fruits.map((item,index) =>(
                <li key={index}>{item}</li>
            ) )}
        </ul>
        <hr/>

        </>
    )
}
export default FruitListArray