import React from "axios"
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        image: "",
    });
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('password', user.password);
        formData.append('address', user.address);
        formData.append('image', user.image);
        axios.post('http://localhost:3009/auth/insertuser', formData)
            .then(result => {
                if (result.data.Status) {
                    navigate('/')
                } else {
                    alert(result.data.Error)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
            <div className="p-3 rounded w-50 border">
                <h3 className="text-center">Create an account</h3>
                <form className="row g-1" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label for="inputName" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control rounded-0"
                            id="inputName"
                            placeholder="Enter Name"
                            autoComplete="off"
                            onChange={(e) =>
                                setUser({ ...user, name: e.target.value })
                            }
                        />
                    </div>
                    <div className="col-12">
                        <label for="inputEmail4" className="form-label">
                            Email
                        </label>
                        <input
                            type="Email"
                            className="form-control rounded-0"
                            id="inputEmail4"
                            placeholder="Enter Email"
                            autoComplete="off"
                            onChange={(e) =>
                                setUser({ ...user, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="col-12">
                        <label for="inputPassword4" className="form-label">
                            password
                        </label>
                        <input
                            type="Password"
                            className="form-control rounded-0"
                            id="input Password4"
                            placeholder="EnterPassword4"
                            onChange={(e) =>
                                setUser({ ...user, password: e.target.value })
                            }
                        />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control rounded-0"
                            id="inputAddress"
                            placeholder="1234 Main St"
                            autoComplete="off"
                            onChange={(e) =>
                                setUser({ ...user, name: e.target.value })
                            }
                        />
                    </div>
                    <div className="col-12 mb-3">
                        <label className="form-Label" for="inputGroupFile01">
                            Select image
                        </label>
                        <input
                            type="file"
                            className="form-control rounded-0"
                            id="inputGroupFile01"
                            name="image"
                            onChange={(e) =>
                                setUser({ ...user, name: e.target.value })
                            }
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100 mb-2">
                            Register
                        </button>
                        <button className='btn btn-secondary w-100 rounded-0 mb-2 rounded-2' onClick={()=>{navigate('/')}}>Login</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Registration