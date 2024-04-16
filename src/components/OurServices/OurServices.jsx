import Group from '../../../src/assets/images/group.png'
import Research from '../../../src/assets/images/research.png'
import Team from '../../../src/assets/images/team.png'
import Financial from '../../../src/assets/images/financial-profit.png'
import Capital from '../../../src/assets/images/capital-venture.png'
import Agreement from '../../../src/assets/images/agreement.png'

const OurServices = () => {
    return (
        <section className="container mx-auto">
            <h1 className="font-bold text-4xl mb-10">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex gap-2 mb-10">
                    <figure><img src={Group} className='w-30' alt="" /></figure>
                    <div>
                        <h3 className='text-xl font-semibold mb-1'>Property Management</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam itaque quod praesentium quo eveniet earum.</p>
                    </div>
                </div>
                <div className="flex gap-2 mb-10">
                    <figure><img src={Capital} className='w-30' alt="" /></figure>
                    <div>
                        <h3 className='text-xl font-semibold mb-1'>Capital Improvements</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam itaque quod praesentium quo eveniet earum.</p>
                    </div>
                </div>
                <div className="flex gap-2 mb-10">
                    <figure><img src={Financial} className='w-30' alt="" /></figure>
                    <div>
                        <h3 className='text-xl font-semibold mb-1'>Financial Reporting</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam itaque quod praesentium quo eveniet earum.</p>
                    </div>
                </div>
                <div className="flex gap-2 mb-10">
                    <figure><img src={Agreement} className='w-30' alt="" /></figure>
                    <div>
                        <h3 className='text-xl font-semibold mb-1'>Business Development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam itaque quod praesentium quo eveniet earum.</p>
                    </div>
                </div>
                <div className="flex gap-2 mb-10">
                    <figure><img src={Research} className='w-30' alt="" /></figure>
                    <div>
                        <h3 className='text-xl font-semibold mb-1'>Finance Real Estate</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam itaque quod praesentium quo eveniet earum.</p>
                    </div>
                </div>
                <div className="flex gap-2 mb-10">
                    <figure><img src={Team} className='w-30' alt="" /></figure>
                    <div>
                        <h3 className='text-xl font-semibold mb-1'>Recover Asset Value</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam itaque quod praesentium quo eveniet earum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices