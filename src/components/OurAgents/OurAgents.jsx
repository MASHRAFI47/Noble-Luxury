import Agent1 from '../../../src/assets/images/Agent1.jpg'
import Agent2 from '../../../src/assets/images/Agent2.jpg'
import Agent3 from '../../../src/assets/images/Agent3.jpg'

const OurAgents = () => {
    return (
        <section className='container mx-auto mb-20'>
            <h1 className="font-bold text-4xl mb-2">Meet Our Agents</h1>
            <p className="mb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, perferendis nemo? Molestiae quisquam saepe, soluta minima voluptatem fuga dolorem neque officia at eum</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                <div className="card bg-base-100 shadow-xl p-2 border" data-aos="flip-left">
                    <figure>
                        <img src={Agent1} alt="Shoes" className="rounded-full w-[15rem] h-[15rem] mx-auto" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Nitil Mohan</h2>
                        <p>Company CEO</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl p-2 border" data-aos="fade-down" data-aos-delay="200">
                    <figure>
                        <img src={Agent2} alt="Shoes" className="rounded-full w-[15rem] h-[15rem] mx-auto" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Dean Andrew</h2>
                        <p>Company Agent</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl p-2 border" data-aos="flip-right" data-aos-delay="300">
                    <figure>
                        <img src={Agent3} alt="Shoes" className="rounded-full w-[15rem] h-[15rem] mx-auto" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ceiler Muffler</h2>
                        <p>Finance Agent</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurAgents