const UserCard = () => {

    const user = {
        name: "Mayuri",
        city: "Pune",
        profession: "Student"
    };

    const user2 = {
        name: "Maha",
        city: "Delhi"
    };

    const user3 = {
        name: "Pradnya",
        city: "Mumbai",
        profession: "teacher"
    };

    const employee1 = {
        name: "Amruta",
        department: "IT",
        address: {
            city: "Nashik",
            pincode: 421576
        }
    };

    const employee2 = {
        name: "Maya",
        department: "CS",
        address: {
            city: "Delhi"
        }
    };

    

    return (
        <>
            <div className="container">
                <h2>User Details 1</h2>
                <p><b>Name :</b> {user.name}</p>
                <p><b>City :</b> {user.city}</p>
            </div>

            <hr />

            <div className="container">
                <h2>User Details 2</h2>
                <p><b>Name :</b> {user2.name}</p>
                <p><b>City :</b> {user2.city}</p>
            </div>

            <hr />

            <div className="container">
                <h2>User Details 3</h2>
                <p><b>Name :</b> {user3.name}</p>
                <p><b>City :</b> {user3.city}</p>
                <p><b>Profession :</b> {user3.profession}</p>
            </div>

            <hr />

            <div className="container">
                <h2>Employee 1</h2>
                <p><b>Name :</b> {employee1.name}</p>
                <p><b>Department :</b> {employee1.department}</p>
                <p><b>City :</b> {employee1.address.city}</p>
            </div>

            <hr />

            <div className="container">
                <h2>Employee 2</h2>
                <p><b>Name :</b> {employee2.name}</p>
                <p><b>Department :</b> {employee2.department}</p>
                <p><b>City :</b> {employee2.address.city}</p>
            </div>
        </>
    );
};

export default UserCard;