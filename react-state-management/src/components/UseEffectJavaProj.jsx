import {React, useEffect, useState } from 'react'

const UseEffectJavaProj = () => {
    const[users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/api/persons")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
    });

  }, []);

  return (
    <div>UseEffectJavaProject
    <div className="container">
       <table className="table table-bordered table-hover">

          <thead>

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
    </div>

  )
}

export default UseEffectJavaProj
