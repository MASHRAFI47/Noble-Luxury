import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom"

const Blogs = () => {
  const allBlogs = useLoaderData();
  return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blogs</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto px-5 lg:px-0 mb-10" data-aos="fade-in">
          {
            allBlogs.map((blog) => <div key={blog.id}>
              <div className="card bg-base-100 shadow-xl">
                <figure><img src={blog.image_url} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{blog.title}</h2>
                  <p>{blog.short_description}</p>
                  <div className="card-actions justify-end">
                    <Link className="btn transition ease-in-out bg-[#E5C597] hover:bg-blue-600 text-white" to={`/blog/${blog.id}`}>Read More</Link>
                  </div>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
  )
}

export default Blogs