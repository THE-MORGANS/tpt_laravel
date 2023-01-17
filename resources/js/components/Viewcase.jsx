import React, {useState} from 'react'
import Navbar from './Navbar';
import MoblieNav from './MoblieNav';
import ReactDOM from 'react-dom/client';
import { casestudies } from './Case';
import { SliderData } from './slide';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Viewcase() {
    const [show, Setshow] =useState(false)
    const [ease, Setease] = useState(false)
      let  data = casestudies.filter((item)=>item.name === companyname)
   console.log(data)
const handleup =()=>{
    if(!ease){
        Setease(true)
    }else{
        Setease(false)

    }
}

    // data.length >0? data.map((item, index)=>{
    //     item.picture.length > 0?
    //     console.log(item.picture)
    //     // item.picture.map((one, index)=>{
    //     //        return
    //     // })


    // }):

    // function BackGroundImg (){
    //     data.map((item)=>{
    //        return item.picture.map((item, index)=>{


    //           return <div className="pt-40 pb-40 mb-12 bg-cover bg-no-repeat bg-center rounded-xl" key={index} style={{backgroundImage:`url(${item})`}}>
    //           <div className="max-w-2xl mx-auto">
    //                    <div className="text-center mb-6"></div>
    //             </div>
    //            </div>
    //         })
    //     })
    // }
    // BackGroundImg();
    return (
        <div className="main">

 <Navbar Setshow={Setshow} show={show}/>
 <MoblieNav Setshow={Setshow} show={show} />



        <section className="pb-20">
{data.length > 0?
 data.map((item, index)=>{
 return             <div key={index} className="pt-20 pb-8 mb-12 bg-cover bg-no-repeat " style={{backgroundImage: `url('${item.headerimg}')  `}}>
 <div className="container">
     <div className="max-w-2xl mx-auto">
         <div className="text-center mb-6">
             {/* <span className="text-base md:text-lg">
                 <a className="text-blueGray-200 hover:underline" href="#"><span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">Bussiness</span></a>
                 <span className="text-blueGray-200 text-sm">24 Jan, 2021</span>
             </span> */}
             {/* <h2 className="text-4xl md:text-5xl mt-4 text-white font-bold font-heading">{item.header}</h2> */}
         </div>
         <div className="flex justify-center mb-8">
             {/*
             <img className="w-12 h-12 object-cover rounded-full" src="assets/imgs/placeholders/avatar-8.png" alt="" />
             <div className="pl-4">
                 <p className="text-blueGray-100 mb-1">Alice Bradley</p>
                 <p className="text-xs text-blueGray-200 font-semibold">Author</p>
             </div> */}
         </div>
     </div>
 </div>
</div>

 })
:""}

            <div className="container">
               {data.length >0?
               data.map((item, index)=>{
                return   <div className="max-w-2xl mx-auto" key={index}>
                <div className="mb-2">
                    <h2 className="max-w-lg text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated animated" style={{ visibility:"visible", animationName:"fadeInUp" }} >
                        <span>{item.header}</span>
                    </h2>
                </div>
                <p className="mb-6 leading-loose text-blueGray-400">
                    {item.body1}
                </p>
                <div className="w-full mx-auto px-12 pt-5 pb-10">
                    {/* <div className="w-full mb-6 border-l-4 border-gray-100">
                        <p className="text-lg text-gray-600 px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illo voluptatibus temporibus odio provident.</p>
                    </div> */}
                    {/* <div className="w-full pl-6">
                        <p className="text-md text-indigo-500 font-bold">Scott Windon</p>
                        <p className="text-xs text-gray-500">@scott.windon</p>
                    </div>

                    */}
                </div>
                <div className="mb-2">
                    <h2 className="max-w-lg text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated animated" style={{ visibility:"visible", animationName:"fadeInUp" }} >
                        <span>Brief</span>
                    </h2>
                </div>
                <p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">{item.breif}</p>


                <div className="mb-2">
                    <h2 className="max-w-lg text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated animated" style={{ visibility:"visible", animationName:"fadeInUp" }} >
                        <span>Challenge</span>
                    </h2>
                </div>
                <p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">{item.challenge}</p>

            </div>
               })



               :""}



                        <div className="m-auto">
                           <Carousel showArrows={true}>
                                    {
                                          data.map((item)=>{
                                            return item.picture.map((item, index)=>{


                                               return <div className="pt-40 pb-40 mb-12 bg-cover bg-no-repeat bg-center rounded-xl" key={index} style={{backgroundImage:`url(${item})`}}>
                                               <div className="max-w-2xl mx-auto">
                                                        <div className="text-center mb-6"></div>
                                                 </div>
                                                </div>
                                             })
                                         })
                                    }
                           </Carousel>
                        </div>



       {data.map((item)=>{
   return   <div className="max-w-2xl mx-auto">
   <div className="mb-2">
       <h2 className="max-w-lg text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated animated" style={{visibility:"visible", animationName:"fadeInUp;"}}>
           <span>What We did</span>
       </h2>
   </div>
   <p className="leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
    {item.whatwedid}
   </p>

   <div className="mb-2">
       <h2 className="max-w-lg text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated animated" style={{visibility:"visible", animationName:"fadeInUp;"}}>
           <span className='ca capitalize'>results and testimonials
</span>
       </h2>
   </div>

   <p className="leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
    {item.results_n_testimonials}
   </p>


   {item.other.map((one, index)=>{
     return <section key={index} className={ease?"w-full mt-6 transition duration-150 ease-out block":"w-full mt-6 transition duration-150 ease-in hidden"}>
      <div className="mb-2 ">
         <h2 className="max-w-lg text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated animated" style={{visibility:"visible", animationName:"fadeInUp;"}}>
             <span>{one.header}</span>
         </h2>
     </div>
     <p className="leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">{one.body}</p>

      </section>
   })}


<section className={ease?"w-full mt-6 transition duration-150 ease-out block":"w-full mt-6 transition duration-150 ease-in hidden"}>
      <div className="mb-2 ">
         <h2 className="max-w-lg text-4xl font-bold font-heading wow animate__ animate__fadeInUp animated animated" style={{visibility:"visible", animationName:"fadeInUp;"}}>
             <span>Verifiable and Testimonial</span>
         </h2>
     </div>
     <p className="leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">{item.Verifiable_n_Testimonial}</p>

      </section>
    {/* down  */}
   <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center mt-12" onClick={handleup}>
       <a  className="px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform border border-gray-100 rounded-lg dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"> Read More </a>
   </div>
   {/* down  */}

</div>

       })}




            </div>
        </section>

        {/* <section className="py-20 bg-blue-500">
            <div className="container">
                <div className="text-center max-w-xl mx-auto">
                    <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
                        <span>Subscribe now to </span>
                        <span className="text-blue-200">Our Newsletter</span> <br />
                        <span>and get the Coupon code.</span>
                    </h2>
                    <p className="mb-8 text-blueGray-200">All your information is completely confidential</p>
                    <div className="flex flex-wrap max-w-lg mx-auto">
                        <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">
                            <svg className="h-6 w-6 my-auto text-blue-300" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <input className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-blue-500 outline-none" type="text" placeholder="Type your e-mail" />
                        </div>
                        <button className="w-full md:w-auto py-4 px-8 text-xs text-white text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out" type="submit">Sign Up</button>
                    </div>
                </div>
            </div>
        </section> */}

        <section className="relative">
            <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-50"></div>
            <div className="container">
                <div className="relative flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                        <a className="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none wow animate__animatedanimated animate__fadeInUp animated" data-wow-delay=".1s" href="index.html">
                            <img className="h-10" src="assets/imgs/logos/monst-logo.svg" alt="" />
                        </a>
                        <div className="mt-12 mb-16">
                            <p className="mb-4 text-xs text-blueGray-400 text-center lg:text-left wow animate__animatedanimated animate__fadeInUp animated" data-wow-delay=".1s">Subscribe and stay fully connected with product.</p>
                            <div className="flex flex-wrap lg:flex-nowrap items-center wow animate__animatedanimated animate__fadeInUp animated" data-wow-delay=".3s">
                                <div className="flex w-full lg:w-2/3 mb-3 lg:mb-0 px-4 bg-blueGray-50 rounded">
                                    <svg className="h-6 w-6 my-auto" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                    </svg>
                                    <input className="w-full py-4 pl-3 text-xs text-blueGray-400 bg-blueGray-50 outline-none" type="text" placeholder="Type your e-mail" />
                                </div>
                                <button className="hover-up-2 w-full lg:w-auto py-4 px-8 lg:ml-6 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">Sign Up</button>
                            </div>
                        </div>
                        <div className="hidden lg:block wow animate__animatedanimated animate__fadeInUp animated" data-wow-delay=".5s">
                            <p className="text-xs text-blueGray-400">&copy; 2021. All rights reserved.</p>
                            <div className="-mx-2 mt-4">
                                <a className="inline-block px-2" href="#">
                                    <img src="assets/imgs/icons/facebook-blue.svg" alt="" />
                                </a>
                                <a className="inline-block px-2" href="#">
                                    <img src="assets/imgs/icons/twitter-blue.svg" alt="" />
                                </a>
                                <a className="inline-block px-2" href="#">
                                    <img src="assets/imgs/icons/instagram-blue.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-1/2 px-4 pt-40 lg:pl-12">
                        <div className="flex flex-row flex-wrap justify-around mb-12">
                            <div className="w-1/2 lg:w-auto mb-12 wow animate__animatedanimated animate__fadeInUp animated" data-wow-delay=".1s">
                                <h5 className="mb-6 text-lg font-bold font-heading">About</h5>
                                <ul className="space-y-3">
                                    <li><a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="about.html">About us</a></li>
                                    <li><a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="portfolio.html">Portfolio</a></li>
                                    <li><a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="services.html">Services</a></li>
                                    <li><a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                            <div className="w-1/2 lg:w-auto mb-12 wow animate__animatedanimated animate__fadeInUp animated" data-wow-delay=".3s">
                                <h5 className="mb-6 text-lg font-bold font-heading">Quick links</h5>
                                <ul className="space-y-3">
                                    <li><a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="team.html">Team</a></li>
                                    <li><a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="pricing.html">Pricing</a></li>
                                    <li><a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="testimonials.html">Testimonials</a></li>
                                    <li><a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="faqs.html">Faqs</a></li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-auto mb-4 wow animate__animatedanimated animate__fadeInUp animated" data-wow-delay=".5s">
                                <h5 className="mb-6 text-lg font-bold font-heading">Blog</h5>
                                <ul className="space-y-3">
                                    <li><a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="blog.html">Bussiness</a></li>
                                    <li><a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="blog-2.html">Marketing</a></li>
                                    <li><a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="blog-single.html">Single</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="lg:hidden text-center">
                            <p className="text-xs text-blueGray-400">&copy; 2021. All rights reserved.</p>
                            <div className="-mx-2 mt-4">
                                <a className="inline-block px-2" href="#">
                                    <img src="assets/imgs/icons/facebook-blue.svg" alt="" />
                                </a>
                                <a className="inline-block px-2" href="#">
                                    <img src="assets/imgs/icons/twitter-blue.svg" alt="" />
                                </a>
                                <a className="inline-block px-2" href="#">
                                    <img src="assets/imgs/icons/instagram-blue.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>

    )
}


if (document.getElementById('vcase')) {
    const Index = ReactDOM.createRoot(document.getElementById("vcase"));

    Index.render(
        <React.StrictMode>
            <Viewcase/>
        </React.StrictMode>
    )
}
