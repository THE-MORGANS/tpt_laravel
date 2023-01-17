import React from 'react'

export default function foo() {
    return (
        <Carousel  infiniteLoop useKeyboardArrows autoPlay interval={7500} swipeable={false}
        dynamicHeight={true} showThumbs={false} showArrows={false}
        style={{ height:"100vh" }}
        >

        <div className=" " style={{
          backgroundImage:"url('https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673618534/Tpt/imgs/stock_cdoqgs.jpg')",
          position:"relative",
          backgroundRepeat:'no-repeat',
          backgroundSize:"cover"
   }}>
        {/* <img src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673618534/Tpt/imgs/stock_cdoqgs.jpg" className=" object-cover w-full h-full" /> */}

        <motion.section
              animate={{ x: stop?num : 1900  }}
              onClick={(e)=>handleClick(e)}
             transition={{type:"tween",  repeat:Infinity, duration:7  }}
             className="absolute">
                 <img src='https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673618537/Tpt/imgs/Bicycle_man_flexc4.gif' className='w-full h-full object-cover' />
             </motion.section>


                    {/* <div className="container">
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
                    </div> */}

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

    )
}
