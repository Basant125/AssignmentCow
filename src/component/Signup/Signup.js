import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify"
import '../../sass/Signup.scss'
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            if (user) {
                Navigate("/login");
                alert("Register succesfully");
            }
        } catch (e) {
            alert("This email is alreday exit");
        }
    };

    return <div className="signup">
        <div className="signup-container">
            <h2 className="signup-heading">Register</h2>
            <form className="form">
                <div className="form-group">
                    <label htmlFor="name">E-Mail</label>
                    <input
                        type="email"
                        id="name"
                        name="name"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Password</label>
                    <input
                        type="password"
                        id="company"
                        name="company"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type={"submit"}
                        value="Register"
                        className="submit-btn"
                        onClick={Register}
                    />
                </div>
                <span>
                    if you have already account then <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    </div>;
};

export default Signup;
