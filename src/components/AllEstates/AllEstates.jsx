import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const AllEstates = ({est}) => {
    const {id, estate_title, description, price, image, status, view_property} = est
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt={estate_title} className='md:h-[20rem] relative' /></figure>
            <p className={`absolute right-5 top-2 py-1 px-2 rounded-lg text-white ${status == 'sale' ? 'bg-green-600' : 'bg-red-600'}`}>{status}</p>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>{description}</p>
                    <p className='text-blue-600 text-xl'>{price}</p>
                    <div className="card-actions justify-end">
                        <Link className='btn transition ease-in-out bg-[#E5C597] hover:bg-sky-400 text-white' to={`/estate/${id}`}>{view_property}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

AllEstates.propTypes = {
    est: PropTypes.object
}

export default AllEstates