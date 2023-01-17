import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
export default function Navbar(props) {
    let url = window.location.origin
    const handleHambuger =()=>{
        if(!props.show){
           props.Setshow(true)
        }
    }

    const handleGo =()=>{
        window.location.href =`${url}/case`
     }

     const handleHome =()=>{
        window.location.href =`${url}`
     }
  return (
    <header className="header-4 bg-transparent sticky-bar mt-4">
    <div className="container bg-transparent">
        <nav className="bg-transparent flex justify-between items-center py-3">
            <a className="text-3xl font-semibold leading-none" onClick={handleHome}>
                <img className="h-10" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606570/Tpt/imgs/logos/TPT-logo_uwq0un.png" alt="" />
            </a>
            <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                <li className="pt-4 pb-4" onClick={handleHome}>
                    <a onClick={handleHome}
                        className="text-sm font-semibold text-white hover:text-blueGray-500" >Home</a>
                </li>
                <li className="pt-4 pb-4">
                    <a className="text-sm font-semibold text-white hover:text-blueGray-500" >At a
                        glance</a>
                </li>
                <li className="pt-4 pb-4">
                    <a className="text-sm font-semibold text-white hover:text-blueGray-500" >Our
                        services</a>
                </li>
                <li className="pt-4 pb-4" onClick={handleGo}>
                    <a className="text-sm font-semibold text-white hover:text-blueGray-500" onClick={handleGo}>Case
                        studies</a>
                </li>
                <li className="pt-4 pb-4">
                    <a className="text-sm font-semibold text-white hover:text-blueGray-500">Digiconvers</a>
                </li>
                <li className="pt-4 pb-4"><a className="text-sm font-semibold text-white hover:text-blueGray-500"
                       >News</a></li>
                <li className="pt-4 pb-4"><a className="text-sm font-semibold text-white hover:text-blueGray-500"
                        >Connect & contact</a></li>
            </ul>
            <div className="lg:hidden">
                <button
                    className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
                    {/* <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg> */}

                    <GiHamburgerMenu className='text-lg' onClick={handleHambuger}/>
                </button>
            </div>
        </nav>
    </div>
</header>

  )
}
