import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthConText } from "../../Providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthConText)
    const handleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')
        console.log(name,photo,email,password);
        // createUser
        createUser(email,password)
        .then(result =>{
          console.log(result.user);
        })
        .catch(error =>{
          console.log(error);
        })
       
    }
 

    return (
        <div>
        <Navber></Navber>
       <div>
       <h2 className="text-2xl my-10 text-center">Please Register</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
    </div>
        <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
    </div>
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
      <button className="btn btn-secondary">Register</button>
    </div>
        </form>
        <p className="mt-4 text-center text-secondary">
            Do not Have an Account<Link to="/login">Login</Link>
        </p>
       </div>
    </div>
    );
};

export default Register;