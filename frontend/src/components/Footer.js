import React from 'react'

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
                                    T-House
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p>
                                    Burgers
                                </p>
                                <p>
                                    Sandwitches
                                </p>
                                <p>
                                    Drinks
                                </p>
                                <p>
                                    Momos
                                </p>
                            </div>
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Useful links
                                </h6>
                                <p>
                                    Your Account
                                </p>
                                <p>
                                    Become an Affiliate
                                </p>
                                <p>
                                    Shipping Rates
                                </p>
                                <p>
                                    Help
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> Kanpur, UP</p>
                                <p><i className="fas fa-envelope mr-3"></i> thouse@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> 12345 67890</p>
                                <p><i className="fas fa-print mr-3"></i> 12345 67899</p>
                            </div>
                        </div>
                    </section>

                    <hr className="my-4"/>
                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">

                                    <div className="p-3 text-center">
                                        © 2023 T-house:
                                        thouse.com
         
                                </div>
                            </div>
                        </section>
                </div>
            </footer>
        </div>
    )
}

export default Footer