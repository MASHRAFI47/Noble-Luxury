import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//images
import GooglePic from '../../../src/assets/images/google.png'
import FacebookPic from '../../../src/assets/images/facebook.png'
import GithubPic from '../../../src/assets/images/github-sign.png'

const SocialMediaLogin = () => {
    const { facebookSignIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                toast.success("Login Successful. Redirecting...", {
                    autoClose: 2000
                })
                setTimeout(() => {
                    {
                        location.state ? navigate(location.state) : navigate('/')
                    }
                }, 3000);

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(result => {
                console.log(result.user)
                toast.success("Login Successful. Redirecting...", {
                    autoClose: 2000
                })
                setTimeout(() => {
                    {
                        location.state ? navigate(location.state) : navigate('/')
                    }
                }, 3000);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="px-8">
            <ToastContainer />
            <div className="grid grid-cols-3 gap-5 mt-4 mb-8">
                <button data-aos="fade-in" data-aos-delay="200" className="flex gap-2 items-center btn bg-transparent border border-[#FF3C4E] text-[#FF3C4E] hover:bg-[#FF3C4E] hover:text-white" onClick={handleGoogleSignIn}><img src={GooglePic} className="w-5" alt="" />Google</button>
                <button data-aos="fade-in" data-aos-delay="200" className="flex gap-2 items-center btn bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" onClick={handleFacebookSignIn}><img src={FacebookPic} className="w-5" alt="" />Google</button>
                <button data-aos="fade-in" data-aos-delay="200" className="flex gap-2 items-center btn border-black hover:border-black" onClick={handleGoogleSignIn}><img src={GithubPic} className="w-5" alt="" />Google</button>
            </div>
        </div>
    )
}

export default SocialMediaLogin