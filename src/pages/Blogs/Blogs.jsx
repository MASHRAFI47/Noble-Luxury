import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom"

const Blogs = () => {
  const allBlogs = useLoaderData();
  console.log(allBlogs)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto">
        {
          allBlogs.map((blog) => <div key={blog.id}>
            <div className="card w-96 bg-base-100 shadow-xl">
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