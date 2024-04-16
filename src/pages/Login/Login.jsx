import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import SocialMediaLogin from "../../components/SocialMediaLogin/SocialMediaLogin"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"
import { Link, useLocation, useNavigate } from "react-router-dom"

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet"

const Login = () => {
  const { signInUser } = useContext(AuthContext)
  const [showPass, setShowPass] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then(result => {
        console.log(result.user)
        toast.success('Login Successful. Redirecting...', {
          autoClose: 2000
        })
        setTimeout(() => {
          navigate(location.state ? location.state : '/')
        }, 3000);
      })
      .catch(error => {
        console.log(error.message)
        toast.warn("Invalid Info")
      })
  }
  return (
    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto border mt-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ToastContainer />
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl text-center font-bold">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPass ? "text" : "password"} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
          <span className="mt-0 mr-0 ml-auto mb-0 relative bottom-8 right-4" onClick={() => setShowPass(!showPass)}>
            {
              showPass ? <FaEye /> : <FaEyeSlash />
            }
          </span>
          {errors.password && <span>This field is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn transition ease-in-out bg-[#E5C597] hover:bg-[#E5C597] border-none text-white">Login</button>
        </div>

      </form>
      <div className="form-control">
        <p className="text-center text-sm mb-2">-Or Sign In Using-</p>
        <SocialMediaLogin />
      </div>
      <div className="form-control">
        <p className="text-center mb-5">New User? <Link to={'/register'} className="text-blue-600 font-semibold">Register Now</Link></p>
      </div>
    </div>
  )
}

export default Login