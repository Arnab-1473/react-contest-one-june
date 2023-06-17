import React, { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // const handleInputChange = (e) => {
    //    e.preventDefault();
    //    setFormData(e.target.value);
    // };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    function handleClick(e) {
        e.preventDefault();
        // const { fullname, email, password, confirmPassword} = formData;
        if (!formData.fullname.trim().includes(" ")) {
            alert("Please enter full name");
            setSuccess(false);
            setError(true);
            return;
        }
        if (!formData.email.trim().includes("@")) {
            alert("Please enter proper email id");
            setSuccess(false);
            setError(true);
            return;
        }
        if (formData.password.trim().length < 6) {
            alert("Password should be minimum 6 characters");
            setSuccess(false);
            setError(true);
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            alert("Password should match")
        }
        if (formData.fullname.trim() === "" || formData.email.trim() === "" || formData.password.trim() === ""
            || formData.confirmPassword.trim() === "") {
            setError(true);
            setSuccess(false)
        } else if (formData.password === formData.confirmPassword) {
            setSuccess(true);
            setError(false);
        } else {
            setError(true);
            setSuccess(false);
        }
    }
    return (
        <form className="container">
            <h1 className="signup">Signup</h1>
            <div>
                <label htmlFor="name">Full Name</label><br />
                <input type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange} />
                <hr /><br />
            </div>
            <div>
                <label htmlFor="email">Email</label><br />
                <input type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange} />
                <hr /><br />
            </div>
            <div>
                <label htmlFor="name">Password</label><br />
                <input type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange} />
                <hr /><br />
            </div>
            <div>
                <label htmlFor="name">Confirm Password</label><br />
                <input type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange} />
                <hr /><br />
            </div>

            {
                error &&
                <span id="error">Error : All the fields are mandatory</span>
            }
            {
                success &&
                <span id="success">Successfully signed up!</span>
            }
            <button type="submit" onClick={handleClick}>Signup</button>

        </form>
    )
}
export default Signup;