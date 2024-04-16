import { useLoaderData, useParams } from "react-router-dom"

const BlogDetails = () => {
    const allBlogs = useLoaderData();
    const {id} = useParams();
    const singleBlog = allBlogs.find(blog => blog.id == id);
    console.log(singleBlog)
  return (
    <div className="container mx-auto">
        <div className="mt-10">
            <h1 className="text-2xl"><span className="font-semibold">Title:</span> {singleBlog.title}</h1>
            <p className="text-2xl"><span className="font-semibold">Description:</span></p>
        </div>
    </div>
  )
}

export default BlogDetails