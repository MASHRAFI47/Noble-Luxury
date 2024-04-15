import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { email, password, fullName, photoURL } = data;
        if (password.length < 6) {
            toast("Password length must be at least 6 characters")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast("Password must contain at least one uppercase")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast("Password must contain at least one lowercase")
            return;
        }
        createUser(email, password)
            .then(() => {
                updateUserProfile(fullName, photoURL)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto border">
            <ToastContainer />
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="full name" className="input input-bordered" {...register("fullName", { required: true })} />
                    {errors.fullName && <span>This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="photo url" className="input input-bordered" {...register("photoURL", { required: true })} />
                    {errors.photoURL && <span>This field is required</span>}
                </div>
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
                    <button className="btn btn-primary">Register</button>
                </div>
                <div className="form-control mt-3">
                    <p className="text-center mb-5">Registered Already? <Link to={'/login'} className="text-blue-600 font-semibold">Login Now</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Register