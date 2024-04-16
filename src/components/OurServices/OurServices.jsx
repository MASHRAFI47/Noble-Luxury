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
    return (
        <section className="container mx-auto px-5 lg:px-0">
            <h1 className="font-bold text-4xl mb-10 text-center md:text-left" data-aos="fade-right">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-10 text-center md:text-left" data-aos="fade-in" data-aos-delay="300">
                <div className="flex flex-col md:flex-row gap-2 mb-10">
                    <figure><img src={theme == "light" ? Group : GroupDark} className='mx-auto w-20 md:w-full' alt="" /></figure>
                    <div className='p-2'>
                        <h3 className='text-xl font-semibold mb-1'>Property Management</h3>
                        <p>Property management services ensure your real estate investment is well-maintained and profitable.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 mb-10">
                    <figure><img src={theme == "light" ? Capital : CapitalDark} className='mx-auto w-20 md:w-full' alt="" /></figure>
                    <div className='p-2'>
                        <h3 className='text-xl font-semibold mb-1'>Capital Improvements</h3>
                        <p>Capital improvements enhance the value and functionality of your property by upgrading its infrastructure, systems, or amenities.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 mb-10">
                    <figure><img src={theme == "light" ? Financial : FinancialDark} className='mx-auto w-20 md:w-full' alt="" /></figure>
                    <div className='p-2'>
                        <h3 className='text-xl font-semibold mb-1'>Financial Reporting</h3>
                        <p>Financial reporting provides transparent and accurate insights into the financial performance of your property. </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 mb-10">
                    <figure><img src={theme == "light" ? Agreement : AgreementDark} className='mx-auto w-20 md:w-full' alt="" /></figure>
                    <div className='p-2'>
                        <h3 className='text-xl font-semibold mb-1'>Business Development</h3>
                        <p>Business development focuses on identifying growth opportunities and expanding market presence for your property portfolio.</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 mb-10">
                    <figure><img src={theme == "light" ? Research : ResearchDark} className='mx-auto w-20 md:w-full' alt="" /></figure>
                    <div className='p-2'>
                        <h3 className='text-xl font-semibold mb-1'>Finance Real Estate</h3>
                        <p>Finance in real estate involves securing and managing the capital required for property investments. </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 mb-10">
                    <figure><img src={theme == "light" ? Team : TeamDark} className='mx-auto w-20 md:w-full' alt="" /></figure>
                    <div className='p-2'>
                        <h3 className='text-xl font-semibold mb-1'>Recover Asset Value</h3>
                        <p>Asset value recovery focuses on optimizing the value of distressed or underperforming assets through strategic financial management.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices