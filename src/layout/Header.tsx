import logo from '../assets/images/logo.png';

function Header() {
    return ( 
        <header className="bg-black h-[15%]">
            <h1 className="text-white h-full flex justify-center items-center">
                <img src={logo} className='h-full object-contain' />
            </h1>
        </header>
     );
}

export default Header;