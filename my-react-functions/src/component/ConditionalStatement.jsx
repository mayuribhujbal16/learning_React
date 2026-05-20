const ConditionalStatement = () => {
    const age = 21;
    const isAdmin = true;
    const hasPermission = true;

    function Admin(){
        return(
            <h4>Admin Pannel</h4>
        )
    }
    function User(){
        return(
            <h4>User Dashboard</h4>
        )
    }
    const isAdminOrUser = false;

    return(
        <>
        <div classname="container">
            <h3>Ex4 : Render different components based on conditions</h3>
            {isAdminOrUser ? <Admin/> : <User/>}



            <h2>Ex1 simple Age Display</h2>
            <h4>Your Ahe: {age}</h4>
            {age>=18 ? <p>Your Eligible for vote</p> : <p>Your not Eligible for vote</p>}
            <hr/>
            <h2>Ex2 show only if condition true</h2>
            {isAdmin && <p>Welcome Admin</p>}
            <hr/>

            <h2>Ex3 hide containt based on condition</h2>
            {hasPermission ? <p>Access granted</p> : <p>Access Denied</p>}

        </div>
        </>

    )
}
export default ConditionalStatement