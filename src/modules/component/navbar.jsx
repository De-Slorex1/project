import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.png'

const Navbar = () => {
    return ( 
        <div className='w-full m-0 p-0 px-32'>
            <div className='py-7'>
                <div className='border-2 border-white rounded-full flex flex-row items-center justify-between w-full'>
                    <div>
                        <img src={logo} alt={logo} className='w-[100%] h-[75px]' />
                    </div>
                    <div className='px-4 text-white'>
                        <NavLink className='px-5 font-light text-sm' to="/works">Works</NavLink>
                        <NavLink className='px-5 font-light text-sm' to="/services">Our Services</NavLink>
                        <NavLink className='px-5 font-light text-sm' to="/faqs">FAQs</NavLink>
                        <Link className=' px-10 font-normal text-md bg-dark-orange rounded-full py-3 hover:bg-transparent hover:border' to="/book-a-call">Book A Call</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;