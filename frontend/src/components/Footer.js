import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer mt-5 ">
            <footer
                className="p-4 text-center text-lg-start"
            >
                <div className="container p-4 pb-0">
                    <section className="">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Cups And Cakes
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <Link to='/search?category=Cake&query=all&price=all&rating=all&order=newest&page=1'>
                                <p>
                                    Cakes
                                </p>
                                </Link>
                                <Link to='/search?category=csake&query=all&price=all&rating=all&order=newest&page=1'>
                                <p>
                                    Cupcakes
                                </p>
                                </Link>
                                <Link to='/search?category=Cake&query=all&price=all&rating=all&order=newest&page=1'>
                                <p>
                                    Drinks
                                </p>
                                <Link to='/search?category=house&query=all&price=all&rating=all&order=newest&page=1'></Link>
                                <p>
                                    GingerBread
                                </p>
                                </Link>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Useful links
                                </h6>
                                <Link to='/profile'>
                                <p>
                                    Your Account
                                </p>
                                </Link>
                                <Link to='/orderhistory'>
                                <p>
                                    Order History
                                </p>
                                </Link>
                                <Link to='/orderhistory'>
                                <p>
                                    Shipping Rates
                                </p>
                                </Link>
                                <Link to='/profile'>
                                <p>
                                    Help
                                </p>
                                </Link>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> Kanpur, UP</p>
                                <p><i className="fas fa-envelope mr-3"></i> cnc@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> 12345 67890</p>
                                <p><i className="fas fa-print mr-3"></i> 12345 67899</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-4"/>
                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">

                                    <div className="p-3 text-center">
                                        © 2024 Cups And Cakes:
                                        cupsandcakes.com
         
                                </div>
                            </div>
                        </section>
                </div>
            </footer>
        </div>
    )
}

export default Footer