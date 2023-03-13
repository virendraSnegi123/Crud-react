import React, {useState} from 'react'
import axios from "axios";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const Navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('https://63fb9bd57a045e192b6c5850.mockapi.io/axioscrud',{
            name,
            age,
            email
        }).then(() =>{
            Navigate('/')
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
                        <form onSubmit={handleSubmit}>
                            <div className="form-group col-12">
                                <label >Name</label>
                                <input type="text" className='form-control'
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group col-12">
                                <label >Age</label>
                                <input type="text" className='form-control'
                                onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                            <div className="form-group col-12">
                                <label >Email</label>
                                <input type="email" className='form-control'
                                onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group col-12 mt-3">
                                <input type="submit" className='btn btn-success col-12'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create