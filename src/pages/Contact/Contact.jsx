import { Helmet } from "react-helmet"

const Contact = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold" data-aos="fade-right">Contact Us!</h1>
                    <p className="py-6" data-aos="fade-right" data-aos-delay="300">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="fade-in">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="full name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">What can we help you with?</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Write Here..." required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn transition ease-in-out bg-[#E5C597] hover:bg-[#E5C597] border-none text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact