import { Link, useLocation, useNavigate } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthConText } from "../../Providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthConText)
    const location = useLocation()
    const naviget = useNavigate()
    console.log('location in the login page',location);


    const handleLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password);
        signIn(email,password)
        .then(result =>{
          console.log(result.user);

          // naviget after login
          naviget(location?. state? location.state : '/')
        })
        .catch(error =>{
          console.error(error)
        })
    }

    return (
        <div>
            <Navber></Navber>
           <div>
           <h2 className="text-2xl my-10 text-center">Please Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
            </form>
            <p className="mt-4 text-center text-secondary">
                Do not Have an Account<Link to="/register">Register</Link>
            </p>
           </div>
        </div>
    );
};

export default Login;