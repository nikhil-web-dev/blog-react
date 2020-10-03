import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {login, logout} from '../../Actions'
import {useSelector, useDispatch} from 'react-redux';

import '../../Styles/style.css'


const Navbar = () => {

    const islog = useSelector(state => state.log);
    const dispatch = useDispatch();

    return(
        <nav className="navbar navbar-expand-lg bg-dark p-3 sticky-top">
            <Link className="navbar-brand text-light" to = "#">XYZ Blog</Link>
                <button 
                    className="navbar-toggler" 
                    type="button"
                    data-toggle="collapse" 
                    data-target="#navbarTogglerDemo02" 
                    aria-controls="navbarTogglerDemo02" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      
                    </ul>

                   {islog ? 
                
                    <section>

                        <Link to="/home" class="google btn text-light">
                           Home
                        </Link>

                        <Link to="/create" class="google btn text-light">
                            Create
                        </Link>

                        <Link to="/myblogs" class="google btn text-light">
                            My Blogs
                        </Link>

                        <Link to="/profile" class="google btn text-light">
                            User Profile
                        </Link>

                        <button onClick={()=>dispatch(logout())} class="google btn text-light">
                            Logout
                        </button>

                        

                    </section>
                     :
                     <button onClick={()=>dispatch(login())} class="google btn text-light">
                        <i class="fa fa-google fa-fw"></i>
                            Sign Up with Google
                    </button>
                   }
                </div>
        </nav>
    )
}

export default Navbar;