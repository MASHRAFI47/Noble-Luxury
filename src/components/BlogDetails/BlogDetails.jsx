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
      <div className="container mx-auto px-5 lg:px-0">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Blog Details {singleBlog.title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="mt-10 space-y-5 mb-10">
          <h1 className="text-2xl font-semibold"><span className="font-semibold" data-aos="fade-down">Title:</span> {singleBlog.title}</h1>
          <img src={singleBlog.image_url} className="w-full rounded-xl" alt="" data-aos="fade-down" data-aos-delay="300" />
          <p className="text-xl" data-aos="fade-down"><span className="font-semibold">Description: </span>{singleBlog.long_description}</p>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default BlogDetails