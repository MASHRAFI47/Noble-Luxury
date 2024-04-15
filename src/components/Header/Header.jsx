import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"


const Header = () => {
    const {user, logOut} = useContext(AuthContext) 
    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    }
    const links = <>
        <li><NavLink to={'/'} className={'font-semibold'}>Home</NavLink></li>
        <li><NavLink to={'/update_profile'} className={'font-semibold'}>Update Profile</NavLink></li>
        <li><NavLink to={'/blogs'} className={'font-semibold'}>Blogs</NavLink></li>
        {/* <li><NavLink to={'/register'} className={'font-semibold'}>Register</NavLink></li> */}
        {
            !user && <li><NavLink to={'/login'} className={'font-semibold'}>Login</NavLink></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="font-bold text-3xl"><h1>Noble<span className="text-[#d7a764]">Luxury</span></h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end tooltip tooltip-bottom z-[1000]" data-tip={user ? user.displayName : "User not found"}>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[100] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        {user && <li onClick={handleSignOut}><a>Logout</a></li>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header