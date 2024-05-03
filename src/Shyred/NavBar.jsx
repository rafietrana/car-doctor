 import { Link} from 'react-router-dom';
import imageOne from '../assets/icons/logos.jfif'
const NavBar = () => {

  
    const navMenu = <>
 
    <li className='uppercase font-popin font-semibold'><Link to={'/'}>Home</Link></li>
    <li className='uppercase font-popin font-semibold'><Link>About</Link></li>
    <li className='uppercase font-popin font-semibold'><Link>Services</Link></li>
    <li className='uppercase font-popin font-semibold'><Link to={'/login'}>Login</Link></li>
    <li className='uppercase font-popin font-semibold'><Link to={'/singup'}>SingUp</Link></li>
 
     </>
    return (
        <div className='h-20'>
         <div className="navbar  bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
 
      {navMenu}
 
      </ul>
    </div>
    <a className=""><img className='w-16' src={imageOne} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 mt-5">
 
    {navMenu}
 
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-outline hover:bg-gray-100 hover:text-black">Appointment</a>
  </div>
</div>
        </div>
    );
};

export default NavBar;