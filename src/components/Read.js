import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

function Read() {
    const [gateData, setGateData] = useState([])
    const getData = () => {
        axios.get('https://63fb9bd57a045e192b6c5850.mockapi.io/axioscrud')
            .then((res) => {
                setGateData(res.data);
            });
    }

    const handleDelete = (id) => {
        if (window.confirm('Are Sure Delete This Row?')) {
            axios.delete(`https://63fb9bd57a045e192b6c5850.mockapi.io/axioscrud/${id}`)
            .then(() => {
                getData();
            });
        }
        
    }
    useEffect(() => {
        getData();
    }, [])


const setDataToStorage =(id , name , age , email) =>{
    localStorage.setItem('id' , id);
    localStorage.setItem('name' , name);
    localStorage.setItem('age' , age);
    localStorage.setItem('email' , email);
}
    return (
        <>
            <div className='container mt-5'>

                <div className="row  d-flex justify-content-center">
                    <div className="col-9">
                        <div className="my-3">
                            <Link to='/Create'>
                                <button className="btn btn-primary">New Create Data</button>
                            </Link>
                            <h2>Read</h2>
                        </div>
                        <hr className='my-3'></hr>
                        <table class="table table-bordered table-striped table-dark">
                            <thead>
                                <tr>
                                    <th >ID</th>
                                    <th >Name</th>
                                    <th >Age</th>
                                    <th >Email</th>
                                    <th >Edit</th>
                                    <th >Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    gateData.map((item) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.age}</td>
                                                    <td>{item.email}</td>
                                                    <td>
                                                        <Link to='/Edit'>
                                                        <button className='btn btn-info'
                                                         onClick={() => setDataToStorage(item.id, item.name , item.age, item.email)}
                                                         >
                                                        Edit
                                                        </button>
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            </>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Read