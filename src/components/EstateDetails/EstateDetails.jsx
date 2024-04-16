import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom"
import { IoLocationOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";



const EstateDetails = () => {
  const {theme} = useContext(AuthContext)
  const allTheEstates = useLoaderData();
  const { id } = useParams();
  const singleEstate = allTheEstates.find(est => est.id == id);
  const { estate_title, image, price, long_description, status, location, segment_name, description, facilities, area } = singleEstate
  return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Estate Details {estate_title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="container mx-auto mt-6 px-4 md:px-6 lg:px-0 md:grid md:grid-cols-4">
          <div className="md:flex md:justify-between col-span-4">
            <h1 className="text-2xl font-semibold">{estate_title}</h1>
            <p className="text-2xl font-bold">Price: {price}</p>
          </div>
          <div className="mt-4 col-span-3">
            <span className={`py-2 px-4 text-white rounded-md ${status == 'sale' ? 'bg-green-600' : 'bg-red-600'}`}>{status}</span>
            <p className="my-4 text-xl"><span className="font-semibold"><IoLocationOutline className="inline" />Location:</span> {location}</p>
          </div>
          <div className="col-span-3">
            <img src={image} className="rounded-lg" alt="" />
            <h1 className="mt-6 font-bold text-2xl pb-4 border-b-2">Details:</h1>
            <p className="mt-4 tracking-wider leading-8	">{long_description}</p>
          </div>
          <div className="mt-3 md:mt-0 md:ml-3 space-y-3">
            <p className="text-xl"><span className="font-semibold">Segment:</span> {segment_name}</p>
            <p className="text-xl"><span className="font-semibold">Description:</span> {description}</p>
            <p className="text-xl"><span className="font-semibold">Area:</span> {area}</p>
            <div>
              <p><span className="font-semibold text-xl">Facilities:</span></p>
              {
                facilities.map((fac, index) => <div className={`bg-green-300 inline-block rounded-md p-2 mr-2 ml-1 mt-2 ${theme == "light" ? "text-black" : "text-black"}`} key={index}><p>{fac}</p></div>)
              }
            </div>
          </div>
        </div>
      </div>
  )
}

export default EstateDetails