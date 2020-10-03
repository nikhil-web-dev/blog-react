import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    render(){
        return(
            <section className="container">   
              
                    <div className="row justify-content-center">

                        <div className="col- col-sm-10 col-md-8 ">
                           
                            
                                <div className="card blogCard home_blog_card ">
                                    <div className="card-header d-flex justify-content-between">
                                        <div >
                                            <span>Username</span>
                                                <br />
                                                <span className="text-muted">time/date</span>
                                        </div>

                                        <div className="align-self-center">
                                            <Link to="#"> Follow </Link>
                                        </div>
                                    </div>
                                    <img src="https://images.pexels.com/photos/4835429/pexels-photo-4835429.jpeg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Blog title</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>

                                <div className="card card-primary p-3 home_blog_card">
                                
                                    <blockquote className="card-blockquot text-center ">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                        <footer>
                                            <small className="text-muted">
                                                Someone famous in <cite title="Source Title">Source Title</cite>
                                            </small>
                                        </footer>
                                    </blockquote>
                                </div>
                                
                           
                        </div>

                        <div className="col-md-4 text-light ">
                            <div className="card bg-dark p-2 right_container_top">
                                <div className="media align-items-center ">
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/21/21104.svg" className="mr-3 profile_avatar align-self-center" alt="..." />
                                    <div className="media-body">
                                            <h5 className="mt-0 align-self-center">User Name</h5>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                
            </section>

        )
    }
}

export default Home;