import { useContext, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"


const Header = () => {
    const [theme, setTheme] = useState("light")
    const handleThemeChange = (e) => {
        if(e.target.checked) {
            setTheme("halloween")
        } else {
            setTheme("light")
        }
    }


    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const links = <>
        <li><NavLink to={'/'} className={'font-semibold'}>Home</NavLink></li>
        {
            user && <li><NavLink to={'/user-profile'} className={'font-semibold'}>User Profile</NavLink></li>
        }
        <li><NavLink to={'/update_profile'} className={'font-semibold'}>Update Profile</NavLink></li>
        <li><NavLink to={'/blogs'} className={'font-semibold'}>Blogs</NavLink></li>
        <li><NavLink to={'/contact-us'} className={'font-semibold'}>Contact</NavLink></li>
        {/* <li><NavLink to={'/register'} className={'font-semibold'}>Register</NavLink></li> */}
        {/* {
            !user && <li><NavLink to={'/login'} className={'font-semibold'}>Login</NavLink></li>
        } */}
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto" data-aos="fade-in">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="font-bold text-2xl md:text-3xl"><h1>Noble<span className="text-[#d7a764]">Luxury</span></h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="cursor-pointer grid place-items-center mr-4">
                    <input type="checkbox" onChange={handleThemeChange} value={theme} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                {
                    user ?
                        <div className="dropdown dropdown-end tooltip tooltip-left lg:tooltip-left z-[1000]" data-tip={user ? user.displayName : "User not found"}>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user ? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[100] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to={'/update_profile'} className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                {user && <li onClick={handleSignOut}><a>Logout</a></li>}
                            </ul>
                        </div>
                        :
                        <Link className="font-semibold btn rounded-lg" to={'/login'}>Login</Link>
                }

            </div>
        </div>
    )
}

export default Header