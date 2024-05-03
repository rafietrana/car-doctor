import { Link } from "react-router-dom";
import singupImage from '../../../src/assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
 
const SingUp = () => {

           const {createUser} = useContext(AuthContext)
    const handleSingUpBtn = (e) =>{
     e.preventDefault()
      const form =  e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name,  email, password);




      createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.error(error)
      })



      

    }
    return (
        <div>
<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
          <img src={singupImage} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm  border bg-base-100">
      <form onSubmit={handleSingUpBtn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SingUp Now</button>
        </div>
        <div className='flex flex-col justify-center items-center space-y-5 '>
 
               <div>
                <p>Already Have an Accout <Link className='text-red-500' to={'/singup'}>Login  Now</Link></p>
               </div>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingUp;