import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import '../Styles/style.css'
import { render } from '@testing-library/react';
import { map } from 'jquery';


const Welcome = () => { 
      const grids = [1, 2, 3, 4, 5];
    return(
        <section>
            <div class="container">
                <div className="card-columns">
                    {grids.map((number) =>
                        <div>
                        <div className="card">
                            <img className="card-img-top img-fluid w-100" 
                            src="https://images.pexels.com/photos/4835429/pexels-photo-4835429.jpeg" 
                            alt="Card image cap" />
                            <div className="card-block p-2">
                                <h4 className="card-title">Blog Title</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                            </div>
                    </div>
                    
                    <div className="card trans_card card-inverse card-primary p-3 text-center">
                        <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                            <footer>
                                <small className="text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </div>
                    <div className="card trans_card card-inverse card-primary p-3 text-center">
                        <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                            <footer>
                                <small className="text-muted">
                                   <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </div>
                
                    <div className="card">
                        <img className="card-img-top img-fluid w-100" 
                        src="https://images.pexels.com/photos/4279625/pexels-photo-4279625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                        alt="Card image cap" />

                        <div className="card-block p-2">
                            <h4 className="card-title">Blog title</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                
                   
                    {/* For oneline thought */}

                    <div className="card trans_card card-inverse card-primary p-3 text-center">
                        <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                            <footer>
                                <small className="text-muted">
                                   <cite title="Source Title">Source Title</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </div>

                    
                    {/* For without image blog */}

                    <div className="card">
                        <div className="card-block p-2">
                            <h4 className="card-title">Blog title</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-block p-2">
                            <h4 className="card-title">Blog title</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    </div>
                    )}
                </div>
            </div>
        </section>
    )
}


export default Welcome;