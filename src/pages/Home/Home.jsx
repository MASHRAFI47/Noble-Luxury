import { useLoaderData } from "react-router-dom"
import AllEstates from "../../components/AllEstates/AllEstates";
import Banner from "../../components/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const [dataLength, setDataLength] = useState(6)
  console.log(dataLength)
  const allTheEstates = useLoaderData();
  return (
    <div>
      <Banner />
      <section>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold text-[#dba457]'>Discover Our Best Deals</h1>
          <p className='mt-3 mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, modi pariatur. Inventore facilis exercitationem libero earum illo. Ipsam, odit fugit. Animi deserunt deleniti quas nesciunt recusandae eveniet a earum possimus?</p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            allTheEstates.slice(0, dataLength).map(est => <AllEstates key={est.id} est={est}></AllEstates>)
          }
        </div>
        {
          dataLength == allTheEstates.length ? "" : <div className="text-center mt-5">
          <button className="btn" onClick={() => setDataLength(allTheEstates.length)}>Show All</button>
        </div>
        }
        
      </section>
    </div>
  )
}

export default Home