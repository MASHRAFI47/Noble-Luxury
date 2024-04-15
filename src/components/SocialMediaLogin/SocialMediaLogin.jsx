import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const SocialMediaLogin = () => {
    const { facebookSignIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                {
                    location.state ? navigate(location.state) : navigate('/')
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(result => {
                console.log(result.user)
                {
                    location.state ? navigate(location.state) : navigate('/')
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="px-8">
            <button className="btn w-full" onClick={handleGoogleSignIn}><FaGoogle />Login With Google</button>
            <button className="btn w-full mt-4 mb-8" onClick={handleFacebookSignIn}><FaFacebook />Login With Facebook</button>
        </div>
    )
}

export default SocialMediaLogin