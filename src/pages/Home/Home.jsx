import { useLoaderData } from "react-router-dom"
import AllEstates from "../../components/AllEstates/AllEstates";
import Banner from "../../components/Banner/Banner";
import { useState } from "react";
import OurServices from "../../components/OurServices/OurServices";
import OurAgents from "../../components/OurAgents/OurAgents";
import { Helmet } from "react-helmet";


const Home = () => {
  const [dataLength, setDataLength] = useState(6)
  const allTheEstates = useLoaderData();
  return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <Banner />

        <OurServices />

        <section>
          <div className='container mx-auto text-center'>
            <h1 className='text-4xl font-bold'>Discover Our Best Deals</h1>
            <p className='mt-3 mb-10 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, modi pariatur. Inventore facilis exercitationem libero earum illo. Ipsam, odit fugit</p>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
              allTheEstates.slice(0, dataLength).map(est => <AllEstates key={est.id} est={est}></AllEstates>)
            }
          </div>
          {
            dataLength == allTheEstates.length ? "" : <div className="text-center mt-5">
              <button className="btn transition ease-in-out bg-[#E5C597] hover:bg-blue-600 text-white" onClick={() => setDataLength(allTheEstates.length)}>Show All</button>
            </div>
          }

        </section>


        <OurAgents />
        
      </div>
  )
}

export default Home