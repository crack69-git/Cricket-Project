import navImg from '../../assets/logo.png'
import coinImg from '../../assets/Currency.png'
const Navbar = ({ coin }) => {
    return (
        <div className="navbar max-w-11/12 shadow-sm mx-auto bg-white">
            <div className="flex-1">
                <a className="text-xl">
                    <img className='w-15' src={navImg}></img>
                </a>
            </div>
            <div className='flex items-center'>
                <span className='mr-1'>{coin}</span>
                <span>Coin</span>
                <img className='w-5 ml-2' src={coinImg}></img>
            </div>
        </div>
    );
};

export default Navbar;