import Group from '../../../src/assets/images/group.png'
import Research from '../../../src/assets/images/research.png'
import Team from '../../../src/assets/images/team.png'
import Financial from '../../../src/assets/images/financial-profit.png'
import Capital from '../../../src/assets/images/capital-venture.png'
import Agreement from '../../../src/assets/images/agreement.png'

import GroupDark from '../../../src/assets/images/groupdark.png'
import ResearchDark from '../../../src/assets/images/realestate-dark.png'
import TeamDark from '../../../src/assets/images/team-dark.png'
import FinancialDark from '../../../src/assets/images/financialdark.png'
import CapitalDark from '../../../src/assets/images/capitaldark.png'
import AgreementDark from '../../../src/assets/images/business-dark.png'

import { useContext } from 'react'
import { AuthContext } from '../../providers/AuthProvider/AuthProvider'

const OurServices = () => {
    const {theme} = useContext(AuthContext);
    console.log(theme)
    return (
        <section className="container mx-auto">
            <h1 className="font-bold text-4xl mb-10" data-aos="fade-right">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-10" data-aos="fade-in" data-aos-delay="300">
                <div className="flex gap-2 mb-10">
                    <figure><img src={theme == "light" ? Group : GroupDark} className='w-30' alt="" /></figure>
                    <div>
                        <h3 className='text-xl font-semibold mb-1'>Property Management</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam itaque quod praesentium quo eveniet earum.</p>
                    </div>
                </div>
                <div className="flex gap-2 mb-10">
                    <figure><img src={theme == "light" ? Capital : CapitalDark} className='w-30' alt="" /></figure>
                    <div>
                        <h3 className='text-xl font-semibold mb-1'>Capital Improvements</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam itaque quod praesentium quo eveniet earum.</p>
                    </div>
                </div>
                <div className="flex gap-2 mb-10">
                    <figure><img src={theme == "light" ? Financial : FinancialDark} className='w-30' alt="" /></figure>
                    <div>
                        <h3 className='text-xl font-semibold mb-1'>Financial Reporting</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam itaque quod praesentium quo eveniet earum.</p>
                    </div>
                </div>
                <div className="flex gap-2 mb-10">
                    <figure><img src={theme == "light" ? Agreement : AgreementDark} className='w-30' alt="" /></figure>
                    <div>
                        <h3 className='text-xl font-semibold mb-1'>Business Development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam itaque quod praesentium quo eveniet earum.</p>
                    </div>
                </div>
                <div className="flex gap-2 mb-10">
                    <figure><img src={theme == "light" ? Research : ResearchDark} className='w-30' alt="" /></figure>
                    <div>
                        <h3 className='text-xl font-semibold mb-1'>Finance Real Estate</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam itaque quod praesentium quo eveniet earum.</p>
                    </div>
                </div>
                <div className="flex gap-2 mb-10">
                    <figure><img src={theme == "light" ? Team : TeamDark} className='w-30' alt="" /></figure>
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