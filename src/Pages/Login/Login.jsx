 import { useContext } from 'react';
import loginImage from '../../../src/assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {



    const {singInUser} = useContext(AuthContext)

     const handleLoginBtn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);



        singInUser(email, password)
        .then(result => {
            console.log(result.user);
        })
          .catch(error =>{
            console.error(error)
          })




     }

    return (
        <div>
<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
          <img src={loginImage} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm  border bg-base-100">
      <form onSubmit={handleLoginBtn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className='flex flex-col justify-center items-center space-y-5 '>
            <p  className='text-center font-popin font-semibold'>Or Login With</p>


               <div className='flex gap-5 '>
                    <div className='border px-3 py-2 rounded-lg font-popin cursor-pointer'>Google</div>
                    <div className='border px-3 py-2 rounded-lg font-popin cursor-pointer'>GithHub</div>
                    
     
               </div>
               <div>
                <p>Create An New Accout <Link className='text-red-500' to={'/singup'}>SingUp Now</Link></p>
               </div>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;