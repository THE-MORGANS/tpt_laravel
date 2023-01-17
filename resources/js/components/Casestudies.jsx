import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import MoblieNav from './MoblieNav';
import { casestudies } from './Case';
import ReactPaginate from 'react-paginate';

export default function Casestudies() {

    const [show, Setshow] =useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const[postPerPage, setPostsperPage] = useState(10)

    let num = [];
    for (let i = 1; i <= Math.ceil(casestudies.length / postPerPage); i++) {
      num.push(i);

    }
    let numberofpages = num.length;

    const indexofLastPost = currentPage * postPerPage
const indexofFirstPost = indexofLastPost - postPerPage
 const Post = casestudies?.slice(indexofFirstPost, indexofLastPost)


 const handleNext =(data)=>{
    let Answer = data.selected + 1;
    setCurrentPage(Answer)
 }

 let url = window.location.origin

 const handleview =(name)=>{
  window.location.href = `${url}/viewcase/${name}`
 }




  return (
    <div className="main">

 <Navbar Setshow={Setshow} show={show}/>
<MoblieNav Setshow={Setshow} show={show} />

    <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
        <div className="container text-center">
            <h1 className="text-2xl lg:text-4xl font-bold mb-5 wow animate__animated animate__fadeInUp animated">Case Studies</h1>
            <ul className="mx-auto text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeInUp animated">
                <li className="inline-flex items-center">
                    <a href="#" className="hover:text-blue-500 text-gray-800">Home</a>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </li>
                <li className="inline-flex items-center text-gray-400" >
                    <span >Case Studies</span>
                </li>
            </ul>
        </div>
    </section>

    <section className="py-12 md:py-20">
        <div className="container">
            <div className="max-w-lg mx-auto mb-12 text-center">
                <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeInUp animated" data-wow-delay=".1s">Case studies</span>
                <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeInUp animated" data-wow-delay=".3s">
                    We've help brands reach the world
                   <span className="text-blue-500">Latest</span>
                </h2>
                <div>
                    <div className="flex flex-wrap -mx-3 mb-6 lg:mb-0">

                    </div>
                </div>
             <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeInUp animated" data-wow-delay=".5s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 lg:mb-0">
                <div className="w-full lg:w-full flex flex-wrap  items-center justify-center px-3 mb-6 lg:md-0 " style={{display:"grid",  gridTemplateColumns:"repeat(auto-fit, minimax(260px, 1fr))", gridColumnGap:"1.5rem", gridRowGap:"2rem" }} >

                        {Post.length > 0?
                        Post.map((item)=>{
                          if(item.name === "Bigi" || item.name === "Fearless"){
                               return   <div className="hover-up-5  w-1/6 h-64  wow animate__animated animate__fadeIn animated relative" data-wow-delay=".1s" onClick={()=>handleview(item.name)}>
                               <img className="h-full w-full object-cover rounded" src="https://res.cloudinary.com/the-morgans-consortium/image/upload/v1673606572/Tpt/imgs/placeholders/img-10_elf2as.jpg" alt="" />

                               <article className='flex flex-row items-center justify-center w-full rounded-md absolute top-0 left-0 right-0 bottom-0 bg-cover  bg-opacity-10'
                              style={{ backgroundColor:'rgba(0, 0, 0, 0.2)' }}>

                                 <div className='w-10/12 m-auto flex flex-col items-center justify-center py-1 px-8'>
                                      <div className='rounded-md px-2 p-3 border border-white font-semibold text-white'>
                                      {item.name}
                                       </div>

                                       <section className='px-2 py-2  text-justify font-medium text-white'>
                                       {item.body1?item.body1.substring(0,100):""}
                                       </section>
                                 </div>

                               </article>
                           </div>
                          }
                        })

                        :""}
                </div>
                <section className="w-full flex flex-row items-center justify-center">
                <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                    pageCount={numberofpages}
                    breakLabel={"..."}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={handleNext}
                    containerClassName={'inline-flex items-center justify-center '}
                    pageClassName={'m-2'}
                    pageLinkClassName={'h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-blue-500 hover:text-white'}
                    previousClassName={'h-10 px-5 text-indigo-600 transition-colors text-center duration-150 bg-white focus:shadow-outline hover:bg-blue-500 flex items-center justify-center rounded-tl-lg rounded-bl-lg hover:text-white'}
                    nextClassName={'h-10 px-5 text-indigo-600 transition-colors text-center duration-150 bg-white focus:shadow-outline hover:bg-blue-500 flex items-center justify-center rounded-tr-lg rounded-br-lg hover:text-white'}
                />
                </section>
            </div>
        </div>
    </section>
    <section className="pb-20">
        <div className="container">
            <div className="max-w-2xl lg:max-w-3xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeInUp animated" data-wow-delay=".1s">Get in touch!</h2>
                    <p className="text-blueGray-400 wow animate__animated animate__fadeInUp animated" data-wow-delay=".5s">We will be glad to hear from you</p>
                </div>
                <div className="flex flex-wrap -mx-3 text-center">
                    <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated" data-wow-delay=".1s">
                        <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <div className="leading-relaxed">
                            <span className="text-sm text-blueGray-400">Phone</span>
                            <p>+ 48 654-430-309</p>
                            <p>+ 1 6532-430-309</p>
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated" data-wow-delay=".3s">
                        <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <div className="leading-relaxed">
                            <span className="text-sm text-blueGray-400">E-mail</span>
                            <p><a href="http://wp.alithemes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d1b2bebfa5b0b2a591bcbebfa2a5ffb2bebc">[email&#160;protected]</a></p>
                            <p><a href="http://wp.alithemes.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="cabaabbe8aafb2aba7baa6afe4a9a5a7">[email&#160;protected]</a></p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeInUp animated" data-wow-delay=".5s">
                        <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
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
                        <div className="mb-4 text-sm wow animate__animated animate__fadeInUp animated" data-wow-delay=".1s">
                            <span className="mr-4 font-semibold">Departament:</span>
                            <label className="mr-4">
                                <input className="mr-1" type="radio" name="department" value="1" checked="" />
                                <span>Support</span>
                            </label>
                            <label>
                                <input className="mr-1" type="radio" name="department" value="2" />
                                <span>Sales</span>
                            </label>
                        </div>
                        <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeInUp animated" data-wow-delay=".3s">
                            <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                                <div className="mb-4">
                                    <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Subject" />
                                </div>
                                <div className="mb-4">
                                    <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Name" />
                                </div>
                                <div className="mb-4">
                                    <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
                                </div>
                                <div>
                                    <label className="flex px-2 bg-blueGray-50 rounded">
                                        <input className="hidden" type="file" name="Choose file" />
                                        <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer"> Browse</span>
                                    </label>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-3">
                                <textarea className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="Message..."></textarea>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <label>
                                <input className="mr-1" type="checkbox" name="terms" value="1" />
                                <span className="text-sm font-semibold">I agree to terms and conditions.</span>
                            </label>
                            <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">Submit</button>
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
                <div className="w-full lg:w-1/2 pt-20 px-4 max-w-lg lg:max-w-full mx-auto lg:mx-0 text-center lg:text-left">
                    <a className="inline-block mx-auto lg:ml-0 text-3xl font-semibold leading-none wow animate__animated animate__fadeInUp animated" data-wow-delay=".1s" href="index.html">
                        <img className="h-10" src="assets/imgs/logos/monst-logo.svg" alt="" />
                    </a>
                    <div className="mt-12 mb-16">
                        <p className="mb-4 text-xs text-blueGray-400 text-center lg:text-left wow animate__animated animate__fadeInUp animated" data-wow-delay=".1s">Subscribe and stay fully connected with product.</p>
                        <div className="flex flex-wrap lg:flex-nowrap items-center wow animate__animated animate__fadeInUp animated" data-wow-delay=".3s">
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
                    <div className="hidden lg:block wow animate__animated animate__fadeInUp animated" data-wow-delay=".5s">
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
                        <div className="w-1/2 lg:w-auto mb-12 wow animate__animated animate__fadeInUp animated" data-wow-delay=".1s">
                            <h5 className="mb-6 text-lg font-bold font-heading">About</h5>
                            <ul className="space-y-3">
                                <li>
                                    <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="about.html">About us</a>
                                </li>
                                <li>
                                    <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="portfolio.html">Portfolio</a>
                                </li>
                                <li>
                                    <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="services.html">Services</a>
                                </li>
                                <li>
                                    <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/2 lg:w-auto mb-12 wow animate__animated animate__fadeInUp animated" data-wow-delay=".3s">
                            <h5 className="mb-6 text-lg font-bold font-heading">Quick links</h5>
                            <ul className="space-y-3">
                                <li>
                                    <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="team.html">Team</a>
                                </li>
                                <li>
                                    <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="pricing.html">Pricing</a>
                                </li>
                                <li>
                                    <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="testimonials.html">Testimonials</a>
                                </li>
                                <li>
                                    <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="faqs.html">Faqs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-auto mb-4 wow animate__animated animate__fadeInUp animated" data-wow-delay=".5s">
                            <h5 className="mb-6 text-lg font-bold font-heading">Blog</h5>
                            <ul className="space-y-3">
                                <li>
                                    <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="blog.html">Bussiness</a>
                                </li>
                                <li>
                                    <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="blog-2.html">Marketing</a>
                                </li>
                                <li>
                                    <a className="text-lg text-blueGray-400 hover:text-blueGray-500" href="blog-single.html">Single</a>
                                </li>
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

if (document.getElementById('case')) {
    const Index = ReactDOM.createRoot(document.getElementById("case"));

    Index.render(
        <React.StrictMode>
            <Casestudies/>
        </React.StrictMode>
    )
}
