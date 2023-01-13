import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { animate, motion } from 'framer-motion';
function Example() {
    const [num, Setnum] = useState(0)
    //  [ -1900,   1900, ]

    const handleClick =(e)=>{
      // Setnum()
      if(!stop){
        Setstop(true)
        Setnum(e.screenX)
      }else{
        Setstop(false)
        Setnum(0)
    // 1900
      }
    }
    const offer = { visibility:"visible", animationDelay:"0.1s", animationName:"fadeInUp" }
    return (
      <div>


        <div className="main">

          <header className="header-4 bg-transparent sticky-bar mt-4">
              <div className="container bg-transparent">
                  <nav className="bg-transparent flex justify-between items-center py-3">
                      <a className="text-3xl font-semibold leading-none" href="index.html">
                          <img className="h-10" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606570/Tpt/imgs/logos/TPT-logo_uwq0un.png" alt="" />
                      </a>
                      <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                          <li className="pt-4 pb-4">
                              <a href="index.html"
                                  className="text-sm font-semibold text-white hover:text-blueGray-500">Home</a>
                          </li>
                          <li className="pt-4 pb-4">
                              <a className="text-sm font-semibold text-white hover:text-blueGray-500" href="about.html">At a
                                  glance</a>
                          </li>
                          <li className="pt-4 pb-4">
                              <a className="text-sm font-semibold text-white hover:text-blueGray-500" href="services.html">Our
                                  services</a>
                          </li>
                          <li className="pt-4 pb-4">
                              <a className="text-sm font-semibold text-white hover:text-blueGray-500" href="#">Case
                                  studies</a>
                          </li>
                          <li className="pt-4 pb-4">
                              <a className="text-sm font-semibold text-white hover:text-blueGray-500" href="#">Digiconvers</a>
                          </li>
                          <li className="pt-4 pb-4"><a className="text-sm font-semibold text-white hover:text-blueGray-500"
                                  href="#">News</a></li>
                          <li className="pt-4 pb-4"><a className="text-sm font-semibold text-white hover:text-blueGray-500"
                                  href="#">Connect & contact</a></li>
                      </ul>
                      <div className="lg:hidden">
                          <button
                              className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
                              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <title>Mobile menu</title>
                                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                              </svg>
                          </button>
                      </div>
                  </nav>
              </div>
          </header>


          <div className="hidden navbar-menu relative z-50 transition duration-300">
              <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
              <nav
                  className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300">
                  <div className="flex items-center mb-8">
                      <a className="mr-auto text-3xl font-semibold leading-none" href="#">
                          <img className="h-10" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606570/Tpt/imgs/logos/monst-logo_xdyxjw.svg" alt="" />
                      </a>
                      <button className="navbar-close">
                          <svg className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blue-500"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                      </button>
                  </div>
                  <div>
                      <ul className="mobile-menu">
                          <li className="mb-1 menu-item-has-children rounded-xl">
                              <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl"
                                  href="#">Home</a>
                              <ul className="dropdown pl-5">
                                  <li>
                                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                          href="index.html">Home 1</a>
                                  </li>
                                  <li>
                                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                          href="index-2.html">Home 2</a>
                                  </li>
                                  <li>
                                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                          href="index-3.html">Home 3</a>
                                  </li>
                                  <li>
                                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                          href="index-4.html">Home 4</a>
                                  </li>
                                  <li>
                                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                          href="index-5.html">Home 5</a>
                                  </li>
                              </ul>
                          </li>
                          <li className="mb-1 rounded-xl">
                              <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500 rounded-xl"
                                  href="about.html">About Us</a>
                          </li>
                          <li className="mb-1">
                              <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                  href="services.html">Services</a>
                          </li>
                          <li className="mb-1">
                              <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                  href="portfolio.html">Portfolio</a>
                          </li>
                          <li className="mb-1">
                              <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                  href="pricing.html">Pricing</a>
                          </li>
                          <li className="mb-1">
                              <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                  href="team.html">Team</a>
                          </li>
                          <li className="mb-1 menu-item-has-children rounded-xl">
                              <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                  href="team.html">Blog</a>
                              <ul className="dropdown pl-5">
                                  <li>
                                      <a href="blog.html"
                                          className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Category
                                          1</a>
                                  </li>
                                  <li>
                                      <a href="blog-2.html"
                                          className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Category
                                          2</a>
                                  </li>
                                  <li>
                                      <a href="blog-single.html"
                                          className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Single
                                          1</a>
                                  </li>
                                  <li>
                                      <a href="blog-single-2.html"
                                          className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">Single
                                          2</a>
                                  </li>
                              </ul>
                          </li>
                          <li className="mb-1">
                              <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                  href="faqs.html">Faqs</a>
                          </li>
                          <li className="mb-1">
                              <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                  href="testimonials.html">Testimonial</a>
                          </li>
                          <li className="mb-1">
                              <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500"
                                  href="contact.html">Contact Us</a>
                          </li>
                      </ul>
                      <div className="mt-4 pt-6 border-t border-blueGray-100">
                          <a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded"
                              href="#">Sign Up</a>
                          <a className="block px-4 py-3 mb-2 text-xs text-center text-blue-500 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                              href="#">Log In</a>
                      </div>
                  </div>
                  <div className="mt-auto">
                      <p className="my-4 text-xs text-blueGray-400">
                          <span>Get in Touch</span>
                          <a className="text-blue-500 hover:text-blue-500 underline" href="#"><span className="__cf_email__"
                                  data-cfemail="fd9e9293899c9e89bd9092938e89d39e9290">[email&#160;protected]</span></a>
                      </p>
                      <a className="inline-block px-1" href="#">
                          <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606562/Tpt/imgs/icons/facebook-blue_mkig3t.svg" alt="" />
                      </a>
                      <a className="inline-block px-1" href="#">
                          <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606563/Tpt/imgs/icons/twitter-blue_j2nsbs.svg" alt="" />
                      </a>
                      <a className="inline-block px-1" href="#">
                          <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606563/Tpt/imgs/icons/instagram-blue_pmb1sp.svg" alt="" />
                      </a>
                  </div>
              </nav>
          </div>

          <section className="-mt-24">
          <Carousel  infiniteLoop useKeyboardArrows autoPlay interval={7500} swipeable={false} dynamicHeight={true} showThumbs={false} showArrows={false} width={'100%'}>

          <div className="bg-top bg-cover bg-no-repeat pb-8 relative pt-24 h-vh" style={{ backgroundImage:"url('https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673618534/Tpt/imgs/stock_cdoqgs.jpg')",  height:"100%"}}>
          {/* <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673618534/Tpt/imgs/stock_cdoqgs.jpg" className=" object-cover w-full h-full" /> */}

          {/* <motion.section
                animate={{ x: stop?num : 1900  }}
                onClick={(e)=>handleClick(e)}
               transition={{type:"tween",  repeat:Infinity, duration:7  }}
               className="  w-36  h-32 absolute top-50">
                   <img src='https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673618537/Tpt/imgs/Bicycle_man_flexc4.gif' className='w-full h-full object-cover' />
               </motion.section> */}
                      <div className="container">
                          <div className="py-12 text-center">
                              <div className="max-w-2xl mx-auto mb-8">
                                  <h2
                                      className="text-white text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                      TPT <span className="text-blue-500">International</span></h2>
                                  <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">We
                                      are a <span className="typewrite d-inline text-brand" data-period="3000"
                                          data-type='["creative agency", "PR firm", "global brand" ]'></span></p>
                              </div>
                              <div>
                                  <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animated animate__fadeInUp"
                                      href="#key-features">Key Features</a>
                                  <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white rounded wow animate__animated animate__fadeInUp"
                                      data-wow-delay=".3s" href="#how-we-work">How We Work?</a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="bg-top bg-cover bg-no-repeat pb-8 relative pt-24 h-vh"
                      style={{ backgroundImage:"url('https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606574/Tpt/imgs/placeholders/img-14_twiz9h.jpg')" }}>
                      <div className="container">
                          <div className="py-12 text-center">
                              <div className="max-w-2xl mx-auto mb-8">
                                  <h2
                                      className="text-white text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                      TPT <span className="text-blue-500">International</span></h2>
                                  <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">We
                                      are a <span className="typewrite d-inline text-brand" data-period="3000"
                                          data-type='["creative agency", "PR firm", "global brand" ]'></span></p>
                              </div>
                              <div>
                                  <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animated animate__fadeInUp"
                                      href="#key-features">Key Features</a>
                                  <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white rounded wow animate__animated animate__fadeInUp"
                                      data-wow-delay=".3s" href="#how-we-work">How We Work?</a>
                              </div>
                          </div>
                      </div>
                  </div>



          </Carousel>
          </section>
          <section className="py-12 md:py-16 lg:py-32 overflow-x-hidden" id="key-features">
              <div className="container px-4 mx-auto">
                  <div className="flex flex-wrap lg:flex-nowrap">
                      <div className="w-full lg:w-1/2">
                          <div className="lg:py-6 lg:pr-32 wow animate__ animate__fadeIn animated" data-wow-delay=".3s"
                              style={{ visibility:"visible", animationDelay:"0.3s", animationName:"fadeIn" }}>
                              <div className="mb-4">
                                  <span
                                      className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__ animate__fadeInDown"
                                      data-wow-delay=".9s"
                                      style={{ visibility:"visible", animationDelay:"0.9s", animationName:"fadeInDown" }}>Why
                                      choose us</span>
                                  <h2 className="text-4xl mt-5 font-bold font-heading wow animate__ animate__fadeInUp"
                                      data-wow-delay=".3s"
                                      style={{ visibility:"visible", animationDelay:"0.3s", animationName:"fadeInUp" }}>Key
                                      Features</h2>
                              </div>
                              <div className="flex items-start py-4 wow animate__ animate__fadeInUp" data-wow-delay=".5s"
                                  style={{ visibility:"visible", animationDelay:"0.5s", animationName:"fadeInUp" }}>
                                  <div className="w-8 mr-5 text-blue-500">
                                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                                          </path>
                                      </svg>
                                  </div>
                                  <div>
                                      <h3 className="mb-2 text-xl font-semibold font-heading">Expand Your Reach</h3>
                                      <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur
                                          adipisicing elit. Veritatis expedita animi.</p>
                                  </div>
                              </div>
                              <div className="flex items-start py-4 wow animate__ animate__fadeInUp" data-wow-delay=".7s"
                                  style={{ visibility:"visible", animationDelay:"0.7s", animationName:"fadeInUp" }}>
                                  <div className="w-8 mr-5 text-blue-500">
                                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                      </svg>
                                  </div>
                                  <div>
                                      <h3 className="mb-2 text-xl font-semibold font-heading">Annualized Growth</h3>
                                      <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur
                                          adipisicing elit. Veritatis expedita animi.</p>
                                  </div>
                              </div>
                              <div className="flex items-start py-4 wow animate__ animate__fadeInUp" data-wow-delay=".9s"
                                  style={{ visibility:"visible", animationDelay:"0.9s", animationName:"fadeInUp" }}>
                                  <div className="w-8 mr-5 text-blue-500">
                                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                          </path>
                                      </svg>
                                  </div>
                                  <div>
                                      <h3 className="mb-2 text-xl font-semibold font-heading">Book Your Providers</h3>
                                      <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor, sit amet consectetur
                                          adipisicing elit. Veritatis expedita animi.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                          <div className="wow animate__ animate__fadeInRight animated" data-wow-delay=".5s"
                              style={{ visibility:"visible", animationDelay:"0.5s", animationName:"fadeInRight" }}>
                              <img className="jump relative mx-auto rounded-xl w-full z-10"
                                  src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606577/Tpt/imgs/placeholders/img-1_pncd7n.png" alt=""/>
                              <img className="absolute top-0 left-0 w-40 -ml-12 -mt-12"
                                  src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606559/Tpt/imgs/elements/blob-tear_nwfqzu.svg" alt=""/>
                              <img className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12"
                                  src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606559/Tpt/imgs/elements/blob-tear_nwfqzu.svg" alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="py-12 md:py-20">
              <div className="container">
                  <div className="flex flex-wrap items-center mb-12">
                      <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                          <h2 className="text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated"
                              data-wow-delay=".1s"
                              style={offer} >
                              <span>Our Offerings</span>
                              <br/>
                               <span className="text-blue-600">your Business</span>
                          </h2>
                      </div>
                      <div className="w-full lg:w-1/2">
                          <div className="lg:relative lg:bottom-0 lg:left-0 flex justify-center wow animate__animated animate__fadeInUp"
                              data-wow-delay=".5s">
                              <div id="carausel-fade-1-arrows" className="flex"></div>
                          </div>
                           <p className="lg:pl-16 text-blueGray-400 leading-loose wow animate__ animate__fadeInUp animated" data-wow-delay=".4s" style={{ visibility:"visible",  animationDelay:"0.4s", animationName:"fadeInUp" }}>Business solution company sit our any how site used the our company any site us it-solve theme is very professional theme business &amp; corporate, finance, advisor, solution, company and all project used, there are all kinds of websites here.</p>
                      </div>
                  </div>
                  <div className="carausel-fade slick-carausel" id="carausel-fade-1">
                      <div>
                          <div className="flex flex-wrap">
                              <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                                  <div className="max-w-md lg:max-w-full lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                                      <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeInUp animated"
                                          data-wow-delay=".3s">Simple Solution for <span
                                              className="text-blue-500">Complex</span> Connections1</h2>
                                      <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeInUp"
                                          data-wow-delay=".9s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                          Sed luctus eget justo et iaculis.</p>
                                  </div>
                                  <div className="absolute">
                                      <a className="tracking-wide hover-up-2 mr-2 block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded"
                                          tabIndex="0">Read more...</a>
                                  </div>
                              </div>
                              <div className="w-full lg:w-1/2 flex flex-wrap px-3 wow animate__animated animate__fadeInUp"
                                  data-wow-delay=".5s">
                                  <div className="relative w-full rounded">
                                      <div className="rounded">
                                          <img className="rounded" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606576/Tpt/imgs/placeholders/img-6_qe6ftt.jpg" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div className="flex flex-wrap">
                              <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                                  <div className="max-w-md lg:max-w-full lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                                      <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeInUp animated"
                                          data-wow-delay=".3s">Simple Solution for <span
                                              className="text-blue-500">Complex</span> Connections2</h2>
                                      <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeInUp"
                                          data-wow-delay=".9s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                          Sed luctus eget justo et iaculis.</p>
                                  </div>
                                  <div className="absolute">
                                      <a className="tracking-wide hover-up-2 mr-2 block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded"
                                          tabIndex="0">Read more...</a>
                                  </div>
                              </div>
                              <div className="w-full lg:w-1/2 flex flex-wrap px-3 wow animate__animated animate__fadeInUp"
                                  data-wow-delay=".5s">
                                  <div className="relative w-full rounded">
                                      <div className="rounded">
                                          <img className="rounded" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606579/Tpt/imgs/placeholders/img-7_sqm8o3.png" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div className="flex flex-wrap">
                              <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                                  <div className="max-w-md lg:max-w-full lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                                      <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeInUp animated"
                                          data-wow-delay=".3s">Simple Solution for <span
                                              className="text-blue-500">Complex</span> Connections3</h2>
                                      <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeInUp"
                                          data-wow-delay=".9s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                          Sed luctus eget justo et iaculis.</p>
                                  </div>
                                  <div className="absolute">
                                      <a className="tracking-wide hover-up-2 mr-2 block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded"
                                          tabIndex="0">Read more...</a>
                                  </div>
                              </div>
                              <div className="w-full lg:w-1/2 flex flex-wrap px-3 wow animate__animated animate__fadeInUp"
                                  data-wow-delay=".5s">
                                  <div className="relative w-full rounded">
                                      <div className="rounded">
                                          <img className="rounded" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606579/Tpt/imgs/placeholders/img-8_ntrmtz.png" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="pb-20 mt-12">
              <div className="container">
                  <div className="max-w-lg mx-auto mb-12 text-center">
                      <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated"
                          data-wow-delay=".1s"
                          style={{ visibility:"visible", animationDelay:"0.1s", animationName:"fadeInUp" }}>
                          Clients
                           <br/> <span className="text-blue-500">Our Business</span>
                      </h2>
                  </div>
                  <div className="flex flex-wrap items-center justify-center mx-auto pb-4">
                      <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".1s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606568/Tpt/imgs/logos/brands/brand-1_bbgwl5.png" alt="" />
                      </div>
                      <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".3s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606568/Tpt/imgs/logos/brands/brand-2_xaadee.png" alt="" />
                      </div>
                      <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".5s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606568/Tpt/imgs/logos/brands/brand-3_hd3pdf.png" alt="" />
                      </div>
                      <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".7s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-4_mlifr9.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png" alt="" />
                      </div>
                      <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s">
                          <img className="mx-auto" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606569/Tpt/imgs/logos/brands/brand-5_jilmxt.png" alt="" />
                      </div>
                  </div>
                  <div className="flex flex-row items-center justify-center">
                      <a href="#" className="leading-normal hover-up-2 mr-2 block px-3 py-4 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded"
                          tabIndex="0">Show More...</a>
                  </div>
              </div>
          </section>

          <section className="py-20 xl:bg-contain bg-top bg-no-repeat"
              style={{ backgroundImage:"url('https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606559/Tpt/imgs/backgrounds/intersect_thgazb.svg')" }} id="how-we-work">
              <div className="container">
                  <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                      <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                          <h2
                              className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                              <span>Case Studies</span>
                                <span className="text-blue-500">awesome team</span>
                               <br />
                              <span>for your business dream</span>
                          </h2>
                      </div>
                      <div className="w-full lg:w-1/2 lg:pl-16">
                          <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeInUp">Lorem ipsum
                              dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae
                              nulla malesuada, auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.
                          </p>
                      </div>
                  </div>
                  <div className="flex flex-row -mx-3 -mb-6 text-center " style={{display:"grid",  gridTemplateColumns:"repeat(auto-fit, minimax(260px, 1fr))", gridColumnGap:"1.5rem", gridRowGap:"2rem" }}>
                      <div className="relative w-full md:w-1/2 lg:w-1/3 mb-6 border border-white">
                              <img className="w-full ease-in duration-500 imgScale" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606565/Tpt/imgs/illustrations/eating_o1lbtg.svg" alt=""/>
                              <div className="w-full h-full absolute" style={{ backgroundColor:"rgba(0,0,0, 0.5)", top:"0", zIndex:"1" }}></div>
                              <div className="w-full h-full absolute inset-y-2/4" style={{ zIndex:"2" }}>
                                  <h3 className="mb-2 font-bold font-heading text-white border border-white p-3 inline-block">Project Initialization</h3>
                                  <p className=" text-sm text-blueGray-400 leading-relaxed text-white">Sed ac magna sit amet risus tristique interdum at vel velit. In hac habitasse platea dictumst.</p>
                              </div>
                      </div>
                      <div className="relative w-full md:w-1/2 lg:w-1/3 mb-6 border border-white">
                          <img className="w-full ease-in duration-500 imgScale" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606565/Tpt/imgs/illustrations/eating_o1lbtg.svg" alt=""/>
                          <div className="w-full h-full absolute" style={{ backgroundColor:"rgba(0,0,0, 0.5)", top:"0", zIndex:"1" }}></div>
                          <div className="w-full h-full absolute inset-y-2/4" style={{ zIndex:"2" }}>
                              <h3 className="mb-2 font-bold font-heading text-white border border-white p-3 inline-block">Project Initialization</h3>
                              <p className=" text-sm text-blueGray-400 leading-relaxed text-white">Sed ac magna sit amet risus tristique interdum at vel velit. In hac habitasse platea dictumst.</p>
                          </div>
                  </div>
                  <div className="relative w-full md:w-1/2 lg:w-1/3 mb-6 border border-white">
                      <img className="w-full ease-in duration-500 imgScale" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606565/Tpt/imgs/illustrations/eating_o1lbtg.svg" alt=""/>
                      <div className="w-full h-full absolute" style={{ backgroundColor:"rgba(0,0,0, 0.5)", top:"0", zIndex:"1" }}></div>
                      <div className="w-full h-full absolute inset-y-2/4" style={{ zIndex:"2" }}>
                          <h3 className="mb-2 font-bold font-heading text-white border border-white p-3 inline-block">Project Initialization</h3>
                          <p className=" text-sm text-blueGray-400 leading-relaxed text-white">Sed ac magna sit amet risus tristique interdum at vel velit. In hac habitasse platea dictumst.</p>
                      </div>
              </div>
                  </div>
              </div>

              <div className="flex flex-row items-center justify-center mt-12">
                  <a href="#" className="leading-normal hover-up-2 mr-2 block px-3 py-4 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded"
                      tabIndex="0">Show More...</a>
              </div>
          </section>
          <section className="pb-20 mt-12" id="key-features">
              <div className="container">
                  <div className="max-w-lg mx-auto mb-12 text-center">
                      <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInUp"
                          data-wow-delay=".1s">
                          We Consultant to Get <br />
                          <span className="text-blue-500">Our Business</span> Plan
                      </h2>
                      <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeInUp"
                          data-wow-delay=".3s">Business solution company sit our any how site used the our company any
                          site us it-solve theme is very professional</p>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                          <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeInUp"
                              data-wow-delay=".3s">
                              <div className="text-blue-500 mx-auto mb-4">
                                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                                      </path>
                                  </svg>
                              </div>
                              <h3 className="mb-2 font-bold font-heading">IT Consultancy</h3>
                              <p className="text-sm text-blueGray-400">We believe brand interaction is key to communication.
                                  Real innovations and positive customer experience are the heart of success.</p>
                          </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                          <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeInUp"
                              data-wow-delay=".5s">
                              <div className="text-blue-500 mx-auto mb-4">
                                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                      </path>
                                  </svg>
                              </div>
                              <h3 className="mb-2 font-bold font-heading">Web Development</h3>
                              <p className="text-sm text-blueGray-400">We believe brand interaction is key to communication.
                                  Real innovations and positive customer experience are the heart of success.</p>
                          </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                          <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeInUp"
                              data-wow-delay=".7s">
                              <div className="text-blue-500 mx-auto mb-4">
                                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                                      </path>
                                  </svg>
                              </div>
                              <h3 className="mb-2 font-bold font-heading">App Development</h3>
                              <p className="text-sm text-blueGray-400">We believe brand interaction is key to communication.
                                  Real innovations and positive customer experience are the heart of success.</p>
                          </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-8">
                          <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeInUp"
                              data-wow-delay=".9s">
                              <div className="text-blue-500 mx-auto mb-4">
                                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                  </svg>
                              </div>
                              <h3 className="mb-2 font-bold font-heading">Digital Marketing</h3>
                              <p className="text-sm text-blueGray-400">We believe brand interaction is key to communication.
                                  Real innovations and positive customer experience are the heart of success.</p>
                          </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                          <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeInUp"
                              data-wow-delay=".3s">
                              <div className="text-blue-500 mx-auto mb-4">
                                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207">
                                      </path>
                                  </svg>
                              </div>
                              <h3 className="mb-2 font-bold font-heading">Right Solutions</h3>
                              <p className="text-sm text-blueGray-400">We believe brand interaction is key to communication.
                                  Real innovations and positive customer experience are the heart of success.</p>
                          </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                          <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeInUp"
                              data-wow-delay=".5s">
                              <div className="text-blue-500 mx-auto mb-4">
                                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                      </path>
                                  </svg>
                              </div>
                              <h3 className="mb-2 font-bold font-heading">Responsive Site</h3>
                              <p className="text-sm text-blueGray-400">We believe brand interaction is key to communication.
                                  Real innovations and positive customer experience are the heart of success.</p>
                          </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                          <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeInUp"
                              data-wow-delay=".7s">
                              <div className="text-blue-500 mx-auto mb-4">
                                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z">
                                      </path>
                                  </svg>
                              </div>
                              <h3 className="mb-2 font-bold font-heading">Clean Design</h3>
                              <p className="text-sm text-blueGray-400">We believe brand interaction is key to communication.
                                  Real innovations and positive customer experience are the heart of success.</p>
                          </div>
                      </div>
                      <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                          <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeInUp"
                              data-wow-delay=".9s">
                              <div className="text-blue-500 mx-auto mb-4">
                                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
                                      </path>
                                  </svg>
                              </div>
                              <h3 className="mb-2 font-bold font-heading">Process Research</h3>
                              <p className="text-sm text-blueGray-400">We believe brand interaction is key to communication.
                                  Real innovations and positive customer experience are the heart of success.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="py-20 xl:bg-contain bg-top bg-no-repeat"
              style={{ backgroundImage:"url('https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606559/Tpt/imgs/backgrounds/intersect_thgazb.svg')" }}>
              <div className="container">
                  <div className="text-center mb-8">
                      <h2
                          className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeInUp animated">
                          <span>Choose Your </span>
                          <br />
                          <span className="text-blue-600">Best</span>
                          <span>Pricing Plan</span>
                      </h2>
                      <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInUp animated"
                          data-wow-delay=".3s">Great Things In Business Are Never Done By One Person</p>
                  </div>
                  <div className="flex flex-wrap sm:justify-center mb-10">
                      <label className="flex items-center mr-8 mb-2 wow animate__animated animate__fadeInUp animated"
                          data-wow-delay=".3s">
                          <input type="radio" name="billing" value="1" />
                          <span className="mx-2 font-semibold">Monthly Billing</span>
                          <span
                              className="inline-flex items-center justify-center w-12 h-10 bg-blue-500 text-white font-semibold rounded">$59</span>
                      </label>
                      <label className="flex items-center mb-2 wow animate__animated animate__fadeInUp animated"
                          data-wow-delay=".5s">
                          <input type="radio" name="billing" value="2" />
                          <span className="mx-2 font-semibold">Annual Billing</span>
                          <span
                              className="inline-flex items-center justify-center w-12 h-10 bg-blue-500 text-white font-semibold rounded">$99</span>
                      </label>
                  </div>
                  <div className="flex flex-wrap bg-white rounded shadow wow animate__animated animate__fadeInUp animated">
                      <div className="w-full md:w-1/2 lg:w-2/5 px-3">
                          <div className="p-8 text-center">
                              <span className="text-blueGray-400">Sign In</span>
                              <h4 className="mb-6 text-2xl">Setup your payment</h4>
                              <div className="flex mb-4 px-4 bg-blueGray-100 rounded">
                                  <input
                                      className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                                      type="email" placeholder="name@email.com" />
                                  <svg className="h-6 w-6 ml-4 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg"
                                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207">
                                      </path>
                                  </svg>
                              </div>
                              <div className="flex mb-6 px-4 bg-blueGray-100 rounded">
                                  <input
                                      className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                                      type="password" placeholder="Enter your password" />
                                  <button className="ml-4">
                                      <svg className="h-6 w-6 my-auto text-blueGray-300" xmlns="http://www.w3.org/2000/svg"
                                          fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                          </path>
                                      </svg>
                                  </button>
                              </div>
                              <div className="text-left mb-5 text-sm text-blueGray-400">
                                  <label>
                                      <input type="checkbox" name="terms" value="1" />
                                      <span className="ml-1">I agree to terms and conditions.</span>
                                  </label>
                              </div>
                              <button
                                  className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded">Purchase
                                  now</button>
                          </div>
                      </div>
                      <div className="relative w-full md:w-1/2 lg:w-3/5 px-3 bg-blue-500 rounded-r overflow-hidden">
                          <div className="max-w-sm px-12 pt-12">
                              <span className="text-xs text-blue-200">Various Analysis Options</span>
                              <h3 className="mb-4 text-4xl font-bold font-heading text-white">Techno Provides Realtime Best
                                  Data Solutions.</h3>
                          </div>
                          <div className="absolute right-0 bottom-0">
                              <div className="flex items-center h-full">
                                  <img className="h-80" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606567/Tpt/imgs/illustrations/online-shopping_niaqwr.png" alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="py-20">
              <div className="container">
                  <div className="max-w-2xl lg:max-w-3xl mx-auto">
                      <div className="mb-12 text-center">
                          <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeInUp animated"
                              data-wow-delay=".1s">Get in touch!</h2>
                          <p className="text-blueGray-400 wow animate__animated animate__fadeInUp animated"
                              data-wow-delay=".5s">We will be glad to hear from you</p>
                      </div>
                      <div className="flex flex-wrap -mx-3 text-center">
                          <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated"
                              data-wow-delay=".1s">
                              <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg"
                                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                  </path>
                              </svg>
                              <div className="leading-relaxed">
                                  <span className="text-sm text-blueGray-400">Phone</span>
                                  <p>+ 48 654-430-309</p>
                                  <p>+ 1 6532-430-309</p>
                              </div>
                          </div>
                          <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated"
                              data-wow-delay=".3s">
                              <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg"
                                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                  </path>
                              </svg>
                              <div className="leading-relaxed">
                                  <span className="text-sm text-blueGray-400">E-mail</span>
                                  <p><a href="http://wp.alithemes.com/cdn-cgi/l/email-protection" className="__cf_email__"
                                          data-cfemail="3d5e5253495c5e497d5052534e49135e5250">[email&#160;protected]</a>
                                  </p>
                                  <p><a href="http://wp.alithemes.com/cdn-cgi/l/email-protection" className="__cf_email__"
                                          data-cfemail="4838293c082d30292538242d662b2725">[email&#160;protected]</a></p>
                              </div>
                          </div>
                          <div className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated"
                              data-wow-delay=".5s">
                              <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg"
                                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                  </path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                              <div className="leading-relaxed">
                                  <span className="text-sm text-blueGray-400">Address</span>
                                  <p>11567 E Broadview Dr</p>
                                  <p>Colorado(CO), 80117</p>
                              </div>
                          </div>
                      </div>
                      <div>
                          <form>
                              <div className="mb-4 text-sm wow animate__animated animate__fadeInUp animated"
                                  data-wow-delay=".1s">
                                  <span className="mr-4 font-semibold">Departament:</span>
                                  <label className="mr-4">
                                      <input className="mr-1" type="radio" name="department" value="1"  />
                                      <span>Support</span>
                                  </label>
                                  <label>
                                      <input className="mr-1" type="radio" name="department" value="2" />
                                      <span>Sales</span>
                                  </label>
                              </div>
                              <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeInUp animated"
                                  data-wow-delay=".3s">
                                  <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                                      <div className="mb-4">
                                          <input
                                              className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                                              type="text" placeholder="Subject" />
                                      </div>
                                      <div className="mb-4">
                                          <input
                                              className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                                              type="text" placeholder="Name" />
                                      </div>
                                      <div className="mb-4">
                                          <input
                                              className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                                              type="email" placeholder="name@example.com" />
                                      </div>
                                      <div>
                                          <label className="flex px-2 bg-blueGray-50 rounded">
                                              <input className="hidden" type="file" name="Choose file" />
                                              <span
                                                  className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                                                  Browse</span>
                                          </label>
                                      </div>
                                  </div>
                                  <div className="w-full lg:w-1/2 px-3">
                                      <textarea
                                          className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                                          placeholder="Message..."></textarea>
                                  </div>
                              </div>
                              <div className="flex justify-between items-center">
                                  <label>
                                      <input className="mr-1" type="checkbox" name="terms" value="1" />
                                      <span className="text-sm font-semibold">I agree to terms and conditions.</span>
                                  </label>
                                  <button
                                      className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                                      type="submit">Submit</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>

          <section className="relative footer-2 border-t border-gray-100">
              <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-50"></div>
              <div className="container">
                  <div className="relative flex flex-wrap -mx-4">
                      <div
                          className="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                          <a className="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none wow animate__animated animate__fadeInUp animated"
                              data-wow-delay=".1s" href="index.html">
                              <img className="h-10" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606570/Tpt/imgs/logos/monst-logo_xdyxjw.svg" alt="" />
                          </a>
                          <div className="mt-12 mb-16">
                              <p className="mb-4 text-xs text-blueGray-400 text-center lg:text-left wow animate__animated animate__fadeInUp animated"
                                  data-wow-delay=".1s">Subscribe and stay fully connected with product.</p>
                              <div className="flex flex-wrap lg:flex-nowrap items-center wow animate__animated animate__fadeInUp animated"
                                  data-wow-delay=".3s">
                                  <div className="flex w-full lg:w-2/3 mb-3 lg:mb-0 px-4 bg-blueGray-50 rounded">
                                      <svg className="h-6 w-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                          fill="currentColor">
                                          <path
                                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                          </path>
                                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                      </svg>
                                      <input
                                          className="w-full py-4 pl-3 text-xs text-blueGray-400 bg-blueGray-50 outline-none"
                                          type="text" placeholder="Type your e-mail" />
                                  </div>
                                  <button
                                      className="hover-up-2 w-full lg:w-auto py-4 px-8 lg:ml-6 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                                      type="submit">Sign Up</button>
                              </div>
                          </div>
                          <div className="hidden lg:block wow animate__animated animate__fadeInUp animated"
                              data-wow-delay=".5s">
                              <p className="text-xs text-blueGray-400">&copy; 2021. All rights reserved.</p>
                              <div className="-mx-2 mt-4">
                                  <a className="inline-block px-2" href="#">
                                      <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606562/Tpt/imgs/icons/facebook_tdewxa.svg" alt="" />
                                  </a>
                                  <a className="inline-block px-2" href="#">
                                      <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606564/Tpt/imgs/icons/twitter_ag6xbj.svg" alt="" />
                                  </a>
                                  <a className="inline-block px-2" href="#">
                                      <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606563/Tpt/imgs/icons/instagram-blue_pmb1sp.svg" alt="" />
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="relative w-full lg:w-1/2 px-4 pt-40 lg:pl-12">
                          <div className="flex flex-row flex-wrap justify-around mb-12">
                              <div className="w-1/2 lg:w-auto mb-12 wow animate__animated animate__fadeInUp animated"
                                  data-wow-delay=".1s">
                                  <h5 className="mb-6 text-lg font-bold font-heading">About</h5>
                                  <ul className="space-y-3">
                                      <li>
                                          <a className="text-lg text-blueGray-400 hover:text-blueGray-500"
                                              href="about.html">About us</a>
                                      </li>
                                      <li>
                                          <a className="text-lg text-blueGray-400 hover:text-blueGray-500"
                                              href="portfolio.html">Portfolio</a>
                                      </li>
                                      <li>
                                          <a className="text-lg text-blueGray-400 hover:text-blueGray-500"
                                              href="services.html">Services</a>
                                      </li>
                                      <li>
                                          <a className="text-lg text-blueGray-400 hover:text-blueGray-500"
                                              href="contact.html">Contact</a>
                                      </li>
                                  </ul>
                              </div>
                              <div className="w-1/2 lg:w-auto mb-12 wow animate__animated animate__fadeInUp animated"
                                  data-wow-delay=".3s">
                                  <h5 className="mb-6 text-lg font-bold font-heading">Quick links</h5>
                                  <ul className="space-y-3">
                                      <li>
                                          <a className="text-lg text-blueGray-400 hover:text-blueGray-500"
                                              href="team.html">Team</a>
                                      </li>
                                      <li>
                                          <a className="text-lg text-blueGray-400 hover:text-blueGray-500"
                                              href="pricing.html">Pricing</a>
                                      </li>
                                      <li>
                                          <a className="text-lg text-blueGray-400 hover:text-blueGray-500"
                                              href="testimonials.html">Testimonials</a>
                                      </li>
                                      <li>
                                          <a className="text-lg text-blueGray-400 hover:text-blueGray-500"
                                              href="faqs.html">Faqs</a>
                                      </li>
                                  </ul>
                              </div>
                              <div className="w-full lg:w-auto mb-4 wow animate__animated animate__fadeInUp animated"
                                  data-wow-delay=".5s">
                                  <h5 className="mb-6 text-lg font-bold font-heading">Blog</h5>
                                  <ul className="space-y-3">
                                      <li>
                                          <a className="text-lg text-blueGray-400 hover:text-blueGray-500"
                                              href="blog.html">Bussiness</a>
                                      </li>
                                      <li>
                                          <a className="text-lg text-blueGray-400 hover:text-blueGray-500"
                                              href="blog-2.html">Marketing</a>
                                      </li>
                                      <li>
                                          <a className="text-lg text-blueGray-400 hover:text-blueGray-500"
                                              href="blog-single.html">Single</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="lg:hidden text-center">
                              <p className="text-xs text-blueGray-400">&copy; 2021. All rights reserved.</p>
                              <div className="-mx-2 mt-4">
                                  <a className="inline-block px-2" href="#">
                                      <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606562/Tpt/imgs/icons/facebook_tdewxa.svg" alt="" />
                                  </a>
                                  <a className="inline-block px-2" href="#">
                                      <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606564/Tpt/imgs/icons/twitter_ag6xbj.svg" alt="" />
                                  </a>
                                  <a className="inline-block px-2" href="#">
                                      <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606563/Tpt/imgs/icons/instagram-blue_pmb1sp.svg" alt="" />
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

      </div>



      {/* <div id="preloader-active">
          <div className="preloader flex-1 content-center">
              <div className="logo absolute inset-y-2/4 jump">
                  <img src="assets/imgs/logos/favicon.svg" alt="" />
                  <h1 className="text-lg font-semibold">Monst</h1>
              </div>
          </div>
      </div> */}

      </div>
    )

}

export default Example;

if (document.getElementById('example')) {
    const Index = ReactDOM.createRoot(document.getElementById("example"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
