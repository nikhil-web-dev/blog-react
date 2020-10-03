import React from 'react'
import {Link} from 'react-router-dom'

class UserProfile extends React.Component{
    render(){
        const loop = [1, 2, 3, 4, 5, 6]
        return(
            <section class="container">
                
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div className="card bg-dark p-3  text-light">
                                <div class="media">
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/21/21104.svg" 
                                    class="mr-3 profile_avatar" 
                                    alt="..." 
                                    />
                                    <div class="media-body">
                                        <h5 class="mt-0">User Name</h5>
                                        <p class="mt-0 text-muted">Email</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-dark p-3 mt-3  text-light">
                                <div class="row text-center">

                                    <div class="col-md-3">
                                        <h2><b>0</b></h2>
                                        <h5>Published Blogs</h5>
                                       
                                    </div>

                                    <div class="col-md-3">
                                        <h2><b>0</b></h2>
                                        <h5>Saved Blogs</h5>
                                        
                                    </div>

                                    <div class="col-md-3">
                                        <h2><b>0</b></h2>
                                        <h5>Followers</h5>
                                    </div>

                                    <div class="col-md-3">
                                        <h2><b>0</b></h2>
                                        <h5>Following</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-dark pr-3 pl-3 mt-3  text-light">
                                <div class="row text-left">
                                    <div className="card-header bg-dark">
                                        <h4>About</h4>
                                    </div>
                                    <div className="card-body">
                                        <h5>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt 
                                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        </h5>
                                        <div className="float-right">
                                            <p class="text-info">edit</p>
                                        </div>
                                       
                                    </div>
                                   
                                </div>
                            </div>

                            <div class="card bg-dark mt-3 p-3">
                                <div className="row">
                                    {loop.map((index) =>
                                        <div class="col-md-4 mt-2">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">Blog title</h5>
                                                    <h6 class="card-subtitle mb-2 text-muted">Time/date</h6>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                            </div>
                                        </div>

                                    )}
                                    </div>
                            </div>

                        </div>
                    </div>
              
            </section>

        )
    }
}

export default UserProfile;