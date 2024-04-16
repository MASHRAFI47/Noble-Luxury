import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom"

const BlogDetails = () => {
  const allBlogs = useLoaderData();
  const { id } = useParams();
  const singleBlog = allBlogs.find(blog => blog.id == id);
  console.log(singleBlog)
  return (
    <HelmetProvider>
      <div className="container mx-auto">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog Details {singleBlog.title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="mt-10 space-y-5">
          <h1 className="text-2xl font-semibold"><span className="font-semibold">Title:</span> {singleBlog.title}</h1>
          <img src={singleBlog.image_url} className="w-full rounded-xl" alt="" />
          <p className="text-xl"><span className="font-semibold">Description: </span>{singleBlog.long_description}</p>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default BlogDetails