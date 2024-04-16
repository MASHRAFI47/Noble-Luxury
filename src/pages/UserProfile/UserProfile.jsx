import { useContext } from "react"
import { Helmet } from "react-helmet"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto border mb-20 mt-10">
            <Helmet>
                <meta charSet="utf-8" />
                <title>User Profile</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <form className="card-body">
                <h1 className="text-3xl text-center font-bold" data-aos="fade-down">User Profile</h1>
                <div>
                    <img src={user.photoURL} className="rounded-full mx-auto" alt="" />
                </div>
                <div className="form-control" data-aos="fade-right" data-aos-delay="100">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="full name" value={user.displayName} className="input input-bordered" />
                </div>
                <div className="form-control" data-aos="fade-right" data-aos-delay="200">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" value={user.email} className="input input-bordered" />
                </div>
                <div className="form-control" data-aos="fade-right" data-aos-delay="300">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="photo url" value={user.photoURL} className="input input-bordered" />
                </div>
            </form>
        </div>
    )
}

export default UserProfile