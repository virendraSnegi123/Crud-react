import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Edit() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const Navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));

    }, [])
    function handleUpdate(e) {
        e.preventDefault();
        axios.put(`https://63fb9bd57a045e192b6c5850.mockapi.io/axioscrud/${id}`, {
            name,
            age,
            email
        }).then(() => {
            Navigate('/');
        });
    }

    return (
        <>
            <div className="container">
                <div className="ml-5">
                    <Link to='/'>
                        <button className="btn btn-primary">Read Data</button>
                    </Link>
                    <h2>Create Data</h2>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <form onSubmit={handleUpdate}>
                            <div className="form-group col-12">
                                <label >Name</label>
                                <input type="text" className='form-control'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group col-12">
                                <label >Age</label>
                                <input type="text" className='form-control'
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}

                                />
                            </div>
                            <div className="form-group col-12">
                                <label >Email</label>
                                <input type="email" className='form-control'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group col-12 mt-3">
                                <input type="submit" className='btn btn-success col-12' value={'Update'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit