import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import SearchBar from './SearchBar';

const NavigationBar = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        await logout();
        navigate('/');
      } catch (e) {
        console.log(e.message);
      }
    };
    return (
        <div className='flex h-[60px] items-center mx-[10%] mt-4 justify-between px-[30px] w-[80%] bg-[#5A2317]/70 text-white'>
            <Link to='/'>
                <h1 className='text-white/75 text-4xl font-bold cursor-pointer'>
                    Iris
                </h1>
            </Link>
            <div className='flex items-center justify-between text-white font-bold text-base'> 
                <SearchBar/>
                <Link className='pr-4 hover:text-red-400' to="/store">Trgovina</Link>
                <Link className='pr-4 hover:text-red-400' to="/contact">Kontakt</Link>
                {user?.email ? 
                (
                    <div>
                        <div className='flex items-center justify-evenly'>
                            <p className=''>{user.email}</p>
                            <Link to='/shopCart'>
                            <FaShoppingCart className='cursor-pointer mx-3 text-2xl z-[10] text-[#fff]/90' />
                            </Link>
                            <button onClick={handleLogout} className='h-10 px-5 m-2 border py-2 '>
                                Logout
                            </button>
                            
                            
                        </div>
                    </div>
                )
                :
                (
                    <div>
                        <Link className='pr-4 hover:text-red-400' to="/signin">Sign In</Link>
                        <Link className='pr-4 hover:text-red-400' to="/signup">Sign Up</Link>
                    </div>
                )}
            </div>
            
        

        </div>
      );
}
 
export default NavigationBar;