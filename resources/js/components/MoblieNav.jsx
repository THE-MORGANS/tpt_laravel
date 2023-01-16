import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
export default function MoblieNav(props) {

    const handleClose =()=>{
        if(props.show){
          props.Setshow(false)
        }
      }
  return (
    <div className={props.show?"navbar-menu relative z-50 transition duration-300":"hidden navbar-menu relative z-50 transition duration-300"}   >
    <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
    <nav
        className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
        <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-semibold leading-none" href="#">
                <img className="h-10" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606570/Tpt/imgs/logos/TPT-logo_uwq0un.png" alt="" />
            </a>
            <button className="navbar-close">
              <AiOutlineClose onClick={handleClose}/>
            </button>
        </div>
        <div>
            <ul className="mobile-menu">
                <li className="mb-1 menu-item-has-children rounded-xl">
                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl"
                        href="#">Home</a>
                </li>
                <li className="mb-1 rounded-xl">
                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl"
                  >At a glance</a>
                </li>
                <li className="mb-1">
                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                       >Our services</a>
                </li>
                <li className="mb-1">
                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                       >Case studies</a>
                </li>
                <li className="mb-1">
                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                       >Digiconvers</a>
                </li>
                <li className="mb-1">
                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                      >News</a>
                </li>
                <li className="mb-1 menu-item-has-children rounded-xl">
                    <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                    >Connect & contact</a>
                </li>
            </ul>
            {/* <div className="mt-4 pt-6 border-t border-blueGray-100">
                <a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded"
                    href="#">Sign Up</a>
                <a className="block px-4 py-3 mb-2 text-xs text-center text-blue-500 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                    href="#">Log In</a>
            </div> */}
        </div>


    </nav>
</div>
  )
}
