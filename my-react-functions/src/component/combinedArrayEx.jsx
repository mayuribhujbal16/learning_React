function VegitablesEx() {
    const Vegitable1 = ["Bringle","potato"];
    const Vegitable2 = ["Tomato"];
    const combinedItems = [...Vegitable1,...Vegitable2];

    const names = ["Anand","Amit","Bunty","Bittu","Mayura"];
    const result = names.filter(name =>
        name.startsWith("A")
    );

    const names1 = ["Anand","Amit","Bunty","Bittu","Mayura"];
    const result2 = names1.filter(name =>
        name.includes("B")
    );

    return(
        <>
        <div className="container"></div>

        <h2>Combined Vegetable List</h2>
        <ul>
            {combinedItems.map((item,index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>

        <hr/>

        <h2>Starts With A</h2>
        <ul>
            {result.map((item,index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>

        <hr/>

        <h2>Includes B</h2>
            <ul>
                {result2.map((item,index) =>(
                    <li key={index}>{item}</li>
                ))}
            </ul>

        <hr/>
        </>
    )
}

export default VegitablesEx